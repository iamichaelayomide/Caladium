"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { heroImage } from "@/lib/site-data";

export function HomeHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={heroImage} alt="Lagos skyline" fill priority className="object-cover" />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />
      <div className="container-shell relative z-10 py-24">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }} className="max-w-[780px]">
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mb-6 text-label font-semibold uppercase tracking-[0.12em] text-white/70">
            BEST SOLUTION · EST. 2010
          </motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.03em] text-balance">
            Your strategy partner in African business growth
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mt-6 max-w-[540px] text-lg leading-8 text-white/80">
            We partner with visionary African leaders to unlock growth, navigate transformation, and build future-proof enterprises through tailored strategy and operational excellence.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mt-8">
            <Button href="/contact" variant="light" className="px-7 py-3.5">
              Let&apos;s Talk Strategy →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
