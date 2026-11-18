"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import {useTRPC} from "@/trpc/client";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { PricingCard } from "../components/pricing-card";
import { toast } from "sonner";

export const UpgradeView = () => {
    const trpc = useTRPC();

    const { data: products } = useSuspenseQuery(
        trpc.premium.getProducts.queryOptions()
    );

    const { data: currentSubscription } = useSuspenseQuery(
        trpc.premium.getCurrentSubscription.queryOptions()
    );

    const redirectToCheckout = async (productId: string) => {
        try {
            const result = await authClient.checkout({
                products: [productId],
            });

            if (result?.url) {
                window.location.assign(result.url);
            }
        } catch {
            toast.error("Unable to open the checkout page. Please try again.");
        }
    };

    const openPortal = async () => {
        try {
            const result = await authClient.customer.portal();
            if (result?.url) {
                window.location.assign(result.url);
            }
        } catch {
            toast.error("Unable to open subscription management.");
        }
    };

    return (
        <div className="flex-1 min-h-[calc(100vh-64px)] bg-[#090E1A] px-4 py-10 md:px-8 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center">
                <div className="mb-10 text-center">
                    <h5 className="text-3xl font-bold md:text-4xl">
                        You are on the{" "}
                        <span className="text-[#24D9A2]">
                            {currentSubscription?.name ?? "Free"}
                        </span>{" "}
                        plan
                    </h5>
                    <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
                        Upgrade your workspace to unlock unlimited meetings, real-time AI copilot Q&A, and advanced team seats.
                    </p>
                </div>
                {products.length === 0 ? (
                    <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-8 text-center text-slate-300">
                        No plans are available right now.
                    </div>
                ) : (
                <div className="grid w-full grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => {
                        const isCurrentProduct = currentSubscription?.id === product.id;
                        const isPremium = !!currentSubscription;
                        const isHighlighted = product.metadata?.variant === "highlighted" || (products.length > 1 && index === Math.floor(products.length / 2));

                        let buttonText = "Upgrade";
                        let onClick = () => redirectToCheckout(product.id);

                        if(isCurrentProduct){
                            buttonText = "Manage";
                            onClick = openPortal;
                        } else if (isPremium) {
                            buttonText = "Change Plan";
                            onClick = openPortal;
                        }

                        return (
                            <PricingCard
                            key={product.id}
                            buttonText={buttonText}
                            onClick={onClick}
                            variant={isHighlighted ? "highlighted" : "default"}
                            title={product.name}
                            price={
                                product.prices[0].amountType === "fixed"
                                ? product.prices[0].priceAmount / 100
                                : 0
                            }
                            description={product.description}
                            priceSuffix={
                                product.recurringInterval
                                    ? `/${product.recurringInterval}`
                                    : "recurringInterval" in product.prices[0]
                                    ? `/${(product.prices[0] as { recurringInterval: string }).recurringInterval}`
                                    : ""
                            }
                            features={product.benefits.map(
                                (benefit) => benefit.description
                            )}
                            badge={(product.metadata?.badge as string | null) ?? (isHighlighted ? "Popular" : null)}
                            />
                        )
                    })}
                </div>
                )}
            </div>
        </div>
    );
};

export const UpgradeViewLoading = () => {
    return (
        <LoadingState  title="Loading" description="This may take a few seconds"/>
    );
};

export const UpgradeViewError = () => {
    return (
        <ErrorState title="Error" description="Something went wrong"/>
    );
};

