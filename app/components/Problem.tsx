export default function Problem() {
  return (
    <>
      <section id="problem" className="container">
            <div className="py-18 lg:py-20 xs:border-x xs:border-border">
              <div
                className="[--problem-section-content-width:31.25rem] max-w-(--problem-section-content-width) lg:max-w-none xs:px-5 lg:px-20 mx-auto flex flex-col gap-15"
              >
                <div
                  className="flex flex-col items-center justify-center w-full [--problem-text-content-width:37.75rem] max-w-(--problem-text-content-width) mx-auto"
                >
                  <div>
                    <div
                      className="rounded-none border font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border bg-transparent text-text-secondary text-xs flex flex-row gap-2 items-center p-0.5"
                    >
                      <div
                        className="bg-black/5 flex flex-row gap-2 items-center py-[5px] px-2"
                      >
                        <img
                          src="/assets/issue.svg"
                          alt="problem tagline icon"
                          className="size-4"
                        />
                        The Issue
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary text-center mt-3"
                    >
                      Your agents need a home
                    </h2>
                  </div>
                  <div>
                    <p
                      className="text-text-secondary text-center text-balance text-base max-w-prose font-light mt-6"
                    >
                      Claude Code in one tab. Codex in another. Amp in a third.
                      npm is maybe running. The queue worker crashed twenty
                      minutes ago but nobody told you. You have nine terminals
                      open and you can't remember what's running in any of them.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div
                    className="flex flex-col gap-6 py-6 px-4 border border-border first:border-b-0 last:border-t-0 lg:last:border-t lg:first:border-b lg:first:border-r-0 lg:last:border-l-0"
                  >
                    <div
                      className="w-[246px] h-[200px] flex items-center justify-center"
                    >
                      <img
                        src="/assets/project-juggling.webp"
                        alt="Tab roulette"
                        loading="lazy"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-text-primary">
                        Tab roulette
                      </h3>
                      <p
                        className="text-base mt-4 font-light text-text-secondary text-left"
                      >
                        Something needs your attention. Is it terminal three?
                        Five? You're clicking through all nine trying to find
                        the one that's screaming. By the time you find it,
                        another terminal has rung a bell.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-6 py-6 px-4 border border-border first:border-b-0 last:border-t-0 lg:last:border-t lg:first:border-b lg:first:border-r-0 lg:last:border-l-0"
                  >
                    <div
                      className="w-[246px] h-[200px] flex items-center justify-center"
                    >
                      <img
                        src="/assets/mental-overload.webp"
                        alt="Agents flying blind"
                        loading="lazy"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-text-primary">
                        Agents flying blind
                      </h3>
                      <p
                        className="text-base mt-4 font-light text-text-secondary text-left"
                      >
                        Your AI agent can't see your process output. It doesn't
                        know your dev server crashed ten minutes ago. It's
                        generating code against a stack that isn't even running.
                        Garbage in, garbage out.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-6 py-6 px-4 border border-border first:border-b-0 last:border-t-0 lg:last:border-t lg:first:border-b lg:first:border-r-0 lg:last:border-l-0"
                  >
                    <div
                      className="w-[246px] h-[200px] flex items-center justify-center"
                    >
                      <img
                        src="/assets/silent-failures.webp"
                        alt="Is it even running?"
                        loading="lazy"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-text-primary">
                        Is it even running?
                      </h3>
                      <p
                        className="text-base mt-4 font-light text-text-secondary text-left"
                      >
                        You're running three agents and a full dev stack. Green?
                        Red? Running? Crashed? You have no idea without checking
                        each terminal one by one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
