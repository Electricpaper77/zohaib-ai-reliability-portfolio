# AgentTrust IQ — AI Reliability & Evaluation Platform

AgentTrust IQ is a **non-production, synthetic AI reliability and evaluation MVP**. It demonstrates authenticated FastAPI/PostgreSQL SaaS workflows, tenant-scoped evaluations, policy decisions, evidence export, and distributed-runtime validation with local containers.

## Current release

- **Published prerelease:** [v1.1.0-rc.1](https://github.com/Electricpaper77/ai-rag-eval-platform/releases/tag/v1.1.0-rc.1)
- **Release source:** [`282501243705111bfff8c1cc07a77bb0aa153beb`](https://github.com/Electricpaper77/ai-rag-eval-platform/tree/282501243705111bfff8c1cc07a77bb0aa153beb)
- **Interactive demo:** [AgentTrust IQ demo](https://ai-agent-reliability-platform-rtcd.vercel.app/)
- **Release verification:** [Gate 25 workflow](https://github.com/Electricpaper77/ai-rag-eval-platform/actions/runs/40171000374)
- **Source repository:** [Electricpaper77/ai-rag-eval-platform](https://github.com/Electricpaper77/ai-rag-eval-platform)

## What is demonstrated

- FastAPI, PostgreSQL, Python, Go, Docker, and GitHub Actions.
- Authenticated organization and project workflows with tenant authorization.
- Synthetic evaluations, persisted results, versioned policy decisions, investigations, review, and JSON/CSV evidence export.
- Distributed-runtime regression validation with local containers, structured logs, bounded failure injection, and recovery evidence.

## Evidence boundary

The release is intended for technical review and local reproduction. Fixture investigation rows are labeled `synthetic_test`; mock evaluation output and GPU telemetry labels are simulated evidence, not provider measurements. Historical AMD/ROCm references describe prior validation scope only. No physical NVIDIA DCGM measurements, production customer access, live billing, managed OIDC, production RPO/RTO, or commercial deployment is claimed.

## Reproduce locally

See the [Gate 25 reproducibility procedure](https://github.com/Electricpaper77/ai-rag-eval-platform/blob/main/docs/GATE25_V1_RELEASE_VERIFICATION.md) for the exact Linux/PowerShell setup, disposable PostgreSQL, Chromium checks, exit-code contract, and sanitized evidence manifest.

The repository's CI and release artifacts are the source of truth for measured results. Older benchmark values are not presented here as current release or production performance.

## Historical context

Historical infrastructure milestones remain documented in the product repository and are not retroactively attributed to v1.1.0-rc.1. The current release is a synthetic, non-production portfolio artifact.
