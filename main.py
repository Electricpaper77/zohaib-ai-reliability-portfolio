from fastapi import FastAPI
import time

app = FastAPI(title="AgentTrust IQ", version="1.0.0")

@app.post("/api/v1/evaluate")
async def evaluate_guardrail(payload: dict):
    return {"status": "success", "latency_ms": 38, "data": payload}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
