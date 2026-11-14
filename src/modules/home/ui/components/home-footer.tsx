
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HomeFooter = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#292933] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <Image
                src="/logo.png"
                alt="Meet.AI"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Meet<span className="text-[#007BA7]">.AI</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Turn every meeting into actionable intelligence with your
              AI-powered meeting copilot.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold mb-5">Product</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/meetings" className="hover:text-[#38BDF8] transition-colors">
                  Meetings
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-[#38BDF8] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/upgrade" className="hover:text-[#FF2D95] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-5">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Team Meetings</li>
              <li>AI Meeting Assistant</li>
              <li>Meeting Summaries</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-5">Legal & Security</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#292933] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Meet.AI. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007BA7] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007BA7]" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};
