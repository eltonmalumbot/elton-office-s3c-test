# Getting Started

This document describes a safe test-only workflow for the Elton Office agents.

- **Nova** prepares the plan.
- **Atlas** proposes a small change.
- **Iris** reviews the changes.
- **Elton** publishes the PR and evaluates the required GitHub checks.

Changes for Orion S3C verification should be limited to this documentation file. Keep examples harmless. A PR must not merge if the protected branch or required CI is missing.

## CI smoke check

This section is a harmless documentation-only change to confirm that the `Verify` GitHub Actions workflow also runs on pull requests. It does not enable automation or modify any production system.

## Safe Rollback

Automatic merge permissions can be revoked through Orion Repository Manager. Automatic merges remain subject to the approved CI-gated policy: a PR must not merge if the protected branch or required CI is missing.

## Orion S3E

Orion S3E is a sequential, independently reviewable multi-repository roadmap. Each scoped change must pass its repository's required GitHub CI and merge under that repository's existing approved merge policy before the next step launches. Step 2 must wait until this documentation change passes required CI and is merged under the existing approved policy.
