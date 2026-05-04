"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";

const iconToName: Record<string, string> = {
  "/next.svg": "Next.js",
  "/re.svg": "React.js",
  "/tail.svg": "Tailwind CSS",
  "/ts.svg": "TypeScript",
  "/MongoDB.svg": "MongoDB",
  "/inngest.png": "Inngest",
  "/neon.png": "Neon",
  "/c.svg": "Clerk",
  "/JavaScript.svg": "JavaScript",
  "/three.svg": "Three.js",
  "/jwt.png": "JWT",
  "/google.png": "Google",
  "/PostgresSQL.svg": "PostgreSQL",
  "/MySQL.svg": "MySQL",
};

export const ProjectCard = ({
  title,
  des,
  img,
  iconLists,
  link,
  git,
  inProgress,
}: (typeof projects)[number]) => (
  <div className="border border-dashed border-white/35 flex flex-col sm:flex-row">
    <div className="sm:w-[38%] w-full h-44 sm:h-auto lg:h-auto overflow-hidden bg-white/[0.02] flex-shrink-0">
      <Image
        src={img}
        alt={title}
        width={520}
        height={340}
        className="w-full h-full object-cover object-top"
      />
    </div>

    <div className="flex-1 p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col gap-2.5 border-t sm:border-t-0 sm:border-l border-dashed border-white/35">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl lg:text-2xl text-white leading-snug">
          {title}
        </h2>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs px-2 py-0.5 border border-white/20 text-white/50 hover:border-white/35 hover:text-white/90 transition-all tracking-tight"
            >
              Live
            </a>
          )}
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs px-2 py-0.5 border border-white/20 text-white/50 hover:border-white/35 hover:text-white/90 transition-all tracking-tight"
            >
              Github
            </a>
          )}
          {inProgress && (
            <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs px-2 py-0.5 border border-white/20 text-white/50 tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              In Progress
            </span>
          )}
        </div>
      </div>

      <p className="text-white/50 text-sm lg:text-[15px] leading-relaxed line-clamp-3">{des}</p>

      <div className="mt-auto pt-2">
        <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/25 text-xs mb-1.5 tracking-tight">
          Technologies Used:
        </p>
        <div className="flex flex-wrap gap-1">
          {iconLists.map((icon) => {
            const name = iconToName[icon] ?? icon.replace(/\/|\.svg|\.png/g, "");
            return (
              <span
                key={icon}
                className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs px-1.5 py-0.5 border border-white/15 text-white/45 tracking-tight"
              >
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const RecentProjects = () => {
  const featured = projects.slice(0, 2);

  return (
    <section id="projects" className="px-5 sm:px-8 lg:px-10 xl:px-12 py-8 md:py-10 lg:py-12 border-t border-dashed border-b border-white/35">
      <div className="inline-block px-1 py-2 mb-6 lg:mb-8">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:100] text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
          Things I&apos;ve Built
        </span>
      </div>

      <div className="flex flex-col gap-2.5 lg:gap-3">
        {featured.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      <div className="flex justify-end mt-4 lg:mt-5">
        <Link
          href="/projects"
          className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs text-white/40 hover:text-white/80 transition-colors py-2 border px-2 border-white/35 border-dashed flex items-center gap-1.5 tracking-tight"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
