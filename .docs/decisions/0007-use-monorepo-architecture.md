# Use Monorepo Architecture

## Context and Problem Statement

As a project grows, it may need to expand beyond a single web application: a mobile app, backend services written in a different language (e.g., Rust for performance-critical work), or isolated packages for specific algorithms and business logic. Managing these as separate repositories increases coordination overhead and makes code sharing harder. We need an architecture that supports this growth without requiring a painful migration later.

## Considered Options

- Polyrepo (one repository per app/package)
- Monorepo with Nx
- Monorepo with Turborepo
- Monorepo with pnpm workspaces

## Decision Outcome

Chosen option: "Monorepo with pnpm workspaces", because it is future-proof and accommodates the most likely expansion paths from day one, with no structural migration required later. Nx and Turborepo were both tested but introduce significant complexity and overhead that is not justified at the current scale. pnpm workspaces provide sufficient workspace management with no extra tooling layer.

### Consequences

- Good, because adding a mobile app, a Rust service, or any other sub-project is a first-class operation with no cross-repo coordination.
- Good, because shared business logic and algorithms can live as isolated packages consumed by any app in the repo.
- Good, because atomic commits and unified CI/CD pipelines make cross-cutting changes easier to manage.
- Good, because dependency and tooling configuration can be centralized (e.g., a single `pnpm-workspace.yaml`).
- Bad, because build and CI pipelines need to be scope-aware to avoid rebuilding everything on every change.
- Bad, because the repo grows larger over time, which can slow down initial clones.
- Bad, because pnpm workspaces alone lack built-in task orchestration and caching compared to Nx or Turborepo — these tools remain candidates if build performance becomes a bottleneck.
