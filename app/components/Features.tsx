export default function Features() {
  return (
    <>
      <section id="features" className="container">
            <div className="py-18 lg:py-20 xs:border-x xs:border-border">
              <div
                className="[--features-section-content-width:31.25rem] max-w-[var(--features-section-content-width)] lg:max-w-none w-full mx-auto flex xs:px-5 lg:px-20 flex-col gap-15 items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <div>
                    <div
                      className="rounded-none border font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border bg-transparent text-text-secondary text-xs flex flex-row gap-2 mb-3 items-center p-0.5 justify-center w-fit text-center"
                    >
                      <div
                        className="flex flex-row gap-2 items-center py-[5px] px-2"
                      >
                        <img
                          src="/assets/check.svg"
                          alt="solution tagline icon"
                          className="size-4"
                        />
                        Why Solo
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary text-center"
                    >
                      Built for agentic development
                    </h2>
                  </div>
                  <div>
                    <p
                      className="text-text-secondary text-center text-balance text-base max-w-prose font-light mt-6"
                    >
                      Your agents need a reliable terminal workspace. Solo gives
                      them one.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-6 auto-rows-auto">
                  <div
                    className="col-span-1 lg:col-span-3 flex flex-col"
                  >
                    <div className="border border-border p-6 flex-1">
                      <img
                        src="/assets/claude.svg"
                        alt=""
                        className="size-10 mb-7"
                      />
                      <div className="flex flex-col gap-4">
                        <h3
                          className="text-base font-medium leading-[1.1] text-text-primary"
                        >
                          Your agents can see your stack
                        </h3>
                        <p
                          className="text-text-secondary text-balance text-base font-light"
                        >
                          Solo speaks MCP. Your AI agents can read logs, see
                          process status, and restart crashed services — without
                          you lifting a finger. Context-aware agents write
                          better code.
                        </p>
                        <div
                          className="rounded-xl overflow-hidden shadow-2xl shadow-black/20"
                        >
                          <div
                            className="bg-[#1e1e1e] px-3 py-2 flex items-center gap-2 border-b border-white/5"
                          >
                            <div className="flex gap-1.5">
                              <div
                                className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"
                              ></div>
                              <div
                                className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"
                              ></div>
                              <div
                                className="w-2.5 h-2.5 rounded-full bg-[#28c840]"
                              ></div>
                            </div>
                            <div className="flex-1 text-center">
                              <span
                                className="text-[10px] text-white/40 font-medium"
                                >Claude Code — solo</span
                              >
                            </div>
                            <div className="w-12"></div>
                          </div>
                          <div
                            className="bg-[#1e1e1e] p-4 font-mono text-[13px] leading-relaxed"
                          >
                            <div className="flex items-start gap-2 mb-3">
                              <span className="text-[#155DFC] shrink-0">❯</span
                              ><span className="text-white/90"
                                >Restart the queue worker and show me the
                                output</span
                              >
                            </div>
                            <div className="mb-2">
                              <div
                                className="flex items-center gap-2 text-white/50"
                              >
                                <span className="text-[#c4a000]">●</span
                                ><span className="text-[#c4a000]">Solo MCP</span
                                ><span className="text-white/30"
                                  >(restart_process)</span
                                >
                              </div>
                              <div className="ml-4 mt-0.5 text-white/40 text-xs">
                                └ process: "queue:work"
                              </div>
                            </div>
                            <div
                              className="flex items-center gap-2 text-emerald-400"
                            >
                              <span>✓</span
                              ><span>Process restarted successfully</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-border p-6 border-t-0">
                      <img
                        src="/assets/raycast.svg"
                        alt=""
                        className="size-10 mb-7"
                      />
                      <div className="flex flex-col gap-4">
                        <h3
                          className="text-base font-medium leading-[1.1] text-text-primary"
                        >
                          Run any agent. No lock-in.
                        </h3>
                        <p
                          className="text-text-secondary text-balance text-base font-light"
                        >
                          Claude Code, Codex, Gemini CLI, Aider, your own
                          scripts — if it runs in a terminal, it runs in Solo.
                          No built-in models, no vendor lock-in. Use whatever
                          agent is best for the job.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-span-1 lg:col-span-3 flex flex-col"
                  >
                    <div
                      className="border border-border p-6 border-t-0 lg:border-t lg:border-l-0"
                    >
                      <img
                        src="/assets/terminal.svg"
                        alt=""
                        className="size-10 mb-7"
                      />
                      <div className="flex flex-col gap-4">
                        <h3
                          className="text-base font-medium leading-[1.1] text-text-primary"
                        >
                          Interactive terminal
                        </h3>
                        <p
                          className="text-text-secondary text-balance text-base font-light"
                        >
                          Type directly into running agents and processes.
                          Respond to Claude's prompts, interact with your Rails
                          console, or attach a debugger — all without switching
                          windows. Smooth rendering with full ANSI support.
                        </p>
                        
                      </div>
                    </div>
                    <div
                      className="border border-border p-6 border-t-0 lg:border-l-0 flex-1"
                    >
                      <img
                        src="/assets/keyboard.svg"
                        alt=""
                        className="size-10 mb-7"
                      />
                      <div className="flex flex-col gap-4">
                        <h3
                          className="text-base font-medium leading-[1.1] text-text-primary"
                        >
                          Command palette & keyboard navigation
                        </h3>
                        <p
                          className="text-text-secondary text-balance text-base font-light"
                        >
                          Everything in Solo is accessible via keyboard. Open
                          the command palette, jump between projects, start and
                          stop processes.
                        </p>
                        <img
                          src="/assets/keyboard-body.webp"
                          alt="Command palette & keyboard navigation"
                          loading="lazy"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-span-1 lg:col-span-3"
                  >
                    <div className="border border-border p-6 border-t-0 h-full">
                      <img
                        src="/assets/profile.svg"
                        alt=""
                        className="size-10 mb-7"
                      />
                      <div className="flex flex-col gap-4">
                        <h3
                          className="text-base font-medium leading-[1.1] text-text-primary"
                        >
                          Share Solo with your team
                        </h3>
                        <p
                          className="text-text-secondary text-balance text-base font-light"
                        >
                          Check in your solo.yml and give your team a shared
                          source of truth — including which agents to run and
                          how. Everyone gets the same commands, agents, and
                          terminal workflow in seconds.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-span-1 lg:col-span-3"
                  >
                    <div
                      className="border border-border p-6 border-t-0 lg:border-l-0 h-full"
                    >
                      <img
                        src="/assets/local.svg"
                        alt=""
                        className="size-10 mb-7"
                      />
                      <div className="flex flex-col gap-4">
                        <h3
                          className="text-base font-medium leading-[1.1] text-text-primary"
                        >
                          25MB. Not another IDE.
                        </h3>
                        <p
                          className="text-text-secondary text-balance text-base font-light"
                        >
                          Built with Tauri, not Electron. Solo is a lightweight
                          native terminal workspace, not a 500MB IDE
                          replacement. It runs your commands, agents, and
                          terminal sessions without getting in the way. Your
                          editor stays your editor.
                        </p>
                        
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
