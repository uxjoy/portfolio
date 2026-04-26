import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentPath = path.join(process.cwd(), "content/blog");

// ✅ Estimate reading time
function calculateReadingTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// ✅ Type (optional but recommended)
type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(contentPath);

  return files
    .map((file) => {
      const fullPath = path.join(contentPath, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");

      const { data, content } = matter(fileContent);

      const slug = file.replace(".md", "");

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Unknown",
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(contentPath, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Unknown",
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    content: processed.toString(),
  };
}
