import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, findBlogPost } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = findBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-shell max-w-[760px]">
        <p className="text-sm text-muted">Home &gt; Blog &gt; {post.title}</p>
        <div className="mt-6 inline-flex rounded-sm bg-accent-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-text">
          {post.category}
        </div>
        <h1 className="mt-5 font-display text-[clamp(3rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-ink">{post.title}</h1>
        <div className="mt-6 flex items-center gap-4">
          <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" alt={post.author} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
          <div className="text-sm text-muted">
            <p className="font-semibold text-ink">By {post.author}</p>
            <p>
              {post.date} · {post.readTime}
            </p>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl">
          <Image src={post.coverImage} alt={post.title} width={1600} height={900} className="w-full object-cover" />
        </div>
        <article className="prose caladium-prose mt-12 max-w-none text-[17px] leading-8">
          {post.body.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {post.body.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.quote ? <blockquote>{section.quote}</blockquote> : null}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </article>
        <div className="mt-16">
          <h2 className="font-display text-4xl font-semibold text-ink">You may also like</h2>
          <div className="mt-8 space-y-4">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="flex flex-col gap-5 rounded-xl border border-border p-5 transition hover:border-accent sm:flex-row">
                <Image src={item.coverImage} alt={item.title} width={260} height={170} className="w-full rounded-xl object-cover sm:w-[260px]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">{item.category}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-body">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
