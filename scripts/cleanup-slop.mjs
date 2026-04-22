#!/usr/bin/env node
// Mechanical cleanup pass over components to strip HTML-scrape artifacts.
// - Remove framer-motion final-state inline styles: style={{opacity: "1", transform: "none"}}
//   (and when combined with other props, remove just those keys).
// - Convert stringified numeric/boolean attrs: tabIndex="-1" -> tabIndex={-1}
// - Decode HTML entities that leaked into JSX attribute values:
//     &amp; -> &   &#39; -> '   &gt; -> >   &lt; -> <   &quot; -> "
// - Normalize ids containing spaces: id="tab-team sharing" -> id="tab-team-sharing"
//   (and matching aria-controls / aria-labelledby / htmlFor / controls targets).

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = new URL("../app/components/", import.meta.url).pathname;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (extname(p) === ".tsx") out.push(p);
  }
  return out;
}

const ENTITIES = { "&amp;": "&", "&#39;": "'", "&gt;": ">", "&lt;": "<", "&quot;": '"' };

function decodeEntitiesInAttrs(src) {
  // Decode only inside attribute values: attr="...".
  return src.replace(/=("([^"]*)"|'([^']*)')/g, (_m, _full, dq, sq) => {
    const val = dq ?? sq;
    const decoded = val.replace(/&amp;|&#39;|&gt;|&lt;|&quot;/g, (e) => ENTITIES[e]);
    return dq !== undefined ? `="${decoded}"` : `='${decoded}'`;
  });
}

function stripMotionResidue(src) {
  let out = src;
  // Whole style prop is just opacity:"1", transform:"none" — remove the prop.
  out = out.replace(
    /\s*style=\{\{\s*opacity:\s*"1",\s*transform:\s*"none"\s*\}\}/g,
    "",
  );
  // Same keys nested alongside others — strip just these keys.
  out = out.replace(
    /style=\{\{([^}]*)\}\}/g,
    (m, body) => {
      let b = body
        .replace(/\bopacity:\s*"1"\s*,?\s*/g, "")
        .replace(/\btransform:\s*"none"\s*,?\s*/g, "")
        .replace(/,\s*$/, "")
        .replace(/^\s*,/, "")
        .trim();
      if (!b) return "";
      return `style={{${b}}}`;
    },
  );
  return out;
}

function fixStringifiedNumericAttrs(src) {
  // tabIndex="-1" -> tabIndex={-1}
  return src.replace(
    /\b(tabIndex|rowSpan|colSpan|maxLength|minLength)="(-?\d+)"/g,
    "$1={$2}",
  );
}

function normalizeIdsWithSpaces(src) {
  const mapping = new Map();
  let out = src.replace(/(id|aria-controls|aria-labelledby|htmlFor)="([^"]*\s[^"]*)"/g, (_m, attr, val) => {
    const norm = val.replace(/\s+/g, "-");
    mapping.set(val, norm);
    return `${attr}="${norm}"`;
  });
  return out;
}

const files = walk(ROOT);
let totalChanged = 0;
for (const f of files) {
  const before = readFileSync(f, "utf8");
  let after = before;
  after = stripMotionResidue(after);
  after = fixStringifiedNumericAttrs(after);
  after = decodeEntitiesInAttrs(after);
  after = normalizeIdsWithSpaces(after);
  if (after !== before) {
    writeFileSync(f, after);
    totalChanged++;
    console.log("cleaned", f.replace(ROOT, ""));
  }
}
console.log(`\nupdated ${totalChanged}/${files.length} files`);
