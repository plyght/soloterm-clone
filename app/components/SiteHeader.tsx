"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#pricing", label: "Pricing" },
  { href: "https://soloterm.com/login", label: "Login" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed flex items-center inset-0 z-50 border-b border-border h-(--navbar-height) bg-white">
        <nav className="container flex items-center">
          <div className="flex-1 flex items-center">
            <a href="/">
              <img
                src="/assets/logo.svg"
                alt="Solo"
                width="70"
                height="28"
              />
            </a>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-10 flex-row">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="font-light transition-colors hover:text-blue-500 text-sm text-gray-600"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center flex-row gap-3 lg:gap-0 justify-end">
            <a
              data-slot="button"
              className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-btn-primary-bg text-white border border-btn-primary-border shadow-[inset_0px_-2px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.25)] hover:brightness-110 h-10 rounded-none px-4 lg:px-6 has-[>svg]:px-4"
              href="https://soloterm.com/download"
            >
              Download free
              <img
                src="/assets/download-white.svg"
                alt="download"
                className="size-3"
              />
            </a>
            <button
              type="button"
              data-slot="button"
              className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-btn-primary-bg text-white border border-btn-primary-border shadow-[inset_0px_-2px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.25)] hover:brightness-110 h-10 rounded-none px-4 lg:px-6 has-[>svg]:px-4 lg:hidden relative z-50"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="0" y="0" width="18" height="2" rx="1" fill="white" className="menu-line" />
                <rect x="0" y="6" width="18" height="2" rx="1" fill="white" className="menu-line" />
                <rect x="0" y="12" width="18" height="2" rx="1" fill="white" className="menu-line" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-(--navbar-height) z-40 bg-white border-b border-border lg:hidden"
        >
          <ul className="container flex flex-col py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="font-light transition-colors hover:text-blue-500 text-base text-gray-700"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
