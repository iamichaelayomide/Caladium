"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-3xl text-center">
          <p className="caption">CLIENT VOICES</p>
          <h2 className="mt-4 font-bricolage text-4xl font-bold tracking-[-0.02em] md:text-5xl">
            See how Caladium has helped organizations like yours
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            From ambitious startups to enterprise boardrooms — here&apos;s what our clients say.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.quote} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} className={index % 3 === 1 ? "xl:translate-y-8" : ""}>
              <Card className="h-full bg-bg p-6 transition-shadow duration-150 hover:shadow-md">
                <p className="text-base leading-8 text-ink">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bricolage font-bold text-accent">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
