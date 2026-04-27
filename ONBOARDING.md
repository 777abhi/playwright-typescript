# Onboarding Guide

Welcome! This guide helps you get productive with the Playwright framework in less than 30 minutes.

## 1) Prerequisites

- Node.js 20+
- npm 10+
- Git

Optional but recommended:
- VS Code with the Playwright extension

## 2) Clone and install

```bash
git clone <your-fork-or-repo-url>
cd playwright-typescript
npm ci
npx playwright install --with-deps
```

## 3) Configure environment

Copy the sample env file and customize values if needed:

```bash
cp .env.example .env
```

Current supported variables:

- `BASE_URL`: target application base URL (default: `https://www.flipkart.com`)

## 4) Run checks and tests

```bash
npm run lint
npm run test:list
npm test
```

Helpful alternatives:

- `npm run test:headed` for headed mode
- `npm run test:debug` for step-through debugging
- `npm run test:ui` for Playwright UI mode
- `npm run test:smoke` to run smoke-tagged tests only

## 5) Understand the project layout

- `feature/` - test specs
- `page/` - page objects
- `helper/` - shared fixtures and test setup
- `playwright.config.ts` - runtime config, retries, reporters, artifacts

## 6) Author your first test

1. Add or update page-object methods in `page/`.
2. Create a new spec in `feature/`.
3. Tag critical tests with `@smoke`.
4. Run `npm run lint && npm test`.

## 7) CI/CD expectations

Before opening a PR:

- Ensure no `.only` is committed.
- Ensure TypeScript compiles (`npm run lint`).
- Ensure tests pass locally or provide clear failure notes.
- Attach report/screenshots for flaky UI behavior.

## 8) Troubleshooting

- **Browser binaries missing:** run `npx playwright install --with-deps`
- **Timeouts on first run:** rerun once after warm-up and check network stability
- **Selector instability:** prefer role-based or text-based locators over brittle CSS/XPath
