"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart2, Globe, Network, Settings, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/site-data";

const iconMap = [Target, Network, Globe, TrendingUp, Settings, BarChart2];

export function HomeServices() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center text-white/60">Core Services</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,4.8vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
            Strategy services built for ambitious African businesses
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Clear advisory, sharp execution, and premium client delivery across strategy, operations,
            market expansion, and organizational transformation.
          </p>
        </Reveal>

        <StaggerReveal className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => {
            const Icon = iconMap[index];
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22, ease: "easeOut" }}>
                    <Card className="group h-full overflow-hidden rounded-[28px] border-white/10 bg-[#120f18] p-0 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={1400}
                          height={900}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#120f18] via-[#120f18]/40 to-transparent" />
                        <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-black/40 text-accent backdrop-blur-md">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Service</p>
                            <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] text-white">
                              {service.name}
                            </h3>
                          </div>
                          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/50 transition group-hover:text-accent" />
                        </div>
                        <p className="mt-4 text-base leading-8 text-white/68">{service.cardDescription}</p>
                        <div className="mt-6 inline-flex items-center text-sm font-semibold text-white transition group-hover:text-accent">
                          View service details
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}

export function HomeStats() {
  return null;
}
