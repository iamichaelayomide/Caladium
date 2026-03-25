import { notFound } from "next/navigation";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Badge } from "@/components/ui/Badge";
import { journalPosts } from "@/lib/content";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const post = journalPosts.find((entry) => entry.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,720px)]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <p className="text-xs uppercase tracking-[0.22em] text-faint">Contents</p>
                <div className="mt-4 space-y-3 text-sm text-muted">
                  <p>Introduction</p>
                  <p>Context</p>
                  <p>Execution principles</p>
                  <p>What leaders should do next</p>
                </div>
              </div>
            </aside>
            <article>
              <Badge className="border-transparent bg-accent-light text-accent shadow-none">{post.category}</Badge>
              <h1 className="mt-6 font-bricolage text-4xl font-bold tracking-[-0.03em] md:text-6xl">{post.title}</h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light font-bricolage text-xl font-bold text-accent">
                  {post.author[0]}
                </div>
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="mt-8 h-72 rounded-[28px] bg-gradient-to-br from-accent-light to-pastel-green" />
              <div className="prose caladium-prose mt-10 max-w-none prose-p:text-[16px] prose-p:leading-8 prose-headings:font-bricolage">
                <p>{post.excerpt}</p>
                <h2>Introduction</h2>
                <p>
                  African enterprises are operating in a market defined by volatility, opportunity, and
                  accelerated change. That mix rewards organizations that can diagnose reality clearly,
                  align their structures quickly, and execute with discipline.
                </p>
                <h2>Context</h2>
                <p>
                  At Caladium, we see the same pattern repeatedly: growth stalls when strategy stays
                  abstract. Market insight, operating design, and financial planning need to move
                  together or momentum is lost.
                </p>
                <blockquote>
                  Strong strategy is not a slide deck. It is a sequence of decisions that an organization
                  can actually execute in its market.
                </blockquote>
                <h2>Execution principles</h2>
                <ul>
                  <li>Diagnose the real constraint instead of treating visible symptoms.</li>
                  <li>Design around measurable outcomes, owners, and operating cadence.</li>
                  <li>Translate strategy into the next 90 days before projecting the next 3 years.</li>
                </ul>
                <h2>What leaders should do next</h2>
                <p>
                  Start with a sharp view of your current operating model, identify the few decisions that
                  unlock disproportionate progress, and build an implementation rhythm around them. That is
                  where advisory creates value.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
