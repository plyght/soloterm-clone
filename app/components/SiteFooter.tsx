export default function SiteFooter() {
  return (
    <>
      <footer id="footer" className="container overflow-hidden">
          <div className="border border-b-0 border-border relative flex flex-row">
            <div
              className="flex border-x border-border bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/56 w-4 lg:w-20 h-auto self-stretch shrink-0 border-l-0"
            ></div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-col gap-10 px-4 xs:px-8 my-10 lg:my-15">
                <div
                  className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_180px_180px] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_220px_220px]"
                >
                  <div className="flex flex-col gap-5 max-w-md">
                    <a href="https://soloterm.com/"
                      ><img
                        src="/assets/logo.svg"
                        alt="Solo"
                        width="70"
                        height="28"
                        className="w-[70px] h-[28px]"
                    /></a>
                    <p className="text-sm text-text-secondary">
                      Solo is a lightweight terminal workspace for agents,
                      project commands, and shell sessions. Define your
                      processes once, run everything in one place, get
                      auto-restarts and crash alerts, and expose MCP tools so
                      your agents can see your stack.
                    </p>
                    <p className="text-sm text-text-secondary">
                      Built by
                      <a
                        href="https://aaronfrancis.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-800 transition-colors"
                        >Aaron Francis</a
                      >, dad to two sets of twins, creator of
                      <a
                        href="https://faster.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-800 transition-colors"
                        >faster.dev</a
                      >, and creator of
                      <a
                        href="https://www.databaseschool.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-800 transition-colors"
                        >Database School</a
                      >. He built Solo after running Claude Code alongside his
                      dev stack and juggling nine terminal tabs.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 lg:min-w-0">
                    <h5 className="text-lg font-medium text-text-primary">Links</h5>
                    <div className="flex flex-col gap-2">
                      <a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/#features"
                        >Features</a
                      ><a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/#workflow"
                        >Workflow</a
                      ><a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/#pricing"
                        >Pricing</a
                      ><a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/login"
                        >Login</a
                      ><a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/changelog"
                        >Changelog</a
                      >
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 lg:min-w-0">
                    <h5 className="text-lg font-medium text-text-primary">Legal</h5>
                    <div className="flex flex-col gap-2">
                      <a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/privacy-policy"
                        >Privacy Policy</a
                      ><a
                        className="text-sm text-text-secondary hover:text-blue-800 transition-colors"
                        href="https://soloterm.com/terms-of-service"
                        >Terms of Service</a
                      >
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-8">
                  <div
                    className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_180px_180px] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_220px_220px]"
                  >
                    <div className="flex max-w-lg flex-col gap-4">
                      <h5 className="text-lg font-medium text-text-primary">
                        Compare
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Solo does not try to become another editor or agent
                        orchestrator. These pages show where Solo fits best: as
                        the local workspace around the tools you already use.
                      </p>
                    </div>
                    <div className="flex min-w-0 flex-col gap-3">
                      <h6
                        className="text-lg font-medium leading-tight text-text-primary"
                      >
                        Comparisons
                      </h6>
                      <div className="flex flex-col gap-2">
                        <a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/compare"
                          >All comparisons</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/solo-vs-cursor"
                          >Solo vs Cursor</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/solo-vs-windsurf"
                          >Solo vs Windsurf</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/solo-vs-warp"
                          >Solo vs Warp</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/solo-vs-zed"
                          >Solo vs Zed</a
                        >
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-col gap-3">
                      <h6
                        className="text-lg font-medium leading-tight text-text-primary"
                      >
                        Alternatives
                      </h6>
                      <div className="flex flex-col gap-2">
                        <a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/compare#alternatives"
                          >All alternatives</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/alternatives/cursor"
                          >Cursor Alternative</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/alternatives/warp"
                          >Warp Alternative</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/alternatives/vscode"
                          >VS Code Alternative</a
                        ><a
                          className="text-sm leading-snug text-text-secondary hover:text-blue-800 transition-colors"
                          href="https://soloterm.com/alternatives/claude-code"
                          >Claude Code Alternative</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mb-8 border-y border-border px-4 py-6 text-center xs:px-8"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-text-secondary"
                    >Solo © 2026
                    <a
                      href="https://tryhardstudios.com/"
                      target="_blank"
                      className="underline hover:text-blue-800 transition-colors"
                      >Try Hard Studios, LLC</a
                    ></span
                  ><span className="text-sm text-text-secondary"
                    >Website designed by
                    <a
                      href="https://www.quick14studio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-800 transition-colors"
                      >Quick14</a
                    ></span
                  >
                </div>
              </div>
              <img
                src="/assets/footer.webp"
                alt="Solo terminal workspace preview"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div
              className="flex border-x border-border bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/56 w-4 lg:w-20 h-auto self-stretch shrink-0 border-r-0"
            ></div>
          </div>
        </footer>
    </>
  );
}
