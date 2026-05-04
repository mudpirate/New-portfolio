import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-white mb-4 leading-tight">
            All Blogs
          </h1>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
            I share what I&apos;m learning as I grow — the challenges,
            breakthroughs, and small wins along the way. These blogs are simple
            and honest reflections of my journey, written to document what
            works, what doesn&apos;t, and what&apos;s worth remembering.
          </p>

          <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-6">
            <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
              Sharing What I Learn
            </span>
          </div>

          <div className="flex items-center gap-3 py-6">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/45 text-sm tracking-tight">
              In progress — blog posts coming soon.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default BlogPage;
