import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/ui/Logo";
import { contactDetails, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060509] text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">
              Strategy, process &amp; people expertise for African enterprises ready to compete at the highest level.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <Link key={index} href="#" className="flex h-9 w-9 items-center justify-center rounded bg-white/10 transition hover:bg-white/20">
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label font-semibold uppercase tracking-[0.12em] text-white/40">Company</p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/blog", "Blog"],
                ["/careers", "Careers"],
                ["/team", "Team"]
              ].map(([href, label]) => (
                <Link key={href} href={href} className="block transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label font-semibold uppercase tracking-[0.12em] text-white/40">Services</p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              {services.slice(0, 6).map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block transition hover:text-white">
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label font-semibold uppercase tracking-[0.12em] text-white/40">Contact</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/70">
              <p>{contactDetails.address}</p>
              <p>Email: {contactDetails.email}</p>
              <p>Phone: {contactDetails.phoneLabel}</p>
              <p>Hours: {contactDetails.hours}</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Caladium Consulting Limited. All rights reserved.</p>
          <p>Investing in ideas that shape the future</p>
        </div>
      </div>
    </footer>
  );
}
