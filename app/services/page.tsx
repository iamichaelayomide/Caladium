import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Features } from "@/components/sections/Features";
import { Card } from "@/components/ui/Card";
import { servicePageItems } from "@/lib/content";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="caption">OUR SERVICES</p>
            <h1 className="mt-4 font-bricolage text-5xl font-bold tracking-[-0.03em] md:text-7xl">
              Strategy support designed for ambitious African businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              From the first strategic reset to full implementation support, our consulting services are
              designed to move organizations from insight to execution.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {servicePageItems.map((item, index) => (
              <Card key={item} className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-faint">Service {index + 1}</p>
                <h2 className="mt-4 font-bricolage text-2xl font-semibold">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Tailored advisory, clear frameworks, measurable outcomes, and implementation support
                  built around your sector, growth stage, and strategic context.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Features />
      <Footer />
    </main>
  );
}
