# My 10x Solution - Mohammed Muzzammil S

## Project: AI Support Triage & Insights

### Problem
Support teams can lose time manually categorising customer issues and identifying urgent requests. Inconsistent triage can delay resolution.

### Solution
A REST API that stores support tickets, categorises messages, tracks priority and status, exposes dashboard metrics, and generates PDF reports. An optional OpenAI-compatible LLM provides classification; a deterministic rule-based fallback keeps the local demo usable without an API key.

### FlyRank concepts implemented
1. **API endpoints:** Express REST routes for authentication, tickets, classification, summaries, jobs and reports.
2. **Database:** SQLite persistence for users, tickets, AI usage and job runs.
3. **Authentication:** bcrypt password hashing and signed JWT bearer tokens.
4. **Background jobs:** scheduled worker runs every five minutes to fill missing ticket summaries and log job results.
5. **Reporting:** on-demand PDF report with ticket totals and category/priority/status breakdown.
6. **Caching:** process-local TTL cache for summary metrics with invalidation after writes.
7. **LLM integration:** optional OpenAI-compatible chat completions, output validation, and estimated token cost tracking.

### Value hypothesis
The target is to reduce triage effort from several minutes of manual sorting per batch to seconds per message. This is a hypothesis, not a measured outcome. Before claiming a 10x improvement, time a comparable batch manually and with the tool, document the sample size, and report the actual result.

### Demo path
Install dependencies, copy .env.example to .env, set a random JWT_SECRET of at least 24 characters, run npm install, npm run seed, and npm start. Use /health, log in through /api/auth/login, then explore tickets, summary metrics, PDF reporting and job history.

### Limitations
The project is a prototype. Tests focus on validation schemas and do not replace integration testing. SQLite is suitable for a small demo rather than high-concurrency production use. LLM cost values are estimates, not billing-grade figures. Demo credentials must never be used in a public deployment.
