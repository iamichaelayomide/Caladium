"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogPost } from "@/lib/site-data";

const filters = ["All", "Strategy", "SME", "Report", "Founders", "Operations", "Market Entry"] as const;

export function BlogFilterGrid({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((post) => post.category === active)),
    [active, posts]
  );

  return (
    <>
      <div className="mt-10 flex gap-5 overflow-x-auto border-b border-border pb-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition ${active === filter ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-xl border border-border bg-white shadow-card">
            <div className="overflow-hidden">
              <Image src={post.coverImage} alt={post.title} width={1200} height={700} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
            </div>
            <div className="p-6">
              <span className="rounded-sm bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">{post.category}</span>
              <p className="mt-3 text-xs text-muted">{post.date}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-9 text-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-body">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-ink transition hover:text-accent">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
