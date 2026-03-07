# Use oxlint for Linting

## Context and Problem Statement

The project needs a linter to enforce code quality and catch potential issues. The JavaScript/TypeScript ecosystem offers several linting tools. We need one that integrates well with our toolchain, is fast, and requires minimal configuration.

## Considered Options

- ESLint
- Biome
- oxlint

## Decision Outcome

Chosen option: "oxlint", because it is extremely fast (written in Rust), has sensible defaults with near-zero configuration, and pairs well with `oxfmt` which is already used for formatting in this project.

### Consequences

- Good, because it is significantly faster than ESLint, especially in CI.
- Good, because it requires minimal configuration to get started.
- Good, because it is consistent with the Oxc toolchain already adopted for formatting (`oxfmt`).
- Bad, because it has fewer rules and plugins than ESLint, which may leave some code patterns unchecked.
- Bad, because it is a younger tool with a smaller ecosystem and community.
