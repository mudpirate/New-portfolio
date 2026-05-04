"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface Stats {
  total: number;
  currentStreak: number;
  maxStreak: number;
}

const theme = {
  light: ["#111111", "#2a2a2a", "#4a4a4a", "#7a7a7a", "#c8c8c8"],
  dark: ["#111111", "#2a2a2a", "#4a4a4a", "#7a7a7a", "#c8c8c8"],
};

const GitHubContributions = () => {
  const [stats, setStats] = useState<Stats>({
    total: 0,
    currentStreak: 0,
    maxStreak: 0,
  });

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/mudpirate?y=last")
      .then((res) => res.json())
      .then((data: { contributions: ContributionDay[] }) => {
        const days = data.contributions;
        const total = days.reduce((sum, d) => sum + d.count, 0);

        let maxStreak = 0;
        let tempStreak = 0;
        for (const day of days) {
          if (day.count > 0) {
            tempStreak++;
            if (tempStreak > maxStreak) maxStreak = tempStreak;
          } else {
            tempStreak = 0;
          }
        }

        let currentStreak = 0;
        for (let i = days.length - 1; i >= 0; i--) {
          if (days[i].count > 0) {
            currentStreak++;
          } else {
            break;
          }
        }

        setStats({ total, currentStreak, maxStreak });
      })
      .catch(() => {});
  }, []);

  return (
    <section className="px-5 sm:px-8 py-8 border-b border-white/15">
      <div className="inline-block  px-1 py-2 mb-6">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:100] text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-8 leading-tight">
        Github Contributions
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-6 font-[family-name:var(--font-geist-sans)] [font-weight:400] text-xs tracking-tight">
        <span>
          <span className="text-white [font-weight:500]">
            {stats.total.toLocaleString()}
          </span>{" "}
          <span className="text-white/45">contributions</span>
        </span>
        
      
      </div>

      <div className="overflow-x-auto pb-2 github-calendar-wrapper">
        <GitHubCalendar
          username="mudpirate"
          theme={theme}
          colorScheme="dark"
          showTotalCount={false}
          blockMargin={3}
          blockRadius={2}
          blockSize={11}
          fontSize={11}
          style={{
            fontFamily: "var(--font-geist-sans)",
            color: "rgba(255,255,255,0.35)",
          }}
        />
      </div>
    </section>
  );
};

export default GitHubContributions;
