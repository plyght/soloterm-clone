export default function Pricing() {
  return (
    <>
      <section id="pricing" className="container">
            <div className="relative border-x border-border flex flex-row">
              <div
                className="flex border-x border-border bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/56 w-4 lg:w-16 h-auto self-stretch shrink-0 border-l-0"
              ></div>
              <div className="flex-1 py-18 lg:py-20 px-2 xs:px-8">
                <div className="flex flex-col gap-15">
                  <div
                    className="[--pricing-section-content-width:31.25rem] max-w-(--pricing-section-content-width) lg:max-w-none xs:px-5 lg:px-20 mx-auto flex flex-col gap-15"
                  >
                    <div
                      className="flex flex-col items-center justify-center w-full [--pricing-text-content-width:40.75rem] max-w-(--pricing-text-content-width) mx-auto"
                    >
                      <div>
                        <h2
                          className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary text-center mt-3"
                        >
                          Four projects free. Forever.
                        </h2>
                      </div>
                      <div>
                        <p
                          className="text-text-secondary text-center text-balance text-base max-w-prose font-light mt-6"
                        >
                          Every feature included in Free. Most developers never
                          need Pro—upgrade only when you need more than 4
                          projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                    <div className="h-full">
                      <div
                        className="border border-border p-8 flex flex-col h-full !bg-white lg:first:border-l-0"
                      >
                        <span className="text-xl font-medium mb-3 text-text-primary"
                          >Free</span
                        ><span
                          className="text-base font-light mb-8 text-text-secondary"
                          >Full-featured. No trial. Never expires.</span
                        ><span
                          className="text-5xl lg:text-6xl font-medium text-text-primary"
                          >$0<span
                            className="text-base font-light text-text-primary"
                            >forever</span
                          ></span
                        >
                        <div className="flex flex-col gap-4 mt-5 mb-7">
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-surface-light"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span
                              className="text-base font-light text-text-secondary"
                              >Up to 4 projects</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-surface-light"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span
                              className="text-base font-light text-text-secondary"
                              >Up to 20 processes total</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-surface-light"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span
                              className="text-base font-light text-text-secondary"
                              >All features included</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-surface-light"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span
                              className="text-base font-light text-text-secondary"
                              >MCP integration for AI agents</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-surface-light"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span
                              className="text-base font-light text-text-secondary"
                              >Native notifications</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-surface-light"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span
                              className="text-base font-light text-text-secondary"
                              >All future updates</span
                            >
                          </div>
                        </div>
                        <a
                          data-slot="button"
                          className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-surface-muted border border-border text-text-primary hover:brightness-95 h-10 rounded-none px-4 lg:px-6 has-[>svg]:px-4 mt-auto text-base font-medium"
                          href="https://soloterm.com/download"
                          >Get started free</a
                        ><span
                          className="text-base text-text-secondary font-light mt-3 lg:invisible"
                          >&nbsp;</span
                        >
                      </div>
                    </div>
                    <div className="h-full">
                      <div
                        className="border border-border p-8 flex flex-col h-full bg-text-primary lg:first:border-l-0"
                      >
                        <span className="text-xl font-medium mb-3 text-white"
                          >Pro</span
                        ><span className="text-base font-light mb-8 text-white/60"
                          >Unlimited projects. Unlimited processes.</span
                        ><span
                          className="text-5xl lg:text-6xl font-medium text-white"
                          >$99/<span className="text-base font-light text-white"
                            >first year</span
                          ></span
                        >
                        <p className="text-sm mt-2 text-white/60">then $69/year</p>
                        <div className="flex flex-col gap-4 mt-5 mb-7">
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-white"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span className="text-base font-light text-white"
                              >Everything in Free</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-white"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span className="text-base font-light text-white"
                              >Unlimited projects</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-white"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span className="text-base font-light text-white"
                              >Unlimited processes</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-white"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span className="text-base font-light text-white"
                              >Priority email support</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-white"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span className="text-base font-light text-white"
                              >Activate on 3 devices</span
                            >
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-none border border-border flex items-center justify-center bg-white"
                            >
                              <img
                                src="/assets/check-plain.svg"
                                alt="check"
                                className="size-3 text-black"
                              />
                            </div>
                            <span className="text-base font-light text-white"
                              >All future updates</span
                            >
                          </div>
                        </div>
                        <a
                          data-slot="button"
                          className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white text-text-primary border border-border hover:opacity-90 h-10 rounded-none px-4 lg:px-6 has-[>svg]:px-4 mt-auto text-base font-medium"
                          href="https://soloterm.com/checkout"
                          >Get pro license</a
                        ><span
                          className="text-base text-text-secondary font-light mt-3"
                          >30-day money-back guarantee. Cancel anytime.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex border-x border-border bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/56 w-4 lg:w-16 h-auto self-stretch shrink-0 border-r-0"
              ></div>
            </div>
          </section>
    </>
  );
}
