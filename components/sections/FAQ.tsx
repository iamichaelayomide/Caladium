"use client";

import { motion } from "framer-motion";

import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-3xl text-center">
          <h2 className="font-bricolage text-4xl font-bold tracking-[-0.02em] md:text-5xl">Frequently asked questions</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Have more questions? Reach us at enquiries@caladiumconsulting.com or call +234 802 433 2000
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.15 }} className="mx-auto mt-12 max-w-[680px]">
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
