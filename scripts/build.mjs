import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

execFileSync("node", ["scripts/qa.mjs"], { stdio: "inherit" });

const root = process.cwd();
const out = path.join(root, "public");

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const entries = [
  "index.html",
  "proof",
  "resume",
  "contact",
  "assets",
  "vercel.json"
];

for (const entry of entries) {
  const src = path.join(root, entry);
  const dest = path.join(out, entry);

  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
  }
}

console.log("Static build complete: public/ created.");
