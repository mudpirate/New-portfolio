"use client";

import Image from "next/image";

interface Skill {
  name: string;
  icon: string | null;
}

interface SkillGroup {
  category: string;
  items: Skill[];
}

const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "JavaScript", icon: "/JavaScript.svg" },
      { name: "Python", icon: "/py.svg" },
      { name: "Go", icon: null },
      { name: "C++", icon: "/cpp.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: null },
      { name: "Bun", icon: null },
      { name: "Express", icon: "/ex.svg" },
      { name: "Hono", icon: null },
      { name: "FastAPI", icon: null },
      { name: "Flask", icon: null },
      { name: "Elysia", icon: null },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Redux", icon: "/redux.svg" },
      { name: "TailwindCSS", icon: "/tail.svg" },
      { name: "Shadcn UI", icon: "/s.svg" },
      { name: "Three.js", icon: "/three.svg" },
      { name: "Framer Motion", icon: null },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: "/MongoDB.svg" },
      { name: "MySQL", icon: "/MySQL.svg" },
      { name: "PostgreSQL", icon: "/PostgresSQL.svg" },
      { name: "SQLite", icon: null },
      { name: "Redis", icon: null },
      { name: "Prisma", icon: null },
      { name: "Drizzle", icon: null },
    ],
  },
  {
    category: "Dev / Tools",
    items: [
      { name: "Git", icon: "/git.svg" },
      { name: "GitHub", icon: "/GitHub.svg" },
      { name: "Docker", icon: null },
      { name: "Vercel", icon: "/Vercel.svg" },
      { name: "AWS", icon: "/awss.svg" },
      { name: "Cloudflare", icon: null },
      { name: "Postman", icon: null },
    ],
  },
];

const SkillBadge = ({ name, icon }: Skill) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 text-white/70 text-xs font-[family-name:var(--font-geist-sans)] [font-weight:400] tracking-tight rounded-sm hover:border-white/30 hover:text-white/90 transition-all duration-200 cursor-default">
    {icon && (
      <Image
        src={icon}
        alt={name}
        width={14}
        height={14}
        className="w-3.5 h-3.5 object-contain opacity-75"
      />
    )}
    {name}
  </div>
);

const Skills = () => {
  return (
    <section className="px-5 sm:px-7 py-8 border-b border-white/15">
      <div className="inline-block  px-1 py-2 mb-6">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:100] text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-8 leading-tight">
        Skills
        </span>
      </div>

      <div className="flex flex-wrap gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="relative border border-white/10 px-3 pt-6 pb-3 rounded-sm"
          >
            <span className="absolute top-0 left-3 -translate-y-1/2 text-white/35 text-[10px] font-[family-name:var(--font-geist-sans)] [font-weight:400] tracking-widest uppercase bg-black px-1">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
