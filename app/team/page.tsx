import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { teamMembers } from "@/lib/site-data";

export default function TeamPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > Team"
        title="Meet the Caladium Team"
        description="Dozens of dedicated multi-disciplinary professionals — certified in finance, strategy, process engineering, and business analysis — united by a commitment to transforming African enterprise."
      />
      <section className="section-padding bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="group overflow-hidden rounded-xl border border-border bg-soft">
              <div className="relative overflow-hidden">
                <Image src={member.image} alt={member.name} width={700} height={700} className="aspect-square w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-6 text-white/85">{member.bio}</p>
                </div>
              </div>
              <div className="flex items-start justify-between p-6">
                <div>
                  <h3 className="font-display text-3xl font-semibold text-ink">{member.name}</h3>
                  <p className="mt-2 text-sm text-muted">{member.title}</p>
                </div>
                <Link href={member.linkedin} className="rounded-full border border-border bg-white p-2 text-muted transition hover:border-accent hover:text-accent">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
