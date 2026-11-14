
"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI copilot work during a live video meeting?",
    answer:
      "Meet.AI joins your meeting as an AI copilot, listens to the live conversation, and generates real-time transcripts. You can ask questions and get contextual answers while the meeting is happening.",
  },
  {
    question: "Is my meeting audio and data private?",
    answer:
      "Your meeting data is handled securely. Meet.AI is designed to help you manage meeting information while keeping your conversations and generated content protected.",
  },
  {
    question: "Can I use Meet.AI directly in my browser without installing anything?",
    answer:
      "Yes! Meet.AI works directly in your browser. You can create or join a meeting without downloading additional software or installing plugins.",
  },
  {
    question: "Does Meet.AI offer a free trial or free plan?",
    answer:
      "Yes, you can get started with the free plan and explore Meet.AI's core meeting features. You can also check the pricing section for available plan details.",
  },
  {
    question: "Can I export meeting summaries to Notion, Slack, or Jira?",
    answer:
      "Meet.AI supports syncing meeting information with workspace tools such as Notion and Slack, helping your team keep summaries and action items organized.",
  },
];

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141418] border border-[#007BA7]/50 text-[#38BDF8] text-sm font-semibold mb-6">
            <HelpCircle size={14} className="text-[#FF2D95]" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? We've Got Answers.
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Everything you need to know about Meet.AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                openIdx === index
                  ? "bg-[#111114] border-[#007BA7]/60 shadow-lg shadow-[#007BA7]/5"
                  : "bg-[#111114] border-[#292933] hover:border-[#FF2D95]/40"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIdx(openIdx === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    openIdx === index
                      ? "rotate-180 text-[#FF2D95]"
                      : "text-[#38BDF8]"
                  }`}
                />
              </button>

              {openIdx === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-[#292933] mb-4" />
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
