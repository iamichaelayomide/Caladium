import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { findService, services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = findService(params.slug);
  if (!service) notFound();

  const related = service.relatedSlugs.map((slug) => findService(slug)).filter(Boolean);

  return (
    <>
      <section className="bg-[#09070d] pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-shell">
          <p className="text-sm text-white/45">Home &gt; Services &gt; {service.name}</p>
          <p className="mt-6 text-label font-semibold uppercase tracking-[0.12em] text-accent">{service.name}</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.03em] text-white">
            {service.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{service.summary}</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0911] transition hover:bg-[#f5eaf5]">
            Book a consultation {">"}
          </Link>
        </div>
      </section>

      <section className="bg-[#09070d] pb-16">
        <div className="container-shell">
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 md:h-[560px]">
            <Image src={service.image} alt={service.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09070d]/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 text-lg leading-8 text-white/72">
            {service.detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[#120f18] p-8">
            <h2 className="font-display text-3xl font-semibold text-white">Deliverables</h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-7 text-white/68">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0b0911]">
        <div className="container-shell">
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
            What this service includes
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {service.subServices.map((item, index) => (
              <div key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#14111b]">
                <div className="relative h-52">
                  <Image
                    src={[
                      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
                      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
                      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1400&q=80"
                    ][index % 3]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14111b] via-[#14111b]/15 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/68">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
            Related services
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item!.slug} href={`/services/${item!.slug}`} className="rounded-[28px] border border-white/10 bg-[#120f18] p-8 transition hover:border-accent/40">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{item!.name}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white">{item!.tagline}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{item!.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-[32px] border border-white/10 bg-[#120f18] p-10 text-white">
            <h2 className="font-display text-4xl font-semibold">Ready to move on this service?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
              Start with a session and we&apos;ll map the right scope, timeline, and advisory structure for your current priority.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0911] transition hover:bg-[#f5eaf5]">
              Talk to Caladium {">"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
