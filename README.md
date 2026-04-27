# Playwright + TypeScript E2E Framework

A production-ready starter repository for end-to-end UI test automation with Playwright and TypeScript.

## Why this repo

- Modern Playwright test architecture with fixtures + page objects
- Sensible defaults for retries, reports, screenshots, and traces
- Onboarding-first documentation to help new contributors start quickly

## Quick start

```bash
git clone <your-fork-or-repo-url>
cd playwright-typescript
npm ci
npx playwright install --with-deps
cp .env.example .env
npm run lint
npm test
```

## Available scripts

- `npm test` - run full suite
- `npm run test:headed` - run with browser UI
- `npm run test:debug` - open Playwright Inspector
- `npm run test:ui` - Playwright UI mode
- `npm run test:smoke` - run `@smoke` tests
- `npm run test:list` - list discovered tests
- `npm run test:report` - open HTML report
- `npm run lint` - TypeScript static checks
- `npm run format` - format source files
- `npm run format:check` - check formatting

## Project structure

```text
feature/                # Test specs
helper/                 # Playwright fixture extensions
page/                   # Page object models
playwright.config.ts    # Test runner configuration
ONBOARDING.md           # New contributor guide
```

## Configuration

Runtime config is handled in `playwright.config.ts`.

Environment variables:

- `BASE_URL` (default: `https://www.flipkart.com`)

## Onboarding

Read the full onboarding guide here: [ONBOARDING.md](./ONBOARDING.md)

## Artifacts

After execution, Playwright artifacts are available in:

- `playwright-report/`
- `test-results/`

