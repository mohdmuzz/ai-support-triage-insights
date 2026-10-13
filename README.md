# AI Support Triage & Insights

A FlyRank Backend AI Engineering capstone: a small backend that classifies customer messages, tracks tickets, and reports trends.

## Concepts implemented
- REST API endpoints (Express)
- SQLite database and persistence
- JWT authentication and bcrypt password hashing
- Scheduled background job (every 5 minutes)
- PDF reporting
- TTL caching with write invalidation
- Optional OpenAI-compatible LLM classification with a rule-based fallback

## Requirements
- Node.js 20+
- npm

## Run locally
```bash
cp .env.example .env
# Set JWT_SECRET in .env to a random string at least 24 characters long
npm install
npm run seed
npm start
```
On Windows PowerShell: `Copy-Item .env.example .env`

API base URL: `http://localhost:3000`; health check: `/health`.

## Demo login
- Email: `demo@example.com`
- Password: `DemoPass123!`

For local demonstration only. Do not deploy with demo credentials; remove the demo account or change its password first.

## API
All `/api/*` routes require `Authorization: Bearer <token>` except register and login.
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Health check |
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Obtain JWT |
| GET | `/api/me` | Current user |
| POST | `/api/tickets` | Create and classify ticket |
| GET | `/api/tickets` | List own tickets; optional `?status=open` |
| GET | `/api/tickets/:id` | Read own ticket |
| PATCH | `/api/tickets/:id` | Update status/priority |
| POST | `/api/classify` | Classify without saving ticket |
| GET | `/api/summary` | Cached ticket metrics and AI usage |
| GET | `/api/reports/tickets.pdf` | Download PDF report |
| GET | `/api/jobs` | Recent background-job runs |

## LLM configuration
Set `LLM_API_KEY` in `.env` to use an OpenAI-compatible chat-completions endpoint. Optional `LLM_BASE_URL` and `LLM_MODEL` configure provider/model. With no key, a deterministic rule-based fallback keeps the demo free; do not describe fallback results as LLM-generated.

## Tests
```bash
npm test
```
The included tests cover validation schemas, not full integration or live-provider behavior.

## Limitations and security
Never commit `.env`, API keys, JWT secrets, or real customer data. SQLite is for a small demo, not a high-concurrency production service. LLM cost numbers are estimates, not billing-grade accounting. This is a portfolio prototype, not a certified production service.

## Project structure
`src/app.js` routes; `src/auth.js` JWT middleware; `src/cache.js` TTL cache; `src/classifier.js` LLM/fallback; `src/db.js` schema; `src/report.js` PDF; `src/server.js` startup; `src/validation.js` Zod schemas; `src/worker.js` scheduled job; `scripts/seed.js` demo data; `test/` validation tests.

**10x claim to validate:** aim to reduce manual triage time from several minutes per batch to seconds per message. This is a target, not a measured result; measure before/after before presenting it as a fact.
