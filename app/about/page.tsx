import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { teamMembers } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > About Us"
        title="Strategy. Clarity. Results."
        description="From ambitious startups to established enterprises across Africa, we collaborate with leaders to solve complex challenges, shape focused strategies, and build operational systems that scale."
        cta={{ href: "/services", label: "Our Services →" }}
      />
      <section className="section-padding bg-white">
        <div className="container-shell grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {[
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          ].map((image, index) => (
            <div key={image} className={index === 0 ? "md:col-span-2 md:row-span-2" : index === 1 || index === 2 ? "md:col-span-1" : "md:col-span-1"}>
              <div className="relative h-[220px] overflow-hidden rounded-xl md:h-full">
                <Image src={image} alt="" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-soft py-16">
        <div className="container-shell grid gap-8 md:grid-cols-3">
          {[
            ["200+", "Organizations Supported"],
            ["10K+", "SMEs in Caladium Community"],
            ["15+", "Years of Impact"]
          ].map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-6xl font-semibold text-ink">{value}</div>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
              A Team of Thinkers, Builders, and Business Partners
            </h2>
            <p className="mt-6 text-lg leading-8 text-body">
              Our strength lies in bridging sharp insight with grounded execution — helping African leaders make smart decisions and build systems that last.
            </p>
            <p className="mt-4 text-lg leading-8 text-body">
              We don&apos;t just advise from the sidelines. We roll up our sleeves and work alongside our clients to solve what matters most, from big-picture strategy to operational detail.
            </p>
            <div className="mt-8 space-y-4 text-base leading-7 text-body">
              <p>• Our team brings insights from corporate leadership, startups, and international consulting — allowing us to see African business challenges from multiple angles.</p>
              <p>• We focus on outcomes, not just ideas. Every recommendation is tied to real-world implementation and measurable progress.</p>
              <p>• We customize every engagement, listen deeply, and work as true partners in your business journey.</p>
            </div>
          </Reveal>
          <div className="relative h-[520px] overflow-hidden rounded-xl">
            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Consultant presentation" fill className="object-cover" />
          </div>
        </div>
      </section>
      <section className="section-padding bg-soft">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <SectionLabel className="justify-center">Our Mission</SectionLabel>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
              Driving clarity, enabling growth, and empowering transformation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-body">
              Our mission is to bring world-class strategy advisory services to African organizations, providing them with the same high-level insights and expertise typically available to global enterprises. We are dedicated to the growth of African businesses, offering tailored strategies that empower them to succeed in an increasingly competitive world.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              ["Empower Leaders", "We equip African decision-makers with clarity, confidence, and practical tools to lead effectively in complex, fast-moving business environments."],
              ["Elevate Business Performance", "We help organizations improve efficiency, scale sustainably, and deliver long-term value — measured not just in revenue, but in resilience."]
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-border bg-white p-8">
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-base leading-7 text-body">{body}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-12 overflow-hidden rounded-[24px]">
            <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80" alt="Lagos skyline" width={1600} height={900} className="h-[420px] w-full object-cover" />
            <div className="absolute bottom-6 left-6 rounded-sm bg-white/90 px-4 py-2 font-display text-lg font-semibold text-accent">caladium ◆</div>
            <div className="absolute bottom-6 right-6">
              <Link href="/services" className="rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent">
                Explore our services →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
              Experts Who Think Strategically and Deliver Practically
            </h2>
            <p className="mt-5 text-lg leading-8 text-body">
              We bring together sharp business thinking, real-world African market leadership, and a hands-on approach to help our clients achieve measurable results.
            </p>
            <p className="mt-4 text-lg leading-8 text-body">
              Our team of multi-disciplinary professionals includes certified experts in finance, strategy, project management, business analysis, and process engineering — all committed to exceptional client outcomes.
            </p>
            <Link href="/team" className="mt-6 inline-flex text-sm font-semibold text-ink transition hover:text-accent">
              Learn more about our team →
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.slice(0, 3).map((member) => (
              <div key={member.name} className="group rounded-xl border border-border bg-soft p-6 transition hover:border-accent">
                <Image src={member.image} alt={member.name} width={600} height={600} className="aspect-square w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]" />
                <h3 className="mt-5 font-display text-3xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-2 text-sm text-muted">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
