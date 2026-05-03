"use client";

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
      {/* Instrument Serif heading */}
      <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl md:text-6xl text-white tracking-tight mb-3 leading-tight">
        Hi, I&apos;m Nomesh
      </h1>

      {/* Geist Mono for roles */}
      <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/40 text-xs sm:text-md tracking-widest mb-7">
        Frontend&nbsp;•&nbsp;Backend&nbsp;•&nbsp;Devops&nbsp;•&nbsp;AI Agents&nbsp;•&nbsp;Automation&nbsp;
      </p>

      {/* Geist weight 139 — ultra-light body text */}
      <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed tracking-tight mb-5">
        They call me{" "}
        <span className="text-white [font-weight:300]">Static</span>. Sounds like noise, until you see the signal. I architect high-frequency interfaces, bridge the gap between data and design, and scale systems while the world is still sleeping.
      </p>

      <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed mb-2 flex flex-wrap items-center gap-1.5">
        Available for freelance or full-time roles. Slide into my{" "}
        <BadgeLink href="https://x.com/nomeshSingh_XD" icon="𝕏">
          DMs
        </BadgeLink>{" "}
        or{" "}
        <BadgeLink href="mailto:nomeshsingh33@gmail.com" icon="✉">
          Email
        </BadgeLink>{" "}
        me.
      </p>

      <p className="font-[family-name:var(--font-geist-sans)] [font-weight:140] text-white/70 text-sm sm:text-base leading-relaxed flex flex-wrap items-center gap-1.5">
        <Tag href="https://github.com/mudpirate" >GitHub</Tag>
        <span className="text-white/90">,</span>
        <Tag href="https://www.linkedin.com/in/nomesh-singh-121510328/">
          LinkedIn
        </Tag>
        <span className="text-white/90">,</span>
        <Tag href="/resume.pdf">Resume</Tag>{" "}
        <span className="text-white/60">
          ? Yep, they&apos;re all unlocked if you&apos;re curious.
        </span>
      </p>
    </section>
  );
};

export default Hero;
