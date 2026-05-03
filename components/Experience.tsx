"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Calendar } from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "Omnia",
    icon: "⚙",
    role: "Full Stack AI Intern",
    type: "Remote",
    dates: "December - May 2026",
    defaultOpen: true,
    bullets: [
      "Developed an internal financial management system to track income, manage expenses, and provide analytics with multi-currency support.",
      "Designed and built a modern hackathon website with an AI-first UI and seamless registration flow.",
      "Built 15+ responsive dashboards with light/dark mode for a scalable UI library across multiple domains.",
      "Led UI library development by fixing bugs, adding features, and reviewing PRs to ensure code quality and scalability.",
      "Tech Stack: React.js, Next.js, Tailwind CSS, TypeScript, Supabase, Motion",
    ],
  },
  {
    id: 2,
    company: "Freelancer",
    icon: "✦",
    role: "Frontend and React Native Developer",
    type: "Remote",
    dates: "September - November 2025",
    defaultOpen: false,
    bullets: [
      "Built and maintained responsive UI components for the platform's public-facing web application.",
      "Collaborated with designers to translate Figma mockups into pixel-perfect React components.",
      "Improved page load performance by optimising asset delivery and reducing bundle size.",
      "Tech Stack: React.js, Tailwind CSS, JavaScript, REST APIs",
    ],
  },
];

const Experience = () => {
  const [openIds, setOpenIds] = useState<Set<number>>(
    new Set(jobs.filter((j) => j.defaultOpen).map((j) => j.id))
  );

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="about" className="px-5 sm:px-8 py-8 border-t border-dashed border-white/35">
      {/* Geist Mono section label */}
      <div className="inline-block border border-dashed border-white/35 px-2  py-2 mb-6">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400]  text-white/80 text-xs sm:text-sm tracking-tight">
          Places I&apos;ve Made an Impact
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {jobs.map((job) => {
          const isOpen = openIds.has(job.id);
          return (
            <div key={job.id} className="border border-dashed border-white/35">
              <button
                onClick={() => toggle(job.id)}
                className="w-full text-left px-5 sm:px-6 pt-4 pb-3 flex items-start justify-between gap-4 group"
              >
                <div className="flex flex-col gap-1.5 min-w-0">
                  {/* Instrument Serif company name */}
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-instrument-serif)] text-xl sm:text-2xl text-white leading-tight">
                      {job.company}
                    </span>
                    
                  </div>

                  {/* Geist Mono for role / badge / date */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400]  text-white/50 text-xs tracking-tight">
                      {job.role}
                    </span>
                    <span className="font-[family-name:var(--font-geist-mono)] text-xs px-1.5 py-0.5 border border-white/20 text-white/40 tracking-tight">
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-white/35 text-xs ml-auto tracking-tight">
                      <Calendar size={10} />
                      {job.dates}
                    </span>
                  </div>
                </div>

                <div className="mt-1 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0">
                  {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </button>

              {isOpen && (
                <ul className="px-5 sm:px-6 pb-5 flex flex-col gap-2">
                  {job.bullets.map((bullet, i) => {
                    const isTechStack = bullet.startsWith("Tech Stack:");
                    return (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                        {isTechStack ? (
                          <span className="text-sm leading-relaxed">
                            <span className="font-[family-name:var(--font-geist-mono)] text-white/35 text-xs">
                              Tech Stack:{" "}
                            </span>
                            <span className="font-[family-name:var(--font-geist-mono)] text-white/65 text-xs font-medium">
                              {bullet.replace("Tech Stack: ", "")}
                            </span>
                          </span>
                        ) : (
                          <span className="text-sm text-white/60 leading-relaxed">
                            {bullet}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
