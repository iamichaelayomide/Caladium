import { BlogFilterGrid } from "@/components/blog/BlogFilterGrid";
import { PageHero } from "@/components/shared/PageHero";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > Blog"
        label="Our Journal"
        title="Insights. Strategies. Real-world perspectives."
        description="Explore fresh thinking on African business strategy, operational excellence, and leadership in times of change. Written by our consultants for decision-makers."
      />
      <section className="section-padding bg-white">
        <div className="container-shell">
          <BlogFilterGrid posts={blogPosts} />
        </div>
      </section>
    </>
  );
}
