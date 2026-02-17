# CLAUDE.md — Marble Race

## Project Overview

**Marble Race** is a new project. The repository has been initialized but application development has not yet begun. This file serves as the foundational guide for AI assistants working on this codebase.

## Repository Status

- **State**: Initialized — no application code, build tools, or dependencies yet
- **Remote**: `origin` at `mttcamarda-dev/marblerace`
- **Primary branch**: `master`
- **Tech stack**: Not yet established
- **CI/CD**: Not yet configured
- **Dependencies**: None (no package.json, pyproject.toml, or similar)

## Directory Structure

```
marblerace/
└── CLAUDE.md          # This file — project guide for AI assistants
```

No source code, configuration files, or build infrastructure exists yet. The first development task should establish the tech stack and project scaffolding.

## Quick Reference

No build, test, or lint commands are available yet. Update this section as tooling is added:

```bash
# Build:    (not yet configured)
# Test:     (not yet configured)
# Lint:     (not yet configured)
# Dev:      (not yet configured)
```

## Development Guidelines

### Git Workflow

- Work on feature branches prefixed with `claude/` when using Claude Code
- Write clear, descriptive commit messages focused on "why" not "what"
- Keep commits atomic — one logical change per commit
- Do not force-push to shared branches
- Push feature branches with `git push -u origin <branch-name>`

### Code Quality Expectations

- Prefer simplicity over cleverness
- Avoid over-engineering; solve the current problem without speculative abstractions
- Keep functions small and focused on a single responsibility
- Write self-documenting code; add comments only when intent is non-obvious
- Do not introduce known security vulnerabilities (OWASP top 10)
- Do not add unnecessary abstractions, feature flags, or backwards-compatibility shims

### File Organization

- Keep related files close together
- Use descriptive file and directory names
- Avoid deeply nested directory structures when a flatter layout is clearer

### Testing

- Write tests alongside new features
- Tests should be deterministic and independent of each other
- Prefer testing behavior over implementation details

## Updating This File

As the project develops, update this file to reflect:

- Tech stack and dependencies
- Build, test, and lint commands (fill in the Quick Reference section above)
- Architecture decisions and patterns in use
- Environment setup instructions (required tools, env vars, etc.)
- CI/CD pipeline details
- Naming conventions adopted by the team
- Key entry points and important source files
