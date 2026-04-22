"use client";
import LottiePlayer from "./LottiePlayer";

export default function QualityOfLife() {
  return (
    <>
      <section id="quality-of-life" className="bg-surface-light">
            <div className="container">
              <div className="py-18 lg:py-20 xs:border-x xs:border-border w-full">
                <div
                  className="[--quality-of-life-section-content-width:31.25rem] max-w-(--quality-of-life-section-content-width) lg:max-w-none w-full mx-auto flex xs:px-5 lg:px-13 flex-col gap-15 items-center justify-center"
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
                          Quality of Life
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2
                        className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary text-center"
                      >
                        Small things that add up
                      </h2>
                    </div>
                    <div>
                      <p
                        className="text-text-secondary text-center text-balance text-base max-w-prose font-light mt-6"
                      >
                        Details you'll appreciate every day. Polish that shows
                        someone actually uses this.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="grid lg:grid-cols-3 grid-cols-1 w-full overflow-hidden"
                    >
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border border-b-0 lg:border-r-0 p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/1.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              MCP integrations
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              Solo exposes your processes, logs, and project
                              state to AI agents via MCP. Let Claude or other AI
                              tools help debug and manage your stack.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border border-b-0 lg:border-r-0 p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/2.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              Open in your editor
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              Set your default editor and open any project
                              directly. One click to VS Code, Zed — whatever you
                              use.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border lg:border-b-0 p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/6.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              Lightweight & fast
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              Built with Tauri, not Electron. Around 25MB
                              download. Uses less RAM than a single Chrome tab.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="grid lg:grid-cols-4 grid-cols-1 w-full overflow-hidden"
                    >
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border border-b-0 lg:border-b lg:border-r-0 p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/5.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              Security first
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              If your solo.yml changes after a git pull, Solo
                              asks you to confirm before running anything. No
                              surprises.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border border-b-0 lg:border-b lg:border-r-0 p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/3.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              Themes
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              Light mode and dark mode included. Your terminal
                              workspace doesn't have to clash with your setup.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border lg:border-r-0 p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/4.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              Raycast extension
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              Launch projects, start processes, and manage your
                              stack from Raycast. (Pending Raycast Store
                              approval.)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-span-1 h-full"
                        style={{transform: "translateY(0px)"}}
                      >
                        <div
                          className="bg-white border border-border border-t-0 lg:border-t p-5 flex flex-col h-full"
                        >
                          <div
                            className="flex items-center justify-center h-[180px]"
                          >
                            <div
                              className="lottie-animation-container"
                              aria-hidden="true"
                              style={{"--lottieAnimationContainerWidth": "100%", "--lottieAnimationContainerHeight": "180px", "--lottieAnimationContainerBackgroundColor": "transparent", "--lottieAnimationMargin": "0 auto"}}
                            >
                              <LottiePlayer src="/lottie/7.json" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mt-4 w-full">
                            <h3 className="text-base font-medium text-text-primary">
                              Mac, Windows & Linux
                            </h3>
                            <p className="text-base font-light text-text-secondary">
                              Solo works wherever you work. Mac available now,
                              Windows and Linux coming soon.
                            </p>
                          </div>
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
