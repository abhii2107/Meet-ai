
"use client";

import React from "react";
import {
  Brain,
  Video,
  FileText,
  Shield,
  Search,
  Share2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Brain,
      badge: "AI Intelligence",
      title: "Context-Aware AI Assistant",
      description:
        "Meet-AI listens live during video calls, understands team context, and answers questions quietly in real-time without disrupting speaker flow.",
    },
    {
      icon: FileText,
      badge: "Auto Documentation",
      title: "Automated Notes & Action Items",
      description:
        "Instantly generates structured Markdown summaries, key decision logs, and assigned task lists immediately when your call ends.",
    },
    {
      icon: Video,
      badge: "Enterprise WebRTC",
      title: "Crystal-Clear HD Video Calls",
      description:
        "High-definition video and low-latency audio built on global WebRTC infrastructure for smooth, stutter-free team collaboration.",
    },
    {
      icon: Search,
      badge: "Smart Search",
      title: "Universal Meeting Knowledge Base",
      description:
        "Search across your company's entire history of meeting transcripts, decision points, and speaker highlights in milliseconds.",
    },
    {
      icon: Share2,
      badge: "Seamless Sync",
      title: "Workflow & App Integrations",
      description:
        "Export structured meeting summaries and auto-assigned action items directly to Notion, Slack, Jira, and Google Docs with 1-click.",
    },
    {
      icon: Shield,
      badge: "Enterprise Security",
      title: "Bank-Grade Encryption & Privacy",
      description:
        "End-to-end encryption with strict zero-data-retention for model training. Your meeting audio and data remain 100% confidential.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
    >
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141418] border border-[#007BA7]/50 text-[#38BDF8] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF2D95]" />
          <span>Built for High-Velocity Teams</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Everything You Need for <br />
          <span className="bg-gradient-to-r from-[#007BA7] via-[#38BDF8] to-[#FF2D95] bg-clip-text text-transparent">
            Smarter Video Collaboration
          </span>
        </h2>

        <p className="mt-4 text-lg text-slate-300 font-normal">
          Eliminate manual note-taking, lost action items, and tedious follow-up emails forever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <div
              key={idx}
              className="group relative rounded-2xl bg-[#111114] p-7 border border-[#292933] hover:border-[#007BA7]/70 shadow-lg hover:shadow-2xl hover:shadow-[#007BA7]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#007BA7]/15 border border-[#007BA7]/40 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:bg-[#007BA7] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#0A0A0A] border border-[#292933] text-[#FF65B1]">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#38BDF8] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292933] flex items-center text-xs font-semibold text-[#FF2D95] group-hover:text-[#FF65B1] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
