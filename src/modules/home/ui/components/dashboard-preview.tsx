
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Bot,
  FileText,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type TabType = "dashboard" | "copilot" | "summary" | "analytics";

const screenshots: Record<TabType, string> = {
  dashboard: "/product-tour/dashboard.png",
  copilot: "/product-tour/copilot.png",
  summary: "/product-tour/summary.png",
  analytics: "/product-tour/insights.png",
};

const tabLabels: { id: TabType; label: string; icon: React.ReactNode }[] = [
  {
    id: "dashboard",
    label: "Dashboard View",
    icon: <Video className="w-3.5 h-3.5" />,
  },
  {
    id: "copilot",
    label: "Live AI Copilot",
    icon: <Bot className="w-3.5 h-3.5 text-emerald-300" />,
  },
  {
    id: "summary",
    label: "Auto Summary",
    icon: <FileText className="w-3.5 h-3.5" />,
  },
  {
    id: "analytics",
    label: "Insights",
    icon: <BarChart3 className="w-3.5 h-3.5" />,
  },
];

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  return (
    <div
      id="demo"
      className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6"
    >
      {/* Main Container Frame */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 p-2 sm:p-3 border border-slate-700/60 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl">
        {/* Browser Header */}
        <div className="bg-[#0F172A] rounded-t-xl px-4 py-3 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Browser Navigation */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">https://</span>
              meet-ai.app/dashboard
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium text-slate-400 overflow-x-auto w-full md:w-auto">
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "hover:text-white hover:bg-slate-800"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Actual Screenshot Display */}
        <div className="bg-[#F8FAFC] rounded-b-xl overflow-hidden">
          <div
            key={activeTab}
            className="w-full animate-in fade-in duration-300"
          >
            <Image
              src={screenshots[activeTab]}
              alt={`${tabLabels.find((tab) => tab.id === activeTab)?.label} preview`}
              width={1600}
              height={900}
              priority={activeTab === "dashboard"}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>

          {/* Bottom Callout */}
          <div className="px-4 sm:px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Live workspace data synchronized in real-time.
            </span>

            <Link
              href="/meetings"
              className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
            >
              Explore Full Dashboard
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
