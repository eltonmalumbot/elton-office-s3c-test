# Elton Office · Orion S3C Test Repository

Public **throwaway test repository** for checking Orion's per-repository CI-gated automatic merging. There is no application, production deployment, API key, personal data, or real business code here.

## Getting Started

1. Use Node.js 20 or later.
2. Run `npm test` to check project invariants.
3. Run `npm run build` to check the test-project structure.
4. Make changes through pull requests targeting `main`. All changes to `main` should be reviewed by GitHub's branch rules.

## What we test

The GitHub Actions workflow called **Verify** runs `test-and-build`, including steps `Run npm test` and `Run npm run build`, on pull requests. These names match the CI policy expected by Elton Office Orion S3C.

Try a small change to `docs/Getting-Started.md` via Orion. In safe test conditions, automatic merging should happen **only after** successful CI, current owner-approved registry permissions, a protected main branch, and all other S3C checks.

## Safety

- Never add real credentials, tokens, customer data, or production application code.
- Do not use this repository to deploy production apps.
- Do not weaken protected branch rules or CI to make a test pass.
- Keep authorization and automatic merging disabled until test conditions are verified.
