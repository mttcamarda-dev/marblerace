# CLAUDE.md — Marble Race

## Project Overview

**Football Marble Race** is a browser-based game where AI-controlled marbles race inside a **circular arena** to reach a **rotating goal**. Two teams of 5 marbles each compete — when any marble exits through the spinning goal gap, that team scores a point. A loose ball bounces around adding physics chaos. Matches last 60 seconds, with full replay and JSON export support.

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
- **Rendering**: HTML5 Canvas 2D (`<canvas>` element, 700×700)
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
- **`Ball`** — the football. Bounces inside the circular field, constrained by `constrainToField()`.
- **`Marble`** — a team marble (5 per team) with simple AI. Predicts where the rotating goal will be and races toward it. Each marble displays a canvas-drawn team logo.

### Physics & Collision
- **`circleCollision(a, b)`** — detects overlap between two circles.
- **`resolveElasticCollision(a, b, massA, massB)`** — impulse-based elastic response with restitution. Handles marble↔ball and marble↔marble.
- **`constrainToField(obj)`** — keeps the ball inside the circular arena by reflecting velocity off the curved wall.
- **`constrainMarbleOrScore(marble)`** — same wall constraint for marbles, but when a marble hits the perimeter at the **goal opening**, it passes through and scores instead of bouncing.

### Circular Field & Rotating Goal
- The arena is a circle centered at `(FIELD_CX, FIELD_CY)` with radius `FIELD_RADIUS`.
- A single goal (golden arc opening, ~25°) rotates continuously at `GOAL_SPEED` rad/frame (one full revolution in ~10 seconds).
- **`isAngleInGoal(angle)`** — checks whether a perimeter angle falls within the goal arc, using `angleDiff()` to handle wrap-around.
- The goal is drawn with posts, a net backdrop, and a golden highlight.

### Team Logos
- Each team has a `logo` function (e.g., `drawMilanLogo(ctx, r)`) that draws a simplified crest using Canvas 2D primitives (stripes, shapes, initials).
- Logos are rendered centered on each marble via `ctx.save/translate/restore`.

### Game Flow
1. **Team selection** — two `<select>` dropdowns populated from the `teams[]` array (10 Serie A clubs with name, color, accent, power, and logo draw function).
2. **`startMatch()`** — creates 5 marbles per team + 1 ball, resets state, starts the `requestAnimationFrame` loop.
3. **`gameLoop(timestamp)`** — ~60 FPS. Each tick: rotate goal → AI think → update positions → resolve collisions → check scoring → draw → record replay frame.
4. **Scoring** — when a marble exits through the goal gap, that team gets +1. The scoring marble respawns at its start position, the ball respawns at center, and a brief cooldown pauses action.
5. **`endMatch()`** — stops the loop, shows result, enables replay controls.

### Replay System
- Every frame records all marble positions, ball position, goal angle, scores, and elapsed time.
- After the match, a slider + play/pause buttons let the user scrub through frames.
- **JSON export**: full replay data downloaded as `.json`.

### Key Constants (top of `<script>`)
| Constant | Value | Purpose |
|---|---|---|
| `MATCH_DURATION` | 60 | Match length in seconds |
| `BALL_RADIUS` | 12 | Football radius in px |
| `MARBLE_RADIUS` | 18 | Marble radius in px |
| `MARBLES_PER_TEAM` | 5 | Marbles per team |
| `FIELD_RADIUS` | 300 | Circular arena radius in px |
| `GOAL_ARC` | 0.44 | Goal opening width in radians (~25°) |
| `GOAL_SPEED` | 2π/(10×60) | Goal rotation speed (1 rev / 10 sec) |
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
