"use client";

import { motion } from "framer-motion";
import { BarChart2, Globe, Network, Settings, Target, TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { services } from "@/lib/content";

const icons = { Target, Network, Globe, TrendingUp, Settings, BarChart2 };

export function Features() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-3xl text-center">
          <p className="caption">OUR SERVICES</p>
          <h2 className="mt-4 font-bricolage text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
            Everything your organization needs to grow, scale, and lead
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            We combine global expertise with deep local insight to deliver strategy, structure, and results for African enterprises at every stage of growth.
          </p>
        </motion.div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35, delay: index * 0.08 }} whileHover={{ y: -4 }}>
                <Card className="h-full p-6 transition-shadow duration-200 hover:shadow-card-hover">
                  <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-[28px] ${service.tone}`}>
                    <Icon className="h-10 w-10 text-accent" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bricolage text-[22px] font-semibold leading-[1.3] text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
