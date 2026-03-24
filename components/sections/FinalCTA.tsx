"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Circle, Diamond, Hexagon } from "lucide-react";

import { Button } from "@/components/ui/Button";

const floating = [
  { Icon: Hexagon, className: "left-[12%] top-[20%]" },
  { Icon: Circle, className: "right-[16%] top-[26%]" },
  { Icon: Diamond, className: "left-[50%] bottom-[12%]" }
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,107,74,0.25),transparent),radial-gradient(ellipse_40%_40%_at_58%_48%,rgba(201,168,76,0.15),transparent)]" />
      {floating.map(({ Icon, className }, index) => (
        <motion.div key={index} className={`absolute hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 lg:flex ${className}`} animate={{ rotate: 360 }} transition={{ duration: 20 + index * 3, repeat: Infinity, ease: "linear" }}>
          <Icon className="h-6 w-6" />
        </motion.div>
      ))}
      <div className="container relative text-center">
        <h2 className="font-bricolage text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">
          Ready to transform your organization?
          <br />
          <span className="italic text-white/80">Let&apos;s build your strategy together.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">Join 200+ organizations already partnering with Caladium.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact">
            <Button variant="outline" size="lg" className="border-white bg-white text-ink hover:bg-accent-light">
              Book a Clarity Session →
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="dark" size="lg">
              Talk to our team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
