export default function Workflow() {
  return (
    <>
      <section id="workflow" className="container">
            <div className="py-18 lg:py-20 xs:border-x xs:border-border">
              <div
                className="xs:px-5 lg:px-20 lg:pr-0 [--breakdown-section-content-width:31.25rem] max-w-(--breakdown-section-content-width) lg:max-w-none w-full mx-auto flex flex-col items-start justify-start lg:flex-row gap-15"
              >
                <div
                  className="flex flex-col gap-10 flex-1 w-full items-start justify-start"
                >
                  <div className="flex flex-col items-start justify-start">
                    <div>
                      <h2
                        className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary mt-3 text-left"
                      >
                        What Solo actually does
                      </h2>
                    </div>
                    <div>
                      <p
                        className="text-text-secondary text-balance text-base max-w-prose font-light mt-6 text-left"
                      >
                        Runs your agents and your dev stack together. No bloat,
                        no configuration rabbit holes.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-10 w-full">
                    <div className="flex flex-row justify-between gap-10 w-full">
                      <div className="flex flex-col gap-6 flex-1 max-w-[29.5rem]">
                        <div className="cursor-pointer border-b border-border pb-8">
                          <div
                            className="grid overflow-hidden transition-all duration-300 ease-in-out"
                            style={{gridTemplateRows: "auto 1fr"}}
                          >
                            <div className="flex items-center gap-3 min-h-0">
                              <img
                                src="/assets/power.svg"
                                alt="Start your agents and stack at once"
                                className="w-6 h-6 shrink-0"
                              />
                              <h3 className="text-lg font-semibold">
                                Start your agents and stack at once
                              </h3>
                            </div>
                            <div className="min-h-0 overflow-hidden">
                              <p className="text-base text-text-primary pt-3">
                                Add Claude Code, Codex, Gemini, Amp, whatever
                                agents you need. Define your dev stack and hit
                                play. Everything spins up together. When you're
                                done, shut it all down with one click.
                              </p>
                              <p className="text-sm text-text-primary pt-2">
                                No more opening six terminals and trying to
                                remember what this project needs.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="cursor-pointer border-b border-border pb-8">
                          <div
                            className="grid overflow-hidden transition-all duration-300 ease-in-out"
                            style={{gridTemplateRows: "auto 0fr"}}
                          >
                            <div className="flex items-center gap-3 min-h-0">
                              <img
                                src="/assets/restart.svg"
                                alt="Auto-restart when things crash"
                                className="w-6 h-6 shrink-0 opacity-50"
                              />
                              <h3
                                className="text-lg font-semibold text-text-secondary"
                              >
                                Auto-restart when things crash
                              </h3>
                            </div>
                            <div className="min-h-0 overflow-hidden">
                              <p className="text-base text-text-primary pt-3">
                                Dev servers die. Solo notices and restarts them
                                automatically. Set up file watchers so code
                                changes restart the relevant process too.
                              </p>
                              <p className="text-sm text-text-primary pt-2">
                                Your AI agent won't generate code against a
                                server that silently crashed 20 minutes ago.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="cursor-pointer border-b border-border pb-8">
                          <div
                            className="grid overflow-hidden transition-all duration-300 ease-in-out"
                            style={{gridTemplateRows: "auto 0fr"}}
                          >
                            <div className="flex items-center gap-3 min-h-0">
                              <img
                                src="/assets/eye.svg"
                                alt="See everything at a glance"
                                className="w-6 h-6 shrink-0 opacity-50"
                              />
                              <h3
                                className="text-lg font-semibold text-text-secondary"
                              >
                                See everything at a glance
                              </h3>
                            </div>
                            <div className="min-h-0 overflow-hidden">
                              <p className="text-base text-text-primary pt-3">
                                Green means running. Red means crashed. See your
                                agents and your entire dev stack in one
                                dashboard. No clicking through terminals or
                                guessing.
                              </p>
                              <p className="text-sm text-text-primary pt-2">
                                If something's wrong — agent or process — you'll
                                see it.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="cursor-pointer border-b border-border pb-8">
                          <div
                            className="grid overflow-hidden transition-all duration-300 ease-in-out"
                            style={{gridTemplateRows: "auto 0fr"}}
                          >
                            <div className="flex items-center gap-3 min-h-0">
                              <img
                                src="/assets/profile.svg"
                                alt="Built for teams"
                                className="w-6 h-6 shrink-0 opacity-50"
                              />
                              <h3
                                className="text-lg font-semibold text-text-secondary"
                              >
                                Built for teams
                              </h3>
                            </div>
                            <div className="min-h-0 overflow-hidden">
                              <p className="text-base text-text-primary pt-3">
                                Commit your solo.yml to the repo and everyone
                                gets the same stack — including which agents to
                                run. No more outdated READMEs or Slack messages
                                asking how to set up the project.
                              </p>
                              <p className="text-sm text-text-primary pt-2">
                                New teammate? They're running the same agents
                                and stack in minutes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex-1 border-t-20 w-full border-l-20 border-blue-500 bg-blue-500 relative overflow-hidden rounded-tl-lg"
                      >
                        <div
                          className="absolute inset-0 w-full h-full"
                          
                        >
                          <video
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-full object-cover object-left rounded-tl-lg"
                          >
                            <source
                              src="https://soloterm.com/videos/v2-breakdown-start.mp4?v=5"
                              type="video/mp4"
                            />
                            <source
                              src="https://soloterm.com/videos/v2-breakdown-start.webm?v=5"
                              type="video/webm"
                            />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
