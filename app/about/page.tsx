import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Card } from "@/components/ui/Card";

const team = [
  ["Ava Thiery", "Managing Partner"],
  ["Damilola Ogun", "Director, Strategy"],
  ["Kemi Adebayo", "Lead, Organizational Design"],
  ["Ifeanyi Nwosu", "Principal, Financial Advisory"],
  ["Yewande Ajala", "Head, Research & Insights"],
  ["Tomiwa Sanni", "Programme Lead, SME Community"]
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-bricolage text-5xl font-bold tracking-[-0.03em] md:text-7xl">
              We exist to transform African enterprise
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Founded in 2010 with a single mission — to build the most supportive strategy consulting
              practice in Nigeria. We are the Strategy, Process &amp; People experts.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <p className="caption">MISSION</p>
              <p className="mt-4 text-lg leading-8 text-muted">
                Our mission is to bring world-class strategy advisory services to African organizations,
                providing them with the same high-level insights and expertise typically available to
                global enterprises. We are dedicated to the growth of African businesses, offering
                tailored strategies that empower them to succeed in an increasingly competitive world.
              </p>
            </Card>
            <Card className="p-8">
              <p className="caption">VISION</p>
              <p className="mt-4 text-lg leading-8 text-muted">
                By 2028, Caladium Consulting aims to be among the top five strategy and business advisory
                brands in the Nigerian market. Through innovation, industry-leading solutions, and a
                deep understanding of Africa&apos;s business environment, we will continue empowering
                businesses to achieve sustainable success and lasting growth.
              </p>
            </Card>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["2010", "Founded"],
              ["200+", "Organizations Supported"],
              ["10,000+", "SME Community"],
              ["3", "Countries"]
            ].map(([value, label]) => (
              <Card key={label} className="p-6 text-center">
                <p className="font-bricolage text-5xl font-bold text-accent">{value}</p>
                <p className="mt-3 text-sm text-muted">{label}</p>
              </Card>
            ))}
          </div>
          <div className="mt-20 text-center">
            <h2 className="font-bricolage text-4xl font-bold tracking-[-0.02em]">
              Our firm is made up of dozens of dedicated multi-disciplinary professionals
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted">
              Certified experts in finance, strategy, project management, business analysis, and process
              engineering — committed to exceptional client service.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {team.map(([name, role]) => (
                <Card key={name} className="p-6 text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-light font-bricolage text-2xl font-bold text-accent">
                    {name[0]}
                  </div>
                  <h3 className="mt-4 font-bricolage text-2xl font-semibold">{name}</h3>
                  <p className="mt-2 text-sm text-muted">{role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
