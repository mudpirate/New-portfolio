"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Particles } from "@/src/components/magicui/particles";

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
import Services from "@/components/services";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className=" flex flex-col overflow-x-hidden min-h-screen w-full">
      <div className="overflow-x-hidden overflow-y-hidden w-full max-w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Services />
        <Clients />

        <RecentProjects />
        <Approach />
        <Experience />
        <Footer />
        <Particles
          className="absolute hidden md:block inset-0 z-0"
          quantity={150}
          ease={80}
          refresh
        />
      </div>
    </main>
  );
};

export default Home;
