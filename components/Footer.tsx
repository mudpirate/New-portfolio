"use client";

import { useEffect, useState } from "react";

const DelhiClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
};

const Footer = () => {
  return (
    <footer className="px-5 sm:px-8 lg:px-10 xl:px-12 mt-auto">
      <div className="border-t border-dashed border-white/35 py-5 lg:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <p className="text-white/50 text-sm lg:text-[15px]">
            Designed &amp; Developed by{" "}
            <span className="text-white/80 font-semibold">Nomesh</span>
          </p>
          <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/22 text-xs tracking-tight">
            ©2026. All rights reserved.
          </p>
        </div>

        <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/28 text-xs tracking-tight">
          Kolkata, <DelhiClock />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
