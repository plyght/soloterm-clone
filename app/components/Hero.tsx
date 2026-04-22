"use client";

import { useState, type KeyboardEvent } from "react";

type TabId = "agents" | "projects" | "commands" | "team-sharing";

type Tab = {
  id: TabId;
  label: string;
  iconActive: string;
  iconInactive: string;
  video: { mp4: string; webm: string };
};

const TABS: Tab[] = [
  {
    id: "agents",
    label: "Agents",
    iconActive: "/assets/agents-active.svg",
    iconInactive: "/assets/agents-inactive.svg",
    video: {
      mp4: "/assets/videos/v2-agents.mp4",
      webm: "/assets/videos/v2-agents.webm",
    },
  },
  {
    id: "projects",
    label: "Projects",
    iconActive: "/assets/projects-active.svg",
    iconInactive: "/assets/projects-inactive.svg",
    video: {
      mp4: "/assets/videos/v2-projects.mp4",
      webm: "/assets/videos/v2-projects.webm",
    },
  },
  {
    id: "commands",
    label: "Commands",
    iconActive: "/assets/processes-active.svg",
    iconInactive: "/assets/processes-inactive.svg",
    video: {
      mp4: "/assets/videos/v2-processes.mp4",
      webm: "/assets/videos/v2-processes.webm",
    },
  },
  {
    id: "team-sharing",
    label: "Team Sharing",
    iconActive: "/assets/team-active.svg",
    iconInactive: "/assets/team-inactive.svg",
    video: {
      mp4: "/assets/videos/v2-share.mp4",
      webm: "/assets/videos/v2-share.webm",
    },
  },
];

export default function Hero() {
  const [active, setActive] = useState<TabId>("agents");

  function onTablistKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const idx = TABS.findIndex((t) => t.id === active);
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const next = TABS[(idx + dir + TABS.length) % TABS.length];
      setActive(next.id);
    }
  }

  const activeTab = TABS.find((t) => t.id === active)!;

  return (
    <section id="hero" className="bg-blue-800 relative overflow-hidden">
      <div className="container relative">
        <div className="flex relative flex-col gap-10 xs:gap-10 lg:gap-20 w-full [--hero-padding-top:3.25rem] lg:[--hero-padding-top:5.5rem] pt-(--hero-padding-top) [--hero-content-width:45rem] lg:[--hero-content-width:67.5rem] max-w-(--hero-content-width) mx-auto z-10">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="border border-border p-0.5 mb-6 flex flex-row gap-2 items-center">
              <div className="bg-white/25 px-2 flex flex-row gap-2 py-1 items-center">
                <img src="/assets/check-blue.svg" alt="check" className="size-4" />
                <span className="text-white text-sm leading-none">
                  Not an IDE. On purpose.
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-medium leading-[1.2] lg:text-6xl text-white text-center text-balance">
              The workspace for your agents and dev stack
            </h1>

            <div className="flex flex-col gap-3 mt-5">
              <p className="text-white text-center text-balance text-sm lg:text-base max-w-prose font-light">
                Run Claude Code, Codex, and Gemini CLI alongside your dev
                server, queue workers, databases, and interactive terminals.
              </p>
            </div>

            <div className="flex flex-row gap-4 mt-10">
              <a
                data-slot="button"
                className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white text-blue-800 border border-btn-primary-border shadow-[inset_0px_-2px_0px_var(--btn-primary-glow),inset_0px_2px_0px_var(--btn-primary-glow)] hover:bg-gray-50 h-10 rounded-none px-4 lg:px-6 has-[>svg]:px-4"
                href="https://soloterm.com/download"
              >
                Download free
                <img src="/assets/download.svg" alt="download" className="size-3" />
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <div
                role="tablist"
                aria-label="Hero feature tabs"
                onKeyDown={onTablistKeyDown}
                className="flex flex-row items-center justify-center w-fit p-0.5 bg-blue-500"
              >
                {TABS.map((tab) => {
                  const isActive = tab.id === active;
                  return (
                    <button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      aria-controls={`tabpanel-${tab.id}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActive(tab.id)}
                      className="relative flex flex-row items-center gap-2 px-2.5 py-1.5 cursor-pointer whitespace-nowrap"
                    >
                      {isActive && (
                        <div
                          className="absolute inset-0 z-0 bg-white"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        />
                      )}
                      <img
                        src={isActive ? tab.iconActive : tab.iconInactive}
                        alt={tab.label}
                        aria-hidden="true"
                        className="relative z-10 size-4"
                      />
                      <span
                        className={`relative z-10 text-sm ${isActive ? "text-black" : "text-white"}`}
                      >
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                key={activeTab.id}
                id={`tabpanel-${activeTab.id}`}
                aria-labelledby={`tab-${activeTab.id}`}
                className="relative w-full aspect-video -mb-[50px]"
                style={{ clipPath: "inset(0px 0px 50px)" }}
              >
                <div className="size-full">
                  <div className="absolute inset-0">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="size-full object-cover rounded-t-lg"
                    >
                      <source src={activeTab.video.mp4} type="video/mp4" />
                      <source src={activeTab.video.webm} type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 top-2">
          <img
            src="/assets/hero-pattern.webp"
            fetchPriority="high"
            alt=""
            aria-hidden="true"
            className="size-full object-cover hidden lg:block"
          />
          <img
            src="/assets/hero-pattern-mobile.webp"
            fetchPriority="high"
            alt=""
            aria-hidden="true"
            className="size-full object-cover hidden xs:block lg:hidden"
          />
          <img
            src="/assets/hero-pattern-mobile-xs.webp"
            fetchPriority="high"
            alt=""
            aria-hidden="true"
            className="size-full object-cover block xs:hidden"
          />
        </div>
      </div>
    </section>
  );
}
