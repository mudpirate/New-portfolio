"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Keep FloatingNav client-only
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  { ssr: false }
);

// These can render on the server — remove ssr:false
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className=" flex flex-col overflow-x-hidden min-h-screen w-full">
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
