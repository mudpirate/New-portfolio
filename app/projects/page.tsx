import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/RecentProjects";
import { projects } from "@/data";

export const metadata = {
  title: "Projects — Nomesh Singh",
  description: "All projects built by Nomesh Singh.",
};

const ProjectsPage = () => {
  return (
    <main className="min-h-screen w-full bg-black flex justify-center">
      <div className="w-full max-w-3xl border-l border-r border-dashed border-white/35 flex flex-col min-h-screen">
        <Navbar />

        <section className="px-5 sm:px-8 pt-10 pb-8">
          {/* Heading */}
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Projects
          </h1>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
            Every project you see here is something I&apos;ve built with intent
            — to learn, to improve, or to solve a real world need. Whether
            it&apos;s a crisp UI or a full-stack system, I care about making
            things that actually work and feel great to use.
          </p>

          {/* Section label */}
          <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-6">
            <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
              Things I&apos;ve Built
            </span>
          </div>

          {/* All project cards */}
          <div className="flex flex-col gap-2.5">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default ProjectsPage;
