
import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Product, TechCorp",
    avatar: "SC",
    avatarBg: "bg-[#007BA7]",
    rating: 5,
    quote:
      "Meet.AI has completely transformed how our team handles meetings. We're saving 6 hours per engineer every week, and nothing important gets missed.",
  },
  {
    name: "David Rodriguez",
    role: "Founder & CEO, ScaleFlow",
    avatar: "DR",
    avatarBg: "bg-[#FF2D95]",
    rating: 5,
    quote:
      "The AI copilot is like having an extra team member in every meeting. It captures everything and gives us the insights we need instantly.",
  },
  {
    name: "Emily Watson",
    role: "Head of Engineering, CloudCraft",
    avatar: "EW",
    avatarBg: "bg-[#263746]",
    rating: 5,
    quote:
      "The real-time transcripts and automated summaries have made our meetings so much more productive. It's now an essential part of our workflow.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-y border-[#292933]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141418] border border-[#007BA7]/50 text-[#38BDF8] text-sm font-semibold mb-6">
            <Sparkles size={14} className="text-[#FF2D95]" />
            Loved by Teams
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Teams Say About Meet.AI
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Helping teams spend less time documenting and more time doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-[#111114] p-8 border border-[#292933] hover:border-[#007BA7]/60 transition-all shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#FF2D95] text-[#FF2D95]"
                    />
                  ))}
                </div>
                <Quote size={28} className="text-[#007BA7]/40" />
              </div>

              <p className="text-slate-300 leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-[#292933] flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.avatar}
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
