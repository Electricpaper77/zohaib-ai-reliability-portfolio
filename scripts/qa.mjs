import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "index.html",
  "proof/index.html",
  "resume/index.html",
  "contact/index.html",
  "portfolio/index.html",
  "assets/styles.css",
  "assets/site.js",
  "assets/zohaib-ahmed-ai-solutions-engineer-resume.txt",
  "README.md",
  "vercel.json"
];

const requiredCopy = [
  "AI Solutions Engineer / LLM Evaluation / Applied GenAI",
  "High-Stakes Workflow Fit",
  "Responsible AI / Regulated Workflow Relevance",
  "Metric Scope: All metrics are portfolio/demo/test artifacts unless explicitly marked as production customer data.",
  "No fake customers",
  "placeholder@example.com",
  "LinkedIn placeholder",
  "https://github.com/Electricpaper77"
];

const forbiddenPatterns = [
  /fortune\s*500/i,
  /production customer (users|usage|benchmarks)/i,
  /real customer data/i,
  /BlackRock/i,
  /Aladdin/i,
  /investment systems/i,
  /production financial platform/i,
  /real users/i,
  /trusted by/i,
  /certified/i,
  /worked at\s+openai/i,
  /worked at\s+anthropic/i,
  /worked at\s+google/i,
  /worked at\s+microsoft/i
];

const htmlFiles = [
  "index.html",
  "proof/index.html",
  "resume/index.html",
  "contact/index.html"
];

const missingFiles = requiredFiles.filter((file) => !existsSync(file));
if (missingFiles.length) {
  throw new Error(`Missing required files: ${missingFiles.join(", ")}`);
}

const siteText = htmlFiles.map((file) => readFileSync(file, "utf8")).join("\n");
const missingCopy = requiredCopy.filter((text) => !siteText.includes(text));
if (missingCopy.length) {
  throw new Error(`Missing required copy: ${missingCopy.join(" | ")}`);
}

const forbiddenMatches = forbiddenPatterns.filter((pattern) => pattern.test(siteText));
if (forbiddenMatches.length) {
  throw new Error(`Potential hallucination-risk copy found: ${forbiddenMatches.map(String).join(", ")}`);
}

console.log("Static QA passed: required files, required copy, and hallucination-risk copy checks are clean.");
