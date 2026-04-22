export default function Faq() {
  return (
    <>
      <section id="faq" className="container">
            <div
              className="xs:border xs:border-b-0 xs:border-border relative flex flex-row"
            >
              <div
                className="border-x border-border bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/56 hidden xs:block w-4 lg:w-16 h-auto self-stretch shrink-0 border-l-0"
              ></div>
              <div
                className="flex-1 my-18 lg:my-20 w-full mx-auto flex flex-col gap-15 items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <div>
                    <h2
                      className="text-[2rem] lg:text-5xl font-medium leading-[1.1] text-text-primary text-center"
                    >
                      Frequently asked questions
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-7 w-full">
                  <div
                    className="w-full flex flex-col lg:flex-row border-y border-border"
                  >
                    <div className="flex-1 flex flex-col lg:border-r border-border">
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          How is this different from Warp?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Warp is a terminal replacement with a built-in
                            agent. Solo is a native terminal workspace for
                            agents, project commands, and shell sessions. No
                            built-in editor, no lock-in. You can keep your
                            current terminal if you want, but Solo also gives
                            you built-in terminals and shell integration. Read
                            the full
                            <a
                              href="https://soloterm.com/solo-vs-warp"
                              className="underline"
                              >Solo vs Warp comparison</a
                            >.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Does Solo use my agent API keys?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >No. Solo just runs your local CLI tools and lets
                            you interact with them. However you have your agents
                            set up on your machine is exactly how they'll work
                            inside Solo. Your keys, your config, your auth.
                            Because Solo never touches your API keys or agent
                            accounts, there's no risk of getting flagged or
                            banned by any provider.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          What platforms are supported?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Mac now, Windows and Linux coming soon. Solo is a
                            Tauri app. Small, fast, and uses your system's
                            native webview. See the
                            <a
                              href="https://soloterm.com/download"
                              className="underline"
                              >download page</a
                            >
                            for the latest platform availability.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          What happens when I close Solo?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >All processes stop — agents, project commands, and
                            shell sessions alike. Solo is running the workflows
                            in that window. When you're done working, close it
                            and everything shuts down cleanly. No orphaned
                            processes running in the background.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Can I share configs with my team?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Yes. Commit your solo.yml to your repo and everyone
                            on the team can spin up the same stack.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Can I move a process between local and shared?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Yes. If you create a process locally and want to
                            add it to your solo.yml, that's one click. Same if
                            you want to take a shared process and make it
                            local.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Is there a free trial?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >The free tier is the trial, except it never
                            expires. You get 4 projects and up to 20 processes
                            total. Use it as long as you want.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Why pay when free tools exist?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Because Solo is a joy to use. No config files to
                            maintain, no manual restarts, no juggling terminal
                            tabs. MCP integration so your agents can see your
                            logs, desktop notifications when things crash, and a
                            UI that actually looks good. Free tools work. Solo
                            delights.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Can I use my license on multiple machines?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span>Yes, up to three machines per license.</span>
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Does Solo collect any data or phone home?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >We use Aptabase for privacy-first analytics. Basic
                            usage stats only. We never send project names,
                            process names, or anything about your code. Solo
                            also checks license data to validate paid accounts.
                            That's it.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Who made this?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            ><a
                              href="https://aaronfrancis.com/"
                              target="_blank"
                              className="underline"
                              >Aaron Francis</a
                            >, creator of
                            <a
                              href="https://faster.dev/"
                              target="_blank"
                              className="underline"
                              >faster.dev</a
                            >. I built it because I was running Claude Code
                            alongside my dev stack and juggling nine terminal
                            tabs. Now I don't have to.</span
                          >
                        </div>
                      </article>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Can Solo run Claude Code / Codex / Gemini CLI?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Yes, any CLI agent that runs in a terminal runs in
                            Solo. All the CLIs that exist today and the ones
                            that will undoubtedly come out in the coming months,
                            you can run inside of Solo from day one. No updating
                            required.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Does Solo replace Docker?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >No. Solo manages processes, not containers. If your
                            workflow uses Docker, Solo runs alongside it. Add
                            docker compose up as a process and Solo monitors it
                            like anything else.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          What if Solo crashes?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Solo tracks PIDs of all running processes. On
                            restart, it detects orphaned processes and shows a
                            dialog to kill or reattach them. No zombie processes
                            eating resources in the background.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          How does the security/trust system work?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Solo never auto-runs something you didn't add
                            yourself. If your solo.yml changes (like after a git
                            pull), Solo asks you to confirm before running
                            anything. No surprises.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Can I keep some processes to myself?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Yes. You can define local processes that don't get
                            committed to the repo. Your personal stuff stays
                            personal.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          How do updates work?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Updates are free forever. The only restriction on
                            the free tier is the number of projects and
                            processes you can have, not whether you get updates.
                            You can also follow the
                            <a
                              href="https://soloterm.com/changelog"
                              className="underline"
                              >changelog</a
                            >.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          What are the limits?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Free tier: 4 projects, up to 20 processes total.
                            Pro: unlimited projects and processes.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Does it work offline?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Yes. Solo validates your license once then caches
                            it locally. You get a 14-day offline grace period
                            before it needs to check in again. Your configs are
                            plain text solo.yml files, portable and readable by
                            anything.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Is there a dark mode?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Yes. Light mode and dark mode, plus a system option
                            that follows your OS preference.</span
                          >
                        </div>
                      </article>
                      <article
                        className="border-border border-b lg:last:border-b-0 p-4"
                      >
                        <h3 className="text-lg font-medium text-foreground">
                          Is this a fork of VS Code?
                        </h3>
                        <div
                          className="mt-3 text-base leading-7 text-text-secondary"
                        >
                          <span
                            >Haha, no. Solo is a native Tauri app — 25MB, no
                            Electron, no bundled Chromium running a text editor.
                            It uses your system's native WebKit and does one
                            thing well: run your agents, project commands, and
                            terminal sessions from a single window.</span
                          >
                        </div>
                      </article>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center justify-between w-full bg-surface-light border-y border-border py-8 px-4"
                  >
                    <h3
                      className="text-3xl text-left font-medium flex-1 leading-[1.1] text-text-primary"
                    >
                      How do I get support?
                    </h3>
                    <p
                      className="text-base text-text-secondary text-left flex-1 lg:text-right"
                    >
                      Email
                      <a
                        href="mailto:hello@soloterm.com"
                        className="text-blue-800 cursor-pointer underline"
                        >hello@soloterm.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border-x border-border bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/56 hidden xs:block w-4 lg:w-16 h-auto self-stretch shrink-0 border-r-0"
              ></div>
            </div>
          </section>
    </>
  );
}
