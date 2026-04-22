import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "The workspace for your agents and dev stack - Solo",
  description:
    "Run Claude Code, Codex, and Gemini CLI alongside your dev server, queue workers, and shell sessions. Built-in terminals, auto-restart, shell integration, and MCP tools in a 25MB native app.",
  openGraph: {
    type: "website",
    siteName: "Solo",
    title: "Solo — The workspace for your agents and dev stack",
    description:
      "Run AI coding agents alongside your dev server and queue workers. Visual dashboard, auto-restart, MCP integration. 25MB, not another IDE.",
    url: "https://soloterm.com",
    images: ["https://soloterm.com/brand/og-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo — The workspace for your agents and dev stack",
    description:
      "Run AI coding agents alongside your dev server and queue workers. Visual dashboard, auto-restart, MCP integration. 25MB, not another IDE.",
    images: ["https://soloterm.com/brand/og-v2.png"],
  },
  icons: {
    icon: [
      { url: "https://soloterm.com/favicon.ico", sizes: "any" },
      { url: "https://soloterm.com/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/fonts.css" />
      </head>
      <body className="font-sans antialiased">
        <div id="app">
          <div className="min-h-svh isolate flex grow flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
