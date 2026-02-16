# CLAUDE.md — Marble Race

## Project Overview

**Marble Race** is a new project. The repository has been initialized but active development has not yet begun. No tech stack, dependencies, or source code exist yet. This file serves as the foundational guide for AI assistants working on this codebase.

## Repository Structure

```
marblerace/
├── CLAUDE.md          # This file — AI assistant guidelines and project documentation
└── .git/              # Git version control
```

There are currently no source files, configuration files, dependencies, or tests. The project structure will evolve as development begins.

## Repository Status

- **State**: Initialized, pre-development
- **Remote**: `origin` at `mttcamarda-dev/marblerace`
- **Primary branch**: `master`
- **Tech stack**: Not yet established
- **Dependencies**: None
- **CI/CD**: Not configured

## Quick Reference

> **No build, test, or lint commands are available yet.** This section should be updated once tooling is in place.

<!-- Update this section as tooling is added:
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Lint
npm run lint

# Build for production
npm run build
``` -->

## Development Guidelines

### Git Workflow

- Work on feature branches prefixed with `claude/` when using Claude Code
- Write clear, descriptive commit messages focused on "why" not "what"
- Keep commits atomic — one logical change per commit
- Do not force-push to shared branches
- Rebase feature branches onto the primary branch before merging when possible

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
- Group by feature rather than by file type when it improves clarity

### Testing

- Write tests alongside new features
- Tests should be deterministic and independent of each other
- Prefer testing behavior over implementation details
- Keep test files co-located with the code they test, or in a parallel `tests/` directory

### Error Handling

- Handle errors at system boundaries (user input, external APIs, file I/O)
- Trust internal code and framework guarantees — don't over-validate
- Provide useful error messages that help diagnose the problem

### Security

- Sanitize and validate all external input
- Never commit secrets, API keys, or credentials
- Follow the principle of least privilege
- Be aware of OWASP top 10 vulnerabilities when writing web-facing code

## Architecture

> **Not yet established.** Document architecture decisions here as the project takes shape — tech stack choices, data flow, module boundaries, and key patterns.

## Environment Setup

> **No setup required yet.** Update this section with prerequisites (runtime versions, environment variables, database setup, etc.) once development begins.

## Updating This File

As the project develops, update this file to reflect:

- Tech stack and dependencies
- Build, test, and lint commands (fill in the Quick Reference section)
- Architecture decisions and patterns in use
- Environment setup instructions
- CI/CD pipeline details
- Naming conventions adopted by the team
- Key files and entry points
