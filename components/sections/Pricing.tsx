"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Toggle } from "@/components/ui/Toggle";

type Tier = {
  name: string;
  badge: string;
  oneTime: string;
  retainer: string;
  subtitle: string;
  features: [boolean, string][];
  cta: string;
  variant: "primary" | "outline";
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Caladium SME Community",
    badge: "Get started",
    oneTime: "$0",
    retainer: "$0",
    subtitle: "For entrepreneurs who want to learn and connect",
    features: [
      [true, "Access to SME Community platform"],
      [true, "SME Bootcamp access (Lagos)"],
      [true, "Caladium Nigeria SME Report"],
      [true, "Business mentorship resources"],
      [true, "Peer networking"],
      [false, "1-on-1 consulting sessions"],
      [false, "Strategy deliverables"],
      [false, "Priority support"]
    ],
    cta: "Join the Community",
    variant: "outline" as const
  },
  {
    name: "Founders Clarity Session",
    badge: "Most popular",
    oneTime: "$200",
    retainer: "$160",
    subtitle: "For founders and startup leaders who need strategic clarity fast",
    features: [
      [true, "2-hour mini strategy session"],
      [true, "Vision clarity framework"],
      [true, "Obstacle identification and action plan"],
      [true, "Strategic goal roadmap"],
      [true, "Post-session follow-up summary"],
      [false, "Full organizational audit"],
      [false, "Implementation support"]
    ],
    cta: "Book a Session",
    featured: true,
    variant: "primary" as const
  },
  {
    name: "Full Consulting Engagement",
    badge: "For growing businesses",
    oneTime: "From $2,500",
    retainer: "From $2,000",
    subtitle: "Full-scope strategy, operations, and implementation support",
    features: [
      [true, "Everything in Founders Clarity"],
      [true, "Business setup support"],
      [true, "Enterprise technology access"],
      [true, "Regulatory compliance services"],
      [true, "Organizational design"],
      [true, "Business pitch deck"],
      [true, "Business accounting templates"],
      [true, "Dedicated consulting team"]
    ],
    cta: "Get a Proposal",
    variant: "outline" as const
  }
];

export function Pricing() {
  const [billing, setBilling] = useState<"left" | "right">("left");

  return (
    <section className="section-padding bg-bg" id="pricing">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-3xl text-center">
          <p className="caption">PRICING &amp; PACKAGES</p>
          <h2 className="mt-4 font-bricolage text-4xl font-bold tracking-[-0.02em] md:text-5xl">
            Transparent pricing built for African businesses at every stage
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            We offer packages designed for founders, SMEs, and enterprise organizations — plus custom engagements for larger mandates.
          </p>
          <div className="mt-8">
            <Toggle leftLabel="One-time" rightLabel="Retainer" selected={billing} onChange={setBilling} badge="Save 20%" />
          </div>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} className={tier.featured ? "lg:scale-[1.04]" : ""}>
              <Card className={`h-full p-8 ${tier.featured ? "border-transparent bg-[#0b0911] text-white shadow-xl" : ""}`}>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tier.featured ? "bg-accent text-white" : "bg-accent-light text-accent"}`}>
                  {tier.badge}
                </span>
                <h3 className="mt-6 font-bricolage text-3xl font-semibold">{tier.name}</h3>
                <div className="mt-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={`${tier.name}-${billing}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="font-bricolage text-5xl font-bold tracking-[-0.03em]">
                      {billing === "left" ? tier.oneTime : tier.retainer}
                    </motion.div>
                  </AnimatePresence>
                  <p className={`mt-2 text-sm ${tier.featured ? "text-white/65" : "text-muted"}`}>{tier.subtitle}</p>
                </div>
                <div className="mt-8 space-y-4">
                  {tier.features.map(([enabled, label]) => (
                    <div key={label} className="flex items-start gap-3 text-sm">
                      {enabled ? (
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-white" : "text-accent"}`} />
                      ) : (
                        <X className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-white/40" : "text-faint"}`} />
                      )}
                      <span className={tier.featured ? "text-white/80" : "text-muted"}>{label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-8 block">
                  <Button variant={tier.featured ? "primary" : "outline"} className={`w-full ${tier.featured ? "bg-accent hover:bg-accent-hover" : ""}`}>
                    {tier.cta}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-muted">
          <p>For larger mandates including Strategy Retreats, Financial Planning, Customized Strategy Services, and Government Advisory — contact us for a tailored proposal.</p>
          <p className="mt-2">enquiries@caladiumconsulting.com · +234 802 433 2000</p>
        </div>
      </div>
    </section>
  );
}
