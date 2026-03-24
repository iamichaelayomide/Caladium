import { clientLogos } from "@/lib/content";

export function LogoTicker() {
  const duplicated = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-border bg-white py-12">
      <div className="container overflow-hidden">
        <p className="mb-6 text-center text-sm font-medium text-faint">Trusted by organizations including</p>
        <div className="group overflow-hidden">
          <div className="marquee-track flex animate-marquee gap-12 group-hover:[animation-play-state:paused]">
            {duplicated.map((logo, index) => (
              <div key={`${logo}-${index}`} className="min-w-[160px] text-center text-lg font-semibold tracking-tight text-[#c0c0c0]">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
