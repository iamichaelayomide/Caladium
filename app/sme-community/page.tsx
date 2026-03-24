import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function SmeCommunityPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="caption">SME COMMUNITY</p>
            <h1 className="mt-4 font-bricolage text-5xl font-bold tracking-[-0.03em] md:text-7xl">
              The Caladium SME Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Empowering over 10,000 Nigerian SMEs through knowledge, networks, and programs designed
              to help you grow — entirely free.
            </p>
            <div className="mt-8">
              <Button size="md">Join the Community →</Button>
            </div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Caladium Lagos SME Bootcamp",
                "An annual gathering bringing thousands of SMEs together for networking, expert-led sessions, and capacity building workshops."
              ],
              [
                "SME Fellowship Programme",
                "Free structured training for entrepreneurs — covering business strategy, operations, finance, and market expansion. Apply to become a Fellow."
              ],
              [
                "2024 Nigeria SME Report",
                "We interviewed over 1,500 businesses and industry experts to uncover real challenges and opportunities in Nigeria's business landscape. Download free."
              ]
            ].map(([title, body]) => (
              <Card key={title} className="p-8">
                <p className="caption">PROGRAM</p>
                <h2 className="mt-4 font-bricolage text-3xl font-semibold">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
