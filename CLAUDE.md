# CLAUDE.md — Marble Race

## Project Overview

**Football Marble Race** is a browser-based game where AI-controlled marbles play football (soccer) on an HTML5 Canvas field. Two teams are selected, their marbles autonomously chase a ball, and goals are scored when the ball enters either net. Matches last 60 seconds, with full replay and JSON export support.

## Repository Status

- **Remote**: `origin` at `mttcamarda-dev/marblerace`
- **Branches**: Development happens on `claude/` prefixed feature branches

## Project Structure

```
marblerace/
├── CLAUDE.md       ← This file — project guide for AI assistants
└── index.html      ← Complete game (HTML + CSS + JS, single file)
```

## Tech Stack

- **Language**: Vanilla JavaScript (ES6+), no frameworks or build tools
- **Rendering**: HTML5 Canvas 2D (`<canvas>` element, 900×500)
- **Styling**: Inline `<style>` block
- **Dependencies**: None — zero external libraries, runs in any modern browser

## Quick Reference

```
# Run locally — just open the file in a browser
open index.html

# No build, test, or lint tooling is configured yet
```

## Architecture

The game is a self-contained single HTML file with three logical layers:

### Game Objects (Classes)
- **`Ball`** — the football. Has position, velocity, friction, and wall-bounce physics.
- **`Marble`** — a team marble with simple AI. Chases the ball, tries to push it toward the opponent's goal, and retreats defensively when far from the ball.

### Physics & Collision
- **`circleCollision(a, b)`** — detects overlap between two circles.
- **`resolveElasticCollision(a, b, massA, massB)`** — separates overlapping circles and applies impulse-based elastic response with restitution. Used for marble↔ball and marble↔marble collisions.
- **`isInGoal(ball, goal)`** — AABB check: returns true when the ball overlaps a goal rectangle.

### Game Flow
1. **Team selection** — two `<select>` dropdowns populated from the `teams[]` array (10 Serie A clubs with name, color, accent, and power rating).
2. **`startMatch()`** — initializes marbles, ball, score, timer, replay buffer; starts the `requestAnimationFrame` loop.
3. **`gameLoop(timestamp)`** — runs at ~60 FPS. Each tick: AI think → update positions → resolve collisions → check goals → draw → record replay frame.
4. **`endMatch()`** — stops the loop, shows result, enables replay controls and download button.

### Replay System
- Every frame is pushed to `replayData.frames[]` with marble positions, ball position, score, and elapsed time.
- After the match, a slider + play/pause buttons let the user scrub through frames.
- **JSON export**: `replayData` (frames + goal events + team info) is serialized and downloaded as a `.json` file.

### Key Constants (top of `<script>`)
| Constant | Value | Purpose |
|---|---|---|
| `MATCH_DURATION` | 60 | Match length in seconds |
| `BALL_RADIUS` | 14 | Football radius in px |
| `MARBLE_RADIUS` | 20 | Marble radius in px |
| `GOAL_WIDTH` | 10 | Goal depth in px |
| `GOAL_HEIGHT` | 140 | Goal opening in px |
| `FPS` | 60 | Target frames per second |

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
- The game is currently a single `index.html`; if it grows, split into `style.css` and `game.js`

### Testing

- No test framework is configured yet
- Write tests alongside new features when a framework is introduced
- Tests should be deterministic and independent of each other
- Prefer testing behavior over implementation details

## UI Language

The interface text is in **Italian** (buttons, log messages, goal announcements). Maintain this convention when adding user-facing strings.

## Updating This File

Keep this file current as the project evolves. Every significant addition — new tooling, architectural decisions, naming conventions — should be reflected here so that any AI assistant or new contributor can orient quickly.
