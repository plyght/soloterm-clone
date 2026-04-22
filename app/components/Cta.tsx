export default function Cta() {
  return (
    <>
      <section id="cta" className="bg-blue-800 relative">
            <img
              src="/assets/cta-pattern.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover z-5 pointer-events-none"
            />
            <div
              className="max-w-5xl mx-auto py-12 lg:py-25 px-0 xs:px-8 lg:px-0 items-center justify-center flex flex-col gap-13 relative z-10"
            >
              <h4
                className="text-[2.5rem] font-medium leading-[1.2] lg:text-6xl text-white text-center"
              >
                Your all-in-one environment for
                <br className="hidden lg:block" /><span className="text-blue-900"
                  >agentic development</span
                >
              </h4>
              <div className="flex flex-row gap-4">
                <a
                  data-slot="button"
                  className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white text-blue-800 border border-btn-primary-border shadow-[inset_0px_-2px_0px_var(--btn-primary-glow),inset_0px_2px_0px_var(--btn-primary-glow)] hover:bg-gray-50 h-10 rounded-none px-4 lg:px-6 has-[>svg]:px-4"
                  href="https://soloterm.com/download"
                >
                  Download free
                  <img
                    src="/assets/download.svg"
                    alt="download"
                    className="size-3"
                /></a>
              </div>
            </div>
          </section>
    </>
  );
}
