"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubContributions from "@/components/GitHubContributions";
import Skills from "@/components/Skills";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen w-full bg-black flex justify-center">
      <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl border-l border-r border-dashed border-white/35 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <GitHubContributions />
        <Experience />
        <RecentProjects />
        <Skills />
        <BlogSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
