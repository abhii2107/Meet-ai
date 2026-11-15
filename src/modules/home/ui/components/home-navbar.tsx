
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";



export const HomeNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/85 border-b border-[#292933] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#007BA7]/15 border border-[#007BA7]/40 p-1 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.svg"
              alt="Meet.AI Logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold tracking-tight text-white">
              Meet<span className="text-[#007BA7]">.AI</span>
            </span>

            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-[#FF2D95]/10 text-[#FF65B1] border border-[#FF2D95]/30 rounded-full">
              SaaS v2.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-[#38BDF8] transition-colors">
            Features
          </a>
          <a href="#demo" className="hover:text-[#38BDF8] transition-colors">
            Product Tour
          </a>
          <a href="#how-it-works" className="hover:text-[#38BDF8] transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-[#FF2D95] transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-[#FF2D95] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden md:flex items-center space-x-4">

          <Link
            href="/meetings"
            className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/meetings"
            className="bg-[#007BA7] hover:bg-[#0095C8] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-[#007BA7]/20 hover:shadow-[#FF2D95]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/meetings"
            className="bg-[#007BA7] hover:bg-[#0095C8] text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition-all"
          >
            Start Free
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141418] border border-[#292933] text-slate-300 hover:text-[#FF2D95]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#292933] px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-slate-300">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38BDF8] py-1"
            >
              Features
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38BDF8] py-1"
            >
              Product Tour
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38BDF8] py-1"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FF2D95] py-1"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FF2D95] py-1"
            >
              FAQ
            </a>
          </div>

          <div className="pt-4 border-t border-[#292933] flex flex-col space-y-3">
            <Link
              href="/meetings"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center font-medium text-slate-200 py-2 rounded-lg bg-[#141418] border border-[#292933]"
            >
              Sign In
            </Link>

            <Link
              href="/meetings"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center font-semibold text-white py-2.5 rounded-lg bg-[#007BA7] hover:bg-[#0095C8] shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
