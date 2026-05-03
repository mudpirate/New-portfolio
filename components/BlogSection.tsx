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

const BlogSection = () => {
  return (
    <section id="blog" className="px-5 sm:px-8 py-8 border-t border-dashed border-white/35">
      <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-6">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
          Sharing What I Learn
        </span>
      </div>

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
              {/* Instrument Serif blog title */}
              <h3 className="font-[family-name:var(--font-instrument-serif)] text-base sm:text-lg text-white/80 group-hover:text-white transition-colors leading-snug">
                {post.title}{" "}
                <span className="inline-block text-white/25 group-hover:text-white/60 transition-colors text-sm">
                  ↗
                </span>
              </h3>
              {/* Geist Mono date */}
              <span className="flex items-center gap-1 font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/28 text-xs flex-shrink-0 mt-1 tracking-tight">
                <Calendar size={10} />
                {post.date}
              </span>
            </div>
            {/* Geist Sans description */}
            <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
              {post.description}
            </p>
          </a>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <a
          href="#"
          className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs px-3 py-1.5 border border-white/20 text-white/40 hover:border-white/40 hover:text-white/75 transition-all flex items-center gap-1.5 tracking-tight"
        >
          View all blogs ↗
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
