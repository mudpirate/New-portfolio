import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Why Choose Next.js Over React.js: The Complete Developer's Guide",
    description:
      "Discover the key advantages of Next.js over React.js, including performance benefits, SEO improvements, and developer experience enhancements that make it the go-to framework for production apps.",
    date: "28 July 2025",
    link: "#",
  },
  {
    title: "Tailwind CSS Basics: A Complete Beginner's Guide",
    description:
      "Learn the fundamentals of Tailwind CSS, from installation to utility classes, responsive design, and best practices for building modern web interfaces.",
    date: "28 July 2025",
    link: "#",
  },
];

export const metadata = {
  title: "Blog — Nomesh Singh",
  description: "Thoughts, learnings, and reflections by Nomesh Singh.",
};

const BlogPage = () => {
  return (
    <main className="min-h-screen w-full bg-black flex justify-center">
      <div className="w-full max-w-3xl border-l border-r border-dashed border-white/35 flex flex-col min-h-screen">
        <Navbar />

        <section className="px-5 sm:px-8 pt-10 pb-8">
          {/* Heading */}
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-white mb-4 leading-tight">
            All Blogs
          </h1>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
            I share what I&apos;m learning as I grow — the challenges,
            breakthroughs, and small wins along the way. These blogs are simple
            and honest reflections of my journey, written to document what
            works, what doesn&apos;t, and what&apos;s worth remembering.
          </p>

          {/* Section label */}
          <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-6">
            <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
              Sharing What I Learn
            </span>
          </div>

          {/* Blog posts */}
          <div className="flex flex-col">
            {blogPosts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-4 border-b border-dashed border-white/35 last:border-b-0 flex flex-col gap-1.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-[family-name:var(--font-instrument-serif)] text-base sm:text-lg text-white/80 group-hover:text-white transition-colors leading-snug">
                    {post.title}{" "}
                    <span className="inline-block text-white/25 group-hover:text-white/60 transition-colors text-sm">
                      ↗
                    </span>
                  </h2>
                  <span className="flex items-center gap-1 font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/30 text-xs flex-shrink-0 mt-1 tracking-tight">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default BlogPage;
