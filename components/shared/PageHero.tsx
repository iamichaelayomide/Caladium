import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PageHero({
  breadcrumb,
  label,
  title,
  description,
  cta
}: {
  breadcrumb: string;
  label?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="border-b border-white/10 bg-[#09070d] pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-shell">
        <p className="mb-6 text-sm text-white/45">{breadcrumb}</p>
        {label ? <SectionLabel className="text-white/50">{label}</SectionLabel> : null}
        <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.03em] text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{description}</p>
        {cta ? (
          <div className="mt-8">
            <Button href={cta.href} variant="light" className="rounded-full">
              {cta.label}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
