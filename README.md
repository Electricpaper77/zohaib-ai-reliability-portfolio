# Zohaib Ahmed AI Solutions Engineer Portfolio Hub

Recruiter-facing hiring proof dashboard for Zohaib Ahmed. The site is designed to position Zohaib for AI Solutions Engineer, LLM Evaluation, Applied GenAI, Forward Deployed AI, RAG Reliability, and AI Reliability roles.

This is intentionally not a generic personal website. It is a fast static portfolio hub that prioritizes proof artifacts, project links, role fit, demo/test metrics, limitations, and resume/contact paths.

## Target Roles

- AI Solutions Engineer
- LLM Evaluation Engineer
- Applied GenAI Engineer
- RAG Reliability Engineer
- AI Guardrails / AI Reliability
- Forward Deployed AI Engineer

## Featured Projects

- [AgentTrust IQ](https://ai-agent-reliability-platform-rtcd.vercel.app/)  
  LLM evaluation and AI reliability platform for RAG/agent workflows. Proof points include citation checks, hallucination-risk scoring, PII redaction, prompt-injection defense, JSONL audit logs, regression gates, and release/block/escalate logic.

- [AgentComply AI](https://agentcomply-ai.vercel.app/)  
  Synthetic audit-evidence prototype for regulated AI-agent support workflows. Proof points include synthetic reviewed actions, policy match, risk score, approval state, reason code, and allow/flag/escalate/block decisions.

- [DeenAI](https://deenai-citation-ai.vercel.app/)  
  Citation-gated safety architecture prototype for high-risk answer domains. Proof points include fixture-only architecture, source registry validation, claim-to-citation checks, render-blocking safety logic, and no unsupported live religious rulings.

## Metric Scope

All metrics are portfolio/demo/test artifacts unless explicitly marked as production customer data. This site does not claim fake customers, fake employers, fake testimonials, fake certifications, or fake production usage.

## Tech Stack

- Static HTML
- CSS
- Small vanilla JavaScript navigation helper
- Zero runtime dependencies
- Vercel-ready static deployment

## Project Structure

```text
.
├── assets/
│   ├── site.js
│   ├── styles.css
│   └── zohaib-ahmed-ai-solutions-engineer-resume.txt
├── contact/
│   └── index.html
├── portfolio/
│   └── index.html
├── proof/
│   └── index.html
├── resume/
│   └── index.html
├── scripts/
│   ├── qa.mjs
│   └── serve.mjs
├── index.html
├── package.json
├── vercel.json
└── README.md
```

## Local Run

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4173/
```

Optional static checks:

```bash
npm run qa
```

## Deployment

This project is ready for Vercel as a static site.

```bash
npm run build
npx vercel --prod
```

Recommended Vercel settings:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `.`
- Install Command: leave default or blank

The `vercel.json` file enables clean URLs and redirects `/portfolio` and `/portfolio/` to `/`.
