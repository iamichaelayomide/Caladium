import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="caption">CONTACT</p>
              <h1 className="mt-4 font-bricolage text-5xl font-bold tracking-[-0.03em] md:text-6xl">
                Let&apos;s talk strategy
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                Whether you&apos;re ready to start or just exploring — we&apos;d love to hear from you.
              </p>
              <div className="mt-10 space-y-5 text-base leading-8 text-muted">
                <p>D24, Dolphin Plaza, Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
                <p>enquiries@caladiumconsulting.com</p>
                <p>+234 802 433 2000</p>
                <p>Monday – Friday, 9AM – 6PM WAT</p>
                <p>LinkedIn | Twitter | Facebook | Instagram</p>
              </div>
            </div>
            <Card className="p-6 md:p-8">
              <form className="space-y-4">
                {[
                  ["Full Name", "text"],
                  ["Email Address", "email"],
                  ["Organization", "text"]
                ].map(([label, type]) => (
                  <div key={label}>
                    <label className="mb-2 block text-sm font-medium text-ink">{label}</label>
                    <input type={type} className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent" />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Service Needed</label>
                  <select className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
                    <option>Strategy &amp; Planning</option>
                    <option>Org Design</option>
                    <option>Market Entry</option>
                    <option>Financial Advisory</option>
                    <option>Process Engineering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Message</label>
                  <textarea rows={4} className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent" />
                </div>
                <Button variant="primary" size="lg" className="w-full rounded-xl">
                  Send Message →
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
