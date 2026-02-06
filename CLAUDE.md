# CLAUDE.md — Marble Race

## Project Overview

**Marble Race** is a greenfield project. The repository has been initialized with foundational guidelines but no application code has been written yet. This file serves as the authoritative guide for AI assistants working on this codebase.

## Repository Status

- **State**: Pre-development — no source code, build system, or CI/CD pipeline exists yet
- **Remote**: `origin` at `mttcamarda-dev/marblerace`
- **Branches**: Development happens on `claude/` prefixed feature branches
- **Structure**: Currently only this file (`CLAUDE.md`) exists at the repository root

## Quick Reference

No build, test, or lint commands are configured yet. Update this section as tooling is added:

```
# Build
(not yet configured)

# Test
(not yet configured)

# Lint
(not yet configured)
```

## Development Guidelines

### Git Workflow

- Work on feature branches prefixed with `claude/` when using Claude Code
- Write clear, descriptive commit messages focused on "why" not "what"
- Keep commits atomic — one logical change per commit
- Do not force-push to shared branches
- Push with `git push -u origin <branch-name>`

### Code Quality Expectations

- Prefer simplicity over cleverness
- Avoid over-engineering; solve the current problem without speculative abstractions
- Keep functions small and focused on a single responsibility
- Write self-documenting code; add comments only when intent is non-obvious
- Do not introduce known security vulnerabilities (OWASP top 10)

### File Organization

- Keep related files close together
- Use descriptive file and directory names
- Avoid deeply nested directory structures when a flatter layout is clearer

### Testing

- Write tests alongside new features
- Tests should be deterministic and independent of each other
- Prefer testing behavior over implementation details

## Architecture & Tech Stack

Not yet established. When the tech stack is chosen, document here:

- Language(s) and runtime versions
- Framework(s) and key libraries
- Database / storage
- Project directory layout (e.g., `src/`, `tests/`, `public/`)

## Environment Setup

No setup steps required yet. Update this section when dependencies and tooling are introduced:

1. Prerequisites (runtime, package manager, etc.)
2. Install dependencies
3. Environment variables (reference `.env.example` if applicable)
4. Local development server

## CI/CD

No CI/CD pipeline is configured. When added, document:

- Pipeline tool (GitHub Actions, etc.)
- Triggers (on push, on PR, etc.)
- Steps (lint, test, build, deploy)

## Conventions

Document naming conventions, patterns, and team decisions here as they emerge during development.

## Updating This File

Keep this file current as the project evolves. Every significant addition — new tooling, architectural decisions, naming conventions — should be reflected here so that any AI assistant or new contributor can orient quickly.
