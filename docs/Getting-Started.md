# Getting Started

This document describes a safe test-only workflow for the Elton Office agents.

- **Nova** prepares the plan.
- **Atlas** proposes a small change.
- **Iris** reviews the changes.
- **Elton** publishes the PR and evaluates the required GitHub checks.

Changes for Orion S3C verification should be limited to this documentation file. Keep examples harmless. A PR must not merge if the protected branch or required CI is missing.

## CI smoke check

This section is a harmless documentation-only change to confirm that the `Verify` GitHub Actions workflow also runs on pull requests. It does not enable automation or modify any production system.

## Automatic Merge Verification

Before automatic merging, Orion requires repository authorization, approval from both Iris and Elton, a protected `main` branch, and passing CI, including all required GitHub checks, in accordance with the repository’s approved automatic merge policy.
