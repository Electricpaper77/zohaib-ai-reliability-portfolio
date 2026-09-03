from locust import HttpUser, task, between
import json
class AgentTrustLoadTest(HttpUser):
    wait_time = between(0.1, 0.5)
    @task(3)
    def test_guardrail_validation(self):
        payload = {"agent_id": "test_agent_01", "prompt": "Evaluate system execution path.", "context": "Standard infrastructure audit."}
        headers = {'Content-Type': 'application/json'}
        self.client.post("/api/v1/evaluate", data=json.dumps(payload), headers=headers)
    @task(1)
    def test_health_check(self):
        self.client.get("/health")
