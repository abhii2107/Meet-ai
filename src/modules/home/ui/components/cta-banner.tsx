
import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const CtaBanner = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#111114] via-[#071C27] to-[#111114] border border-[#007BA7]/50 p-10 sm:p-16 text-center shadow-2xl shadow-[#007BA7]/10">
          {/* Background glow effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#007BA7]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FF2D95]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/70 border border-[#FF2D95]/40 text-[#FF65B1] text-sm font-semibold mb-6">
              <Zap size={14} className="fill-[#FF2D95] text-[#FF2D95]" />
              Get Started Today
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Transform Your Meetings?
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Start using Meet.AI today and let AI handle the busywork while
              your team focuses on what matters most.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/meetings">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BA7] hover:bg-[#0094C8] text-white font-bold transition-all shadow-lg shadow-[#007BA7]/25">
                  Start Your Free Trial
                  <ArrowRight size={18} />
                </button>
              </Link>

              <Link href="/upgrade">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0A0A0A] hover:bg-[#1A1A1F] border border-[#FF2D95]/50 text-[#FF65B1] font-bold transition-all">
                  View Pro Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
