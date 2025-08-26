"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// load only on client (no SSR)
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  { ssr: false }
);

const Hero = dynamic(
  () => import("@/components/Hero").then((mod) => mod.default),
  { ssr: false }
);

const Grid = dynamic(
  () => import("@/components/Grid").then((mod) => mod.default),
  { ssr: false }
);

const Clients = dynamic(
  () => import("@/components/Clients").then((mod) => mod.default),
  { ssr: false }
);

const Approach = dynamic(
  () => import("@/components/Approach").then((mod) => mod.default),
  { ssr: false }
);

const Experience = dynamic(
  () => import("@/components/Experience").then((mod) => mod.default),
  { ssr: false }
);

const RecentProjects = dynamic(
  () => import("@/components/RecentProjects").then((mod) => mod.default),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="bg-black flex flex-col overflow-x-hidden min-h-screen w-full">
      <div className="overflow-x-hidden w-full max-w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Clients />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
