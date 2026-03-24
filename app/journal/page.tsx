import Link from "next/link";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { journalPosts } from "@/lib/content";

export default function JournalPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-bricolage text-5xl font-bold tracking-[-0.03em] md:text-7xl">
              The Caladium Journal
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Insights on strategy, African business, and the future of enterprise.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {journalPosts.map((post, index) => (
              <Link key={post.slug} href={`/journal/${post.slug}`}>
                <Card className="h-full overflow-hidden transition-shadow duration-200 hover:shadow-card-hover">
                  <div className={`h-56 ${index % 3 === 0 ? "bg-gradient-to-br from-accent-light to-pastel-blue" : index % 3 === 1 ? "bg-gradient-to-br from-gold-light to-pastel-warm" : "bg-gradient-to-br from-pastel-purple to-pastel-green"}`} />
                  <div className="p-6">
                    <Badge className="border-transparent bg-accent-light px-3 py-1 text-accent shadow-none">
                      {post.category}
                    </Badge>
                    <h2 className="mt-4 font-bricolage text-2xl font-semibold leading-snug">{post.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-sm text-faint">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
