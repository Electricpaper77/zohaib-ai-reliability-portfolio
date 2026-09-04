from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"

def test_evaluate_endpoint():
    payload = {
        "agent_id": "agent-007",
        "prompt": "Test evaluation guardrail pipeline",
        "context": "unit testing context"
    }
    response = client.post("/api/v1/evaluate", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"
    assert data["guardrail_passed"] is True
