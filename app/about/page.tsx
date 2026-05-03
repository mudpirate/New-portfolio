import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techStack = [
  {
    label: "Languages",
    items: ["C", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Python"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS",
      "Socket.io", "TanStack Query", "Motion.dev", "Redux Toolkit",
      "Zustand", "Prisma", "LangChain", "Zod", "Turborepo",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "NeonDB", "Appwrite"],
  },
  {
    label: "DevOps",
    items: ["Docker", "AWS (EC2, ECR, ECS, CloudFront)", "CI/CD", "Nginx"],
  },
  {
    label: "Tools",
    items: ["VS Code", "Postman", "Figma", "GitHub"],
  },
];

const journey = [
  {
    year: "2026",
    items: [
      {
        title: "Full Stack Developer Intern @ OceanLab Technology",
        desc: "Working on financial tools, hackathon platforms, and a scalable UI library used across multiple domains.",
      },
      {
        title: "Building AI-powered apps",
        desc: "Developing projects like ThinkEase — an AI mental health agent built with Next.js, MongoDB, and Gemini AI.",
      },
      {
        title: "Focused on system design",
        desc: "Currently learning microservices, deployment pipelines, and cloud infrastructure alongside daily dev work.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Frontend Developer Intern @ Research Commons",
        desc: "Built responsive UI components, improved performance, and shipped pixel-perfect interfaces from Figma.",
      },
      {
        title: "Launched personal projects",
        desc: "Shipped ZenFunds, The Pitch, ConGame, and FootLand — each solving a real problem end-to-end.",
      },
      {
        title: "Went deep on full stack",
        desc: "Gained confidence with databases, auth, REST APIs, and cloud deployments on Vercel and Railway.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Started real web development journey",
        desc: "Used the summer break to move beyond tutorials and build actual projects from scratch.",
      },
      {
        title: "Learned to build full stack apps",
        desc: "By year-end I could ship complete web apps using React, Node.js, Express, and MongoDB together.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Started my BCA journey",
        desc: "Entered college with no coding background and started from the very beginning.",
      },
      {
        title: "Learned C, HTML, CSS, and JavaScript",
        desc: "Followed the college syllabus to build a solid foundation and finish semester one strong.",
      },
      {
        title: "Focused on academics",
        desc: "Everything I studied was to perform well in exams and build a strong academic base to grow from.",
      },
    ],
  },
];

export const metadata = {
  title: "About — Nomesh Singh",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full bg-black flex justify-center">
      <div className="w-full max-w-3xl border-l border-r border-dashed border-white/35 flex flex-col min-h-screen">
        <Navbar />

        <section className="px-5 sm:px-8 pt-10 pb-8">
          {/* Heading */}
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-white mb-5 leading-tight">
            About me
          </h1>

          {/* Bio */}
          <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-10">
            I&apos;m a full stack developer who enjoys building things that are
            simple, useful, and easy to use. I like writing clean code,
            designing neat interfaces, and solving real problems with tech.
            I&apos;m always exploring new tools, learning as I go, and trying
            to get better every day.
          </p>

          {/* Tech Stack */}
          <div className="mb-10">
            <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-6">
              <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
                Tech Stack I Work With
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {techStack.map((cat) => (
                <li key={cat.label} className="flex items-start gap-2.5">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/25 flex-shrink-0" />
                  <p className="text-sm sm:text-base leading-relaxed text-white/60">
                    <span className="text-white/85 font-medium">{cat.label}:</span>{" "}
                    {cat.items.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Journey */}
          <div>
            <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-7">
              <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
                My Journey So Far
              </span>
            </div>

            <div className="flex flex-col gap-8">
              {journey.map((block) => (
                <div key={block.year}>
                  <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/90 text-sm font-semibold mb-4 tracking-tight">
                    {block.year}
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-white/25 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </span>
                        <div>
                          <p className="text-sm text-white/80 font-medium leading-snug">
                            {item.title}
                          </p>
                          <p className="text-sm text-white/45 leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;
