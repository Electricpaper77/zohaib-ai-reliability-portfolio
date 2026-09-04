# AgentTrust IQ: Enterprise AI Reliability & Evaluation Engine

## Infrastructure Telemetry & Performance Benchmarks
Tested via Locust under concurrent load (45 simulated users, 10 spawn rate):
- **Total Requests Handled:** 3,600+ with **0.00% failure rate**
- **Throughput:** ~125 req/sec
- **p95 Latency:** <10ms (Median: 5ms)

## Tech Stack
- **Backend:** FastAPI (Async ASGI)
- **Containerization:** Docker & Docker Compose
- **Vector Storage:** Qdrant
- **Primary Database:** PostgreSQL (pgvector)
