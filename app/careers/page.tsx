import { Globe, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { careers, contactDetails } from "@/lib/site-data";

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 text-white md:pt-40">
        <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80" alt="Team at work" fill className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-shell relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm text-white/70">Home &gt; Careers</p>
            <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.03em]">
              Build Impact. <br /> Grow with Purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Whether you&apos;re a strategist, an analyst, or an operations expert, Caladium is a place where your ideas matter, your voice is heard, and your work makes a difference.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <h2 className="font-display text-3xl font-semibold">Do You Want To Be Part of Our Team?</h2>
            <p className="mt-3 text-base leading-7 text-white/75">
              We believe in equality of opportunity. To live. To succeed. To grow. To be more than.
            </p>
            <p className="mt-5 text-sm text-white/60">For career inquiries, please email</p>
            <a href={`mailto:${contactDetails.careersEmail}`} className="mt-2 inline-flex text-xl font-semibold text-white underline decoration-white/40 underline-offset-4">
              {contactDetails.careersEmail}
            </a>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionLabel>Benefits</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">Why Join Caladium?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-body">
            At Caladium, we believe in doing meaningful work that drives real results for our clients — and real growth for our people. We&apos;re a team of thinkers, builders, and changemakers who bring clarity and direction to African businesses.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              [Target, "Purpose-Driven Work", "We partner with organizations to solve real African business challenges and unlock meaningful transformation. Your work here has direct, visible impact."],
              [Globe, "Pan-African Reach", "Work on engagements spanning Nigeria, East Africa, the UK, and North America. Alongside talented professionals who understand diverse markets."],
              [TrendingUp, "Continuous Growth", "From mentorship to hands-on engagement leadership, we&apos;re committed to your professional and personal development at every stage of your career."]
            ].map(([Icon, title, body]) => (
              <div key={title as string} className="rounded-xl border border-border bg-soft p-8">
                <div className="rounded-lg bg-white p-3 text-accent">{Icon && <Icon className="h-6 w-6" />}</div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{title as string}</h3>
                <p className="mt-3 text-base leading-7 text-body">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-soft">
        <div className="container-shell">
          <SectionLabel>Open Roles</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">Join the Caladium Team</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-body">
            We keep our culture collaborative, respectful, and transparent. We work hard, stay curious, and celebrate progress — together.
          </p>
          <div className="mt-12 space-y-4">
            {careers.map((career) => (
              <div key={career.slug} className="rounded-xl border border-border bg-white p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{career.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      <span className="rounded-sm bg-soft px-3 py-2">{career.location}</span>
                      <span className="rounded-sm bg-accent-light px-3 py-2 text-accent-text">{career.type}</span>
                    </div>
                  </div>
                  <Link href={`/careers/${career.slug}`} className="inline-flex rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent">
                    Apply →
                  </Link>
                </div>
                <p className="mt-5 max-w-4xl text-base leading-7 text-body">{career.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
