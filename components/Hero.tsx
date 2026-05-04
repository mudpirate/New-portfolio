"use client";

import Image from "next/image";

const BadgeLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 px-2 py-0.5 border border-white/25 text-white/75 hover:border-white/50 hover:text-white transition-all duration-200 rounded-sm font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs tracking-tight"
  >
    {icon && <span>{icon}</span>}
    {children}
  </a>
);

const Tag = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-2 py-0.5 border border-white/20 text-white/65 hover:border-white/45 hover:text-white/95 transition-all duration-200 rounded-sm font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs tracking-tight"
  >
    {children}
  </a>
);

const Hero = () => {
  return (
    <section className="px-5 sm:px-8 pt-10 pb-8">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">

        {/* Avatar — top on mobile, right on sm+ */}
        <div className="order-2 hidden sm:flex flex-shrink-0 sm:pt-1
                        w-36 h-49 sm:w-44 sm:h-64  md:w-52 md:h-72">
          <Image
            src="/avatar.jpeg"
            alt="Nomesh"
            width={208}
            height={256}
            className="w-full h-full object-cover border border-white/15"
          />
        </div>

        {/* Text — below avatar on mobile, left on sm+ */}
        <div className="order-2 sm:order-2 flex-1 min-w-0">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 leading-tight">
            Hi, I&apos;m Nomesh
          </h1>

          <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/40 text-[10px] sm:text-xs tracking-widest mb-6">
            Frontend&nbsp;•&nbsp;Backend&nbsp;•&nbsp;Devops&nbsp;•&nbsp;AI Agents&nbsp;•&nbsp;Automation
          </p>

          <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed tracking-tight mb-4">
            I work across the full stack — from database design and backend APIs to responsive frontend interfaces — preferring to own features end-to-end.
          </p>

          <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed mb-4">
            Most of what I build is shaped by one question: does this stay fast and cost less as it scales?
          </p>

          <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed mb-2 flex flex-wrap items-center gap-1.5">
            Available for freelance or full-time roles. Slide into my{" "}
            <BadgeLink href="https://x.com/nomeshSingh_XD" icon="𝕏">
              DMs
            </BadgeLink>{" "}
            or{" "}
            <BadgeLink href="mailto:nomeshsingh33@gmail.com" icon="✉">
              Email
            </BadgeLink>,
            <Tag href="https://github.com/mudpirate">GitHub</Tag>
            <span className="text-white/90">,</span>
            <Tag href="https://www.linkedin.com/in/nomesh-singh-121510328/">
              LinkedIn
            </Tag>
            <span className="text-white/90">,</span>
            <Tag href="/resume.pdf">Resume</Tag>{" "}
          
          </p>

          <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed flex flex-wrap items-center gap-1.5">
            
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
