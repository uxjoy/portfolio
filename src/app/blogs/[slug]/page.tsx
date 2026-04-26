import { getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Contact from "../../../../components/Contact";
import Header from "../../../../components/navbar/Header";
import Ruler from "../../../../components/Ruler";

export default async function BlogPost({ params }: any) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-bgColor relative">
      <Ruler />

      <Header />

      <article className="border-t border-b border-white/5">
        <div className="content max-w-2xl mx-auto py-20 px-4">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>

          {/* Meta Info */}
          <div className="text-sm text-whiteAlpha-72 mb-6 flex gap-3 flex-wrap">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <span>•</span>

            <span>{post.readingTime}</span>

            {/* <span>•</span>

            <span>By {post.author}</span> */}
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-white/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div
            className="prose prose-invert max-w-none 
                   prose-headings:font-semibold 
                   prose-h2:mt-10 
                   prose-h3:mt-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Contact />
    </div>
  );
}
