"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      <div className="hero-panel absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="hero-glow absolute inset-x-0 top-16 mx-auto h-[360px] w-[90%] max-w-5xl" />
      <div className="container relative">
        <div className="mx-auto max-w-[900px] rounded-[40px] border border-white/10 bg-white/[0.02] px-6 pb-10 pt-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm md:px-12 md:pb-16 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Badge className="border-white/10 bg-white/5 text-white/80 shadow-none">
              <span className="text-accent">*</span>
              <span>Africa&apos;s Leading Strategy Consultancy - Est. 2010</span>
            </Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="mt-6 font-bricolage text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[72px]">
            Turn your biggest business
            <br />
            challenges into <span className="italic text-accent">lasting</span> growth
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="mx-auto mt-6 max-w-[700px] text-balance text-base leading-8 text-muted md:text-lg">
            Caladium Consulting delivers world-class strategy, organizational design, and financial advisory - built for African enterprises ready to compete on a global scale.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact">
              <Button variant="secondary" size="md">
                Book a Clarity Session {">"}
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="dark" size="md">
                Explore our services
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.4 }} className="mt-8 flex flex-col items-center gap-4 text-sm text-faint sm:flex-row sm:justify-center">
            <span>Trusted by 200+ organizations across Africa, the UK, and North America</span>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["A", "C", "L"].map((item) => (
                  <div key={item} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-white">
                    {item}
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-white">
                <Star className="h-4 w-4 fill-gold text-gold" /> 4.9/5
              </span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.5 }} className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-left md:grid-cols-3">
            {[
              ["15+ years", "of strategy and operating advisory experience"],
              ["200+ organizations", "served across Africa, the UK, and North America"],
              ["10,000+ SMEs", "reached through Caladium community programs"]
            ].map(([value, label]) => (
              <div key={value} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <p className="font-bricolage text-3xl font-bold text-white">{value}</p>
                  <ArrowRight className="h-5 w-5 text-accent" />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
