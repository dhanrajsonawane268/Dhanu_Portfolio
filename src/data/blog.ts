// src/data/blog.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

import { unified } from "unified";

// --------------------------
// TYPES
// --------------------------
export type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  source: string;
};

// --------------------------
// MDX Convert to HTML
// --------------------------
export async function markdownToHTML(markdown: string): Promise<string> {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return processed.toString();
}

// --------------------------
// Get one blog post
// --------------------------
export async function getPost(slug: string): Promise<BlogPost> {
  const blogDir = path.join(process.cwd(), "content");
  const filePath = path.join(blogDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const rawFile = fs.readFileSync(filePath, "utf-8");

  const { content: rawContent, data: metadata } = matter(rawFile);

  const htmlContent = await markdownToHTML(rawContent);

  return {
    slug,
    metadata: metadata as BlogMetadata,
    source: htmlContent,
  };
}

// --------------------------
// Get list of files
// --------------------------
function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

// --------------------------
// Get all posts
// --------------------------
export async function getAllPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "content");

  const files = getMDXFiles(blogDir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      return await getPost(slug);
    })
  );

  return posts;
}

// --------------------------
// Export for blog list page
// --------------------------
export async function getBlogPosts(): Promise<BlogPost[]> {
  return getAllPosts();
}
