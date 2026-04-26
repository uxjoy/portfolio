import { getAllPosts } from "@/lib/markdown";
import Link from "next/link";
import Contact from "../../../components/Contact";
import Header from "../../../components/navbar/Header";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-bgColor">
      <Header />

      <main className="border-t border-b border-white/5">
        <div className="content max-w-2xl mx-auto py-20 px-4 ">
          <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>

          {posts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <div className="mb-10">
                <h2 className="text-xl font-medium hover:underline">
                  {post.title}
                </h2>

                <p className="text-whiteAlpha-72 font-light mt-2">
                  {post.description}
                </p>

                <div className="text-xs text-whiteAlpha-72 mt-2 flex gap-2">
                  <span>
                    {" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Contact />
    </div>
  );
}
