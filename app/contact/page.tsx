import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ui/ContactForm";
import { contactDetails } from "@/lib/site-data";

export default function ContactPage() {
  const cards = [
    { label: "Call us at:", value: contactDetails.phoneLabel, href: contactDetails.phoneHref, icon: Phone },
    { label: "Visit us at:", value: "D24, Dolphin Plaza, Corporation Drive, Dolphin Estate, Ikoyi, Lagos", href: contactDetails.mapHref, icon: MapPin },
    { label: "Email us:", value: contactDetails.email, href: contactDetails.emailHref, icon: Mail }
  ];

  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-shell">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-6 text-lg leading-8 text-body">
            Whether you&apos;re ready to engage or just exploring — we&apos;d love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Ikoyi office" width={1200} height={1400} className="h-full min-h-[520px] w-full object-cover" />
          </div>
          <div className="rounded-xl border border-border bg-soft p-8 md:p-10">
            <h3 className="font-display text-4xl font-semibold text-ink">Have a challenge or an idea?</h3>
            <p className="mt-4 text-lg leading-8 text-body">
              Fill out the form and let&apos;s talk about how we can support your business with tailored solutions.
            </p>
            <div className="mt-8 space-y-4">
              {cards.map((card) => (
                <Link key={card.label} href={card.href} className="flex gap-4 rounded-xl border border-border bg-white p-4 transition hover:border-accent">
                  <card.icon className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">{card.label}</p>
                    <p className="mt-1 text-sm leading-6 text-ink">{card.value}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <ContactForm includeService />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
