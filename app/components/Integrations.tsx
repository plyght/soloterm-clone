type Logo = { src: string; alt: string; width: number; marginTop: number };

type Row = {
  label: React.ReactNode;
  reverse: boolean;
  marqueeWidth: string;
  logos: Logo[];
};

const AGENTS: Logo[] = [
  { src: "/assets/claude-code.svg", alt: "Claude Code", width: 87, marginTop: 0 },
  { src: "/assets/codex.svg", alt: "OpenAI Codex", width: 80, marginTop: 3 },
  { src: "/assets/gemini.svg", alt: "Gemini CLI", width: 92, marginTop: -2 },
  { src: "/assets/amp.svg", alt: "Amp", width: 49, marginTop: 2 },
  { src: "/assets/aider.svg", alt: "Aider", width: 79, marginTop: 0 },
  { src: "/assets/goose.svg", alt: "Goose", width: 84, marginTop: 5 },
];

const STACKS: Logo[] = [
  { src: "/assets/laravel.svg", alt: "Laravel", width: 94, marginTop: -5 },
  { src: "/assets/nodejs.svg", alt: "Node.js", width: 108, marginTop: -8 },
  { src: "/assets/nextjs.svg", alt: "Next.js", width: 105, marginTop: -4 },
  { src: "/assets/nuxt.svg", alt: "Nuxt", width: 115, marginTop: -10 },
  { src: "/assets/rust.svg", alt: "Rust", width: 102, marginTop: -2 },
  { src: "/assets/django.svg", alt: "Django", width: 80, marginTop: 3 },
  { src: "/assets/ruby.png", alt: "Ruby", width: 105, marginTop: -3 },
  { src: "/assets/go.svg", alt: "Go", width: 58, marginTop: -5 },
  { src: "/assets/dotnet.svg", alt: ".NET", width: 56, marginTop: -4 },
  { src: "/assets/elixir.svg", alt: "Elixir", width: 108, marginTop: -2 },
  { src: "/assets/svelte.svg", alt: "Svelte", width: 127, marginTop: 1 },
  { src: "/assets/spring.svg", alt: "Spring", width: 95, marginTop: 3 },
  { src: "/assets/remix.svg", alt: "Remix", width: 80, marginTop: -1 },
  { src: "/assets/astro.svg", alt: "Astro", width: 120, marginTop: 3 },
  { src: "/assets/fastapi.svg", alt: "FastAPI", width: 114, marginTop: -1 },
  { src: "/assets/flask.svg", alt: "Flask", width: 97, marginTop: 7 },
];

// The CSS-driven marquee relies on the track being at least 2x the container
// width. The source site duplicates the logo set 4 times; we keep that.
const MARQUEE_COPIES = 4;

const ROWS: Row[] = [
  {
    label: "Run any CLI agent",
    reverse: true,
    marqueeWidth: "-759px",
    logos: AGENTS,
  },
  {
    label: (
      <>
        Works with any stack
        <br className="hidden lg:block" /> Auto-detects processes for:
      </>
    ),
    reverse: false,
    marqueeWidth: "-2332px",
    logos: STACKS,
  },
];

function LogoImg({ logo }: { logo: Logo }) {
  return (
    <div className="flex items-center justify-center px-6">
      <img
        src={logo.src}
        alt={logo.alt}
        style={{ width: `${logo.width}px`, marginTop: `${logo.marginTop}px` }}
      />
    </div>
  );
}

function MarqueeRow({ row, isLast }: { row: Row; isLast: boolean }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center border border-border ${isLast ? "" : "border-b-0"}`}
    >
      <div className="shrink-0 px-6 lg:pl-20 lg:pr-10 py-3 bg-[#F9F9F8] border-b lg:border-b-0 lg:border-r border-border w-full lg:w-[280px] text-center lg:text-left">
        <span className="text-[#78716B] text-sm text-balance">{row.label}</span>
      </div>
      <div className="marquee-container overflow-hidden py-2 flex-1 w-full">
        <div
          className={`marquee-track flex ${row.reverse ? "marquee-track--reverse" : ""}`}
          style={{ ["--marqueeWidth" as string]: row.marqueeWidth }}
        >
          {Array.from({ length: MARQUEE_COPIES }).map((_, copyIdx) => (
            <div key={copyIdx} className="marquee-content flex shrink-0">
              {row.logos.map((logo) => (
                <LogoImg key={`${copyIdx}-${logo.alt}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="container">
      {ROWS.map((row, i) => (
        <MarqueeRow key={i} row={row} isLast={i === ROWS.length - 1} />
      ))}
    </section>
  );
}
