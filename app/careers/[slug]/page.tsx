import Link from "next/link";
import { notFound } from "next/navigation";

import { careers, findCareer } from "@/lib/site-data";

export function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const career = findCareer(params.slug);
  if (!career) notFound();

  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-shell">
        <p className="text-sm text-muted">Home &gt; Careers &gt; {career.title}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          <span className="rounded-sm bg-soft px-3 py-2">{career.location}</span>
          <span className="rounded-sm bg-accent-light px-3 py-2 text-accent-text">{career.type}</span>
        </div>
        <h1 className="mt-5 font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.03em] text-ink">{career.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-body">{career.summary}</p>
        <Link href={`mailto:careers@caladiumconsulting.com?subject=Application for ${career.title}`} className="mt-8 inline-flex rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent">
          Apply via email →
        </Link>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-soft p-8">
            <h2 className="font-display text-3xl font-semibold text-ink">Overview</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-body">
              {career.overview.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-soft p-8">
            <h2 className="font-display text-3xl font-semibold text-ink">Responsibilities</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-body">
              {career.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-soft p-8">
            <h2 className="font-display text-3xl font-semibold text-ink">Requirements</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-body">
              {career.requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-ink">Why this role</h3>
            <ul className="mt-3 space-y-3 text-base leading-7 text-body">
              {career.benefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
