# CLAUDE.md — Marble Race

## Project Overview

**Marble Race** is a browser-based marble racing game. Teams (represented as colored marbles) race across a canvas track with randomized physics. Built with vanilla HTML, CSS, and JavaScript — no build tools or dependencies required.

## Repository Status

- **Remote**: `origin` at `mttcamarda-dev/marblerace`
- **Primary branch**: `master`
- **Tech stack**: Vanilla HTML5 / CSS / JavaScript (no frameworks, no bundler)
- **CI/CD**: Not yet configured
- **Dependencies**: None — runs directly in any modern browser

## Directory Structure

```
marblerace/
├── CLAUDE.md      # Project guide for AI assistants
├── index.html     # Entry point — loads CSS and JS
├── style.css      # Layout and styling
├── teams.js       # Team data (names, colors)
└── script.js      # Race logic, canvas rendering, UI
```

## Quick Reference

```bash
# Run:  Open index.html in a browser (no server required)
# Dev:  python3 -m http.server   (or any static file server)
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
