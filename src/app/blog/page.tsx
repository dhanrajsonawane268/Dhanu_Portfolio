// src/app/blog/page.tsx
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts, learnings, and technical writings.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-4xl mb-10 tracking-tight">Blog</h1>
      </BlurFade>

      {posts
        .sort((a, b) =>
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ? -1
            : 1
        )
        .map((post, id) => (
          <BlurFade
            key={post.slug}
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            className="mb-8"
          >
            <Link
              className="flex flex-col p-5 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              href={`/blog/${post.slug}`}
            >
              <p className="font-semibold text-xl tracking-tight">
                {post.metadata.title}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {post.metadata.publishedAt}
              </p>

              {post.metadata.summary && (
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.metadata.summary}
                </p>
              )}
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
