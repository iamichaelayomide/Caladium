"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { FloatingOrbs } from "@/components/3d/FloatingOrbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="hero-glow absolute inset-x-0 top-12 mx-auto h-[340px] w-[90%] max-w-5xl" />
      <div className="container relative">
        <div className="mx-auto max-w-[760px] text-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Badge className="bg-white/75">
              <span className="text-accent">✦</span>
              <span>Africa&apos;s Leading Strategy Consultancy — Est. 2010</span>
            </Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="mt-6 font-bricolage text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[56px] lg:text-[72px]">
            Turn your biggest business
            <br />
            challenges into <span className="italic text-accent">lasting</span> growth
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="mx-auto mt-6 max-w-[660px] text-balance text-base leading-8 text-muted md:text-lg">
            Caladium Consulting delivers world-class strategy, organizational design, and financial advisory — built for African enterprises ready to compete on a global scale.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact">
              <Button variant="secondary" size="md">
                Book a Clarity Session →
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="md">
                Explore our services
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.4 }} className="mt-8 flex flex-col items-center gap-4 text-sm text-faint sm:flex-row sm:justify-center">
            <span>Trusted by 200+ organizations across Africa, the UK, and North America</span>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["A", "C", "L"].map((item) => (
                  <div key={item} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg bg-white text-xs font-semibold text-ink">
                    {item}
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-ink">
                <Star className="h-4 w-4 fill-gold text-gold" /> 4.9/5
              </span>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <FloatingOrbs />
        </div>
      </div>
    </section>
  );
}
