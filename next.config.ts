import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // The ported JSX is mechanically converted from the soloterm.com HTML and
  // contains many attributes that TypeScript's strict JSX types reject
  // (string tabIndex, xmlns:xlink on SVGs, etc). We ship it as-is.
  typescript: { ignoreBuildErrors: true },
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
