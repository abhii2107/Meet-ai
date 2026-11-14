
import React from "react";
import { Video, Bot, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Video,
    title: "Launch HD Call in 1-Click",
    description:
      "Create an instant video room or join via your browser. Share the link with team members — no downloads or plugins required.",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Copilot Listens & Transcribes",
    description:
      "Meet.AI listens to live conversation context, transcribes in real-time, and provides on-demand answers to team questions.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Instant Summaries & Workspace Sync",
    description:
      "Post-meeting structured summaries, action items, and key decisions are generated automatically and synced to Notion or Slack.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-y border-[#292933]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141418] border border-[#007BA7]/50 text-[#38BDF8] text-sm font-semibold mb-6">
            <Sparkles size={14} className="text-[#FF2D95]" />
            Simple & Powerful Workflow
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Meet.AI Powers Your Workflows
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            From instant room creation to automated post-meeting documentation in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#111114] p-8 border border-[#292933] hover:border-[#007BA7]/70 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-5xl font-black text-[#383842] mb-6">
                    {step.number}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-[#007BA7]/15 border border-[#007BA7]/40 flex items-center justify-center text-[#38BDF8] mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#292933] flex items-center gap-2 text-sm font-medium text-[#FF2D95]">
                  <CheckCircle2 size={16} />
                  Automated by Meet.AI
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
