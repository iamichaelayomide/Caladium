import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > Services"
        label="Services"
        title="Consulting expertise designed to move businesses forward"
        description="From strategic planning to market expansion and operating model design, every Caladium engagement is tailored for practical execution and lasting growth."
        cta={{ href: "/contact", label: "Book a session >" }}
      />

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel className="text-white/55">Service Portfolio</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
              Choose the engagement that matches your next business decision
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Each service page goes deeper into scope, deliverables, and how Caladium approaches the work.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                <article className="h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#120f18] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <div className="relative h-60 overflow-hidden">
                    <Image src={service.image} alt={service.name} width={1400} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120f18] via-[#120f18]/45 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{service.shortName}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] text-white">
                      {service.tagline}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-white/68">{service.summary}</p>
                    <div className="mt-6 flex items-center justify-between text-sm font-semibold text-white">
                      <span>View service page</span>
                      <ArrowRight className="h-4 w-4 text-accent transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0b0911]">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Architecture for strategy",
              body: "We build strategy like architects: strong foundations, clear structure, and room for scale."
            },
            {
              title: "Execution over theory",
              body: "Every recommendation is tied to real decisions, real teams, and a clear implementation path."
            },
            {
              title: "Built for African context",
              body: "Our frameworks are grounded in the realities of operating, expanding, and growing in African markets."
            }
          ].map((item, index) => (
            <div key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#14111b]">
              <div className="relative h-56">
                <Image
                  src={[
                    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
                    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80"
                  ][index]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14111b] via-[#14111b]/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/68">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
