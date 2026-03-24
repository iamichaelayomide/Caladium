import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = {
  Services: [
    "Strategy & Planning",
    "Organizational Design",
    "Market Entry",
    "Financial Advisory",
    "Process Engineering",
    "Business Analysis"
  ],
  Community: ["SME Community", "Lagos SME Bootcamp", "SME Fellowship Programme", "Nigeria SME Report", "Events"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Partners"],
  Contact: ["Book a Session", "Get a Proposal", "enquiries@caladiumconsulting.com", "+234 802 433 2000", "Contact Form"]
};

const socials = [Linkedin, Twitter, Facebook, Instagram];

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2 font-bricolage text-2xl font-bold">
              caladium
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-accent" />
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">Strategy, Process &amp; People</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">D24, Dolphin Plaza, Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, index) => (
                <Link key={index} href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20">
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.22em] text-white/45">{title}</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <Link key={item} href="#" className="block text-sm text-white/65 transition-colors hover:text-white">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Caladium Consulting Limited. All rights reserved.</p>
          <p>Investing in ideas that shape the future</p>
        </div>
      </div>
    </footer>
  );
}
