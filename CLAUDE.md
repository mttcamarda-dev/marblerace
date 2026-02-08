# CLAUDE.md — Marble Race

## Project Overview

**Football Marble Race** is a browser-based game where two AI-controlled marbles (one per team) bounce inside a **circular arena** trying to reach a **rotating goal**. When a marble exits through the spinning goal gap, that team scores a point. Matches are capped at **3–3** (max 3 goals per team) and last 60 seconds, with full replay and JSON export support. The title **"kingofmarble10"** is displayed above the arena.

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
- **Rendering**: HTML5 Canvas 2D (`<canvas>` element, 520×560)
- **Styling**: Inline `<style>` block
- **External Assets**: Official team crests loaded from [football-data.org](https://crests.football-data.org/) CDN
- **Dependencies**: None — zero JS libraries, runs in any modern browser

## Quick Reference

```
# Run locally — just open the file in a browser
open index.html

# No build, test, or lint tooling is configured yet
```

## Architecture

The game is a self-contained single HTML file with three logical layers:

### Game Objects (Classes)
- **`Marble`** — a team marble (1 per team) with simple AI. Bounces energetically around the arena. Predicts where the rotating goal will be and loosely steers toward it. Each marble displays an **official team crest** loaded as an image, with a fallback to the team's initial letter if the image fails to load.

### Physics & Collision
- **`circleCollision(a, b)`** — detects overlap between two circles.
- **`resolveElasticCollision(a, b)`** — impulse-based elastic response with high restitution. Handles marble↔marble collisions.
- **`constrainMarbleOrScore(marble, canScore)`** — keeps marbles inside the circular arena by reflecting velocity off the curved wall (restitution 0.9 for bouncy behavior). When a marble hits the perimeter at the **goal opening** and `canScore` is true (team has < 3 goals), it passes through and scores instead of bouncing.
- **Bouncy physics**: very low friction (0.998), high wall restitution (0.9), and random initial velocities create energetic side-to-side bouncing.

### Circular Field & Rotating Goal
- The arena is a circle centered at `(FIELD_CX, FIELD_CY)` with radius `FIELD_RADIUS`.
- A single goal (golden arc opening, ~25°) rotates continuously at `GOAL_SPEED` rad/frame (one full revolution in ~10 seconds).
- **`isAngleInGoal(angle)`** — checks whether a perimeter angle falls within the goal arc, using `angleDiff()` to handle wrap-around.
- The goal is drawn with posts, a net backdrop, and a golden highlight.

### Team Logos
- Each team has a `logoUrl` pointing to the official crest on football-data.org (e.g., `https://crests.football-data.org/98.png` for Milan).
- Logos are preloaded at startup via `new Image()` with `crossOrigin = "anonymous"`.
- On each marble, the logo is drawn clipped to a circle (72% of marble radius) for a clean look.
- If an image fails to load, the team's initial letter is rendered as fallback.

### Game Flow
1. **Team selection** — two `<select>` dropdowns populated from the `teams[]` array (10 Serie A clubs with name, color, accent, power, and logoUrl).
2. **`startMatch()`** — creates 1 marble per team, resets state, starts the `requestAnimationFrame` loop.
3. **`gameLoop(timestamp)`** — ~60 FPS. Each tick: rotate goal → AI think → update positions → resolve collisions → check scoring → draw → record replay frame.
4. **Scoring** — when a marble exits through the goal gap, that team gets +1 (max 3). Both marbles respawn and a brief cooldown pauses action.
5. **`endMatch()`** — stops the loop, shows result, enables replay controls.

### Replay System
- Every frame records marble positions, goal angle, scores, and elapsed time.
- After the match, a slider + play/pause buttons let the user scrub through frames.
- **JSON export**: full replay data downloaded as `.json`.

### Key Constants (top of `<script>`)
| Constant | Value | Purpose |
|---|---|---|
| `MATCH_DURATION` | 60 | Match length in seconds |
| `MARBLE_RADIUS` | 26 | Marble radius in px |
| `MAX_GOALS` | 3 | Maximum goals per team per match |
| `FIELD_RADIUS` | 220 | Circular arena radius in px |
| `FIELD_CX / CY` | 260 / 296 | Arena center (CY offset by TITLE_HEIGHT) |
| `TITLE_HEIGHT` | 36 | Space reserved for "kingofmarble10" text |
| `GOAL_ARC` | 0.32 | Goal opening width in radians (~18°) |
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
