"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card";

const stats = [
  ["Founded in 2010", "15 years of impact"],
  ["130+ SMEs Supported", "Large enterprises too"],
  ["Africa, UK & North America", "Our reach, your advantage"],
  ["Top 5 by 2028", "That's our target"]
];

export function Showcase() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-3xl text-center">
          <p className="caption">BUILT FOR AFRICAN ENTERPRISES</p>
          <h2 className="mt-4 font-bricolage text-4xl font-bold tracking-[-0.02em] md:text-5xl">
            A consulting partner that thinks beyond the boardroom
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Card className="overflow-hidden bg-[#0b0911] p-8 text-white lg:col-span-2 lg:row-span-2">
            <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">Strategy</span>
            <h3 className="mt-6 max-w-xl font-bricolage text-4xl font-bold leading-tight">
              Global frameworks. Local intelligence. Exceptional outcomes.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              We blend McKinsey-grade methodology with unmatched knowledge of Africa&apos;s business landscape — so you get strategies that actually work here.
            </p>
            <div className="relative mt-10 h-[280px] overflow-hidden rounded-[28px] bg-white/[0.04]">
              <svg viewBox="0 0 700 300" className="absolute inset-0 h-full w-full opacity-80">
                <path d="M20 240 C120 200, 180 170, 260 160 S430 110, 680 40" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="6" strokeLinecap="round" />
                {[120, 230, 340, 450, 560].map((x) => (
                  <line key={x} x1={x} y1="20" x2={x} y2="280" stroke="rgba(255,255,255,0.15)" strokeDasharray="8 10" />
                ))}
              </svg>
            </div>
          </Card>
          <Card className="bg-pastel-green p-8">
            <h3 className="font-bricolage text-2xl font-semibold">200+ organizations transformed</h3>
            <p className="mt-3 text-sm leading-7 text-muted">From startups to enterprises across 3 continents</p>
            <div className="mt-8 font-bricolage text-7xl font-bold tracking-[-0.03em] text-accent">200+</div>
          </Card>
          <Card className="bg-gold-light p-8">
            <h3 className="font-bricolage text-2xl font-semibold">10,000+ SMEs in our community</h3>
            <p className="mt-3 text-sm leading-7 text-muted">Through the Caladium Lagos SME Bootcamp and SME Fellowship</p>
            <div className="mt-8 font-bricolage text-7xl font-bold tracking-[-0.03em] text-gold">10K+</div>
          </Card>
          <Card className="overflow-hidden p-0 lg:col-span-3">
            <div className="grid divide-y divide-border lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {stats.map(([value, label]) => (
                <div key={value} className="p-6 text-center lg:text-left">
                  <p className="font-bricolage text-2xl font-semibold text-ink">{value}</p>
                  <p className="mt-2 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
