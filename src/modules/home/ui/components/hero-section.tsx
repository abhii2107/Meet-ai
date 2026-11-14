
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection: React.FC = () => {
  const heroPhrases = [
    "Autonomous AI Copilot for Every Call",
    "Instant Automated Meeting Summaries",
    "Real-Time Live Transcription & Q&A",
    "Automated Action Items & Workspace Sync",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % heroPhrases.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [heroPhrases.length]);

  return (
    <section className="relative z-10 pt-16 pb-10 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-[#0A0A0A]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#007BA7]/20 rounded-full blur-[140px] opacity-60" />

        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-[#FF2D95]/10 rounded-full blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#29293330_1px,transparent_1px),linear-gradient(to_bottom,#29293330_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141418]/90 border border-[#007BA7]/50 text-[#38BDF8] text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-[#007BA7]/10">
          <Sparkles className="w-4 h-4 text-[#FF2D95] animate-pulse" />
          <span>Introducing Meet.AI 2.0</span>
          <span className="text-[#52525B]">|</span>
          <span className="text-slate-300 font-normal">
            Next-Gen Video & AI Copilot
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FF2D95]" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          Turn Every Meeting into <br />
          <span className="bg-gradient-to-r from-[#007BA7] via-[#38BDF8] to-[#FF2D95] bg-clip-text text-transparent drop-shadow-sm">
            Actionable Intelligence
          </span>
        </h1>

        {/* Animated subtitle */}
        <div className="mb-10 max-w-2xl mx-auto min-h-[2.5em] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPhrase}
              className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {heroPhrases[currentPhrase]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Primary CTA */}
        <div className="flex items-center justify-center mb-10">
          <Link href="/meetings" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#007BA7] hover:bg-[#0095C8] text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-[#007BA7]/20 hover:shadow-[#FF2D95]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2.5 group">
              <span>Start Free Meeting</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#007BA7]" />
            <span>Free Forever Plan</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#FF2D95]" />
            <span>No Credit Card Required</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#007BA7]" />
            <span>Instant Browser Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
