export default function Solution() {
  return (
    <>
      <section id="solution" className="container">
            <div className="py-18 lg:py-20 xs:border-x xs:border-border">
              <div
                className="xs:px-5 lg:px-20 [--solution-section-content-width:31.25rem] max-w-(--solution-section-content-width) lg:max-w-none w-full mx-auto flex flex-col items-start justify-start lg:flex-row gap-15"
              >
                <div
                  className="flex flex-col gap-5 flex-1 w-full items-start justify-start"
                >
                  <div className="flex flex-col items-start justify-start">
                    <div>
                      <div
                        className="rounded-none border font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border bg-transparent text-text-secondary text-xs flex flex-row gap-2 items-center p-0.5 justify-start w-fit text-left"
                      >
                        <div
                          className="bg-black/5 flex flex-row gap-2 items-center py-[5px] px-2"
                        >
                          <img
                            src="/assets/check.svg"
                            alt="solution tagline icon"
                            className="size-4"
                          />
                          The Fix
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2
                        className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary mt-3 text-left"
                      >
                        One window. Every agent. Full visibility.
                      </h2>
                    </div>
                    <div>
                      <p
                        className="text-text-secondary text-balance text-base max-w-prose font-light mt-6 text-left"
                      >
                        Run any CLI agent right alongside your dev stack. Solo
                        auto-starts your stack, restarts crashes, and gives your
                        agents visibility into your logs and process state via
                        MCP.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/assets/legend-indicators.webp"
                      alt="Solo process status indicators showing running, stopped, and error states"
                      loading="lazy"
                      className="w-[225px] h-[151px] object-cover"
                    />
                  </div>
                </div>
                <div
                  className="flex-1 max-w-[22.5rem]"
                >
                  <img
                    src="/assets/processes.webp"
                    alt="Solo app window showing agents and processes running"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg border border-border shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
