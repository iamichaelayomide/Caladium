"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Search } from "lucide-react";

import { Card } from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "Diagnose & Discover",
    description:
      "We begin with a deep-dive diagnosis of your organization - analyzing operations, strategy gaps, financial health, and market position to understand where you truly are.",
    Icon: Search,
    tone: "bg-accent"
  },
  {
    number: "02",
    title: "Design Your Strategy",
    description:
      "Our team designs a tailored roadmap: clear strategies, restructured processes, and an execution plan built around your specific goals, industry, and scale.",
    Icon: Lightbulb,
    tone: "bg-gold"
  },
  {
    number: "03",
    title: "Execute & Scale",
    description:
      "We work alongside your team to implement, track KPIs, and adapt - ensuring your strategy doesn't just look good on paper but drives real, lasting results.",
    Icon: Rocket,
    tone: "bg-pastel-blue"
  }
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-3xl text-center">
          <p className="caption">HOW IT WORKS</p>
          <h2 className="mt-4 font-bricolage text-4xl font-bold tracking-[-0.02em] md:text-5xl">
            From first conversation to measurable results - in 3 clear steps
          </h2>
        </motion.div>
        <div className="relative mt-16 grid gap-10 lg:grid-cols-3">
          <div className="absolute left-[16.5%] right-[16.5%] top-10 hidden border-t border-dashed border-border lg:block" />
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="relative text-center">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 font-bricolage text-7xl font-bold text-white/5">
                {step.number}
              </span>
              <div className={`relative mx-auto flex h-12 w-12 items-center justify-center rounded-full ${step.tone}`}>
                <step.Icon className={`h-5 w-5 ${index === 0 ? "text-white" : "text-ink"}`} />
              </div>
              <h3 className="mt-6 font-bricolage text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.2 }} className="mt-16">
          <Card className="overflow-hidden rounded-[28px] p-0">
            <div className="bg-[#0b0911] px-6 py-4 text-sm font-medium text-white">Caladium Client Portal</div>
            <div className="grid gap-6 bg-surface p-6 lg:grid-cols-[1.1fr_1.6fr_1fr]">
              <div className="space-y-4 rounded-[24px] bg-bg p-5">
                <h4 className="text-sm font-semibold text-muted">Strategy scorecard</h4>
                {[
                  ["Revenue growth readiness", "82%", "bg-accent"],
                  ["Operating resilience", "64%", "bg-gold"],
                  ["Market expansion fit", "91%", "bg-emerald-500"]
                ].map(([label, value, tone]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-muted">{label}</span>
                      <span className="font-semibold text-ink">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/20">
                      <div className={`h-2 rounded-full ${tone}`} style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-[24px] bg-bg p-5">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-muted">Growth trajectory</h4>
                  <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">Q1 to Q4</span>
                </div>
                <svg viewBox="0 0 400 220" className="h-[220px] w-full">
                  <motion.path
                    d="M20 190 C80 170, 120 150, 170 130 S280 75, 380 30"
                    fill="none"
                    stroke="#AA2F89"
                    strokeLinecap="round"
                    strokeWidth="6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                  {[20, 100, 180, 260, 340].map((x) => (
                    <line key={x} x1={x} y1="20" x2={x} y2="200" stroke="#2B2437" strokeDasharray="4 8" />
                  ))}
                </svg>
              </div>
              <div className="space-y-4 rounded-[24px] bg-bg p-5">
                <h4 className="text-sm font-semibold text-muted">Next milestone</h4>
                <div className="rounded-[20px] bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-faint">Board strategy retreat</p>
                  <p className="mt-2 font-bricolage text-2xl font-semibold text-ink">April 18, 2026</p>
                  <div className="mt-5">
                    <div className="mb-2 flex justify-between text-sm text-muted">
                      <span>Preparation progress</span>
                      <span>68%</span>
                    </div>
                    <div className="h-2 rounded-full bg-bg">
                      <div className="h-2 w-[68%] rounded-full bg-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
