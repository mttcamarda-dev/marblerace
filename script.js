const canvas = document.getElementById("raceCanvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const rankingsEl = document.getElementById("rankings");

const LANE_HEIGHT = 60;
const MARBLE_RADIUS = 16;
const PADDING = 30;
const FINISH_LINE_OFFSET = 50;

let marbles = [];
let finishOrder = [];
let racing = false;
let animationId = null;

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = TEAMS.length * LANE_HEIGHT + PADDING * 2;
}

function createMarbles() {
    marbles = TEAMS.map((team, i) => ({
        team,
        x: PADDING + MARBLE_RADIUS,
        y: PADDING + i * LANE_HEIGHT + LANE_HEIGHT / 2,
        speed: 0,
        finished: false,
    }));
}

function getFinishX() {
    return canvas.width - FINISH_LINE_OFFSET;
}

function drawTrack() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Lane backgrounds
    for (let i = 0; i < TEAMS.length; i++) {
        const y = PADDING + i * LANE_HEIGHT;
        ctx.fillStyle = i % 2 === 0 ? "#1a1a2e" : "#0f3460";
        ctx.fillRect(0, y, canvas.width, LANE_HEIGHT);

        // Team name label
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.font = "12px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText(TEAMS[i].name, 8, y + LANE_HEIGHT / 2);
    }

    // Finish line
    const finishX = getFinishX();
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(finishX, PADDING);
    ctx.lineTo(finishX, PADDING + TEAMS.length * LANE_HEIGHT);
    ctx.stroke();
    ctx.setLineDash([]);

    // Finish label
    ctx.fillStyle = "#e94560";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("FINISH", finishX, PADDING - 8);
    ctx.textAlign = "start";
}

function drawMarble(marble) {
    const { x, y, team } = marble;

    // Outer circle (secondary color)
    ctx.beginPath();
    ctx.arc(x, y, MARBLE_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = team.secondaryColor;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Inner circle (primary color)
    ctx.beginPath();
    ctx.arc(x, y, MARBLE_RADIUS * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = team.color;
    ctx.fill();

    // Shine effect
    ctx.beginPath();
    ctx.arc(x - 4, y - 4, MARBLE_RADIUS * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();
}

function updateMarbles() {
    const finishX = getFinishX();

    for (const marble of marbles) {
        if (marble.finished) continue;

        // Random acceleration with some variance to keep it interesting
        marble.speed += (Math.random() - 0.35) * 0.8;
        marble.speed = Math.max(0.2, Math.min(marble.speed, 5));

        marble.x += marble.speed;

        if (marble.x >= finishX) {
            marble.x = finishX;
            marble.finished = true;
            finishOrder.push(marble.team);
        }
    }
}

function updateLeaderboard() {
    rankingsEl.innerHTML = "";

    // Show finished teams first, then sort remaining by x position
    const sorted = [...marbles].sort((a, b) => {
        const aIdx = finishOrder.indexOf(a.team);
        const bIdx = finishOrder.indexOf(b.team);
        if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
        if (aIdx !== -1) return -1;
        if (bIdx !== -1) return 1;
        return b.x - a.x;
    });

    for (const marble of sorted) {
        const li = document.createElement("li");
        const dot = document.createElement("span");
        dot.className = "color-dot";
        dot.style.background = marble.team.color;
        dot.style.borderColor = marble.team.secondaryColor;
        li.appendChild(dot);
        li.appendChild(document.createTextNode(marble.team.name));
        rankingsEl.appendChild(li);
    }
}

function raceLoop() {
    updateMarbles();
    drawTrack();
    for (const marble of marbles) {
        drawMarble(marble);
    }
    updateLeaderboard();

    if (finishOrder.length < TEAMS.length) {
        animationId = requestAnimationFrame(raceLoop);
    } else {
        racing = false;
        startBtn.disabled = true;
        resetBtn.disabled = false;
    }
}

function startRace() {
    if (racing) return;
    racing = true;
    startBtn.disabled = true;
    resetBtn.disabled = false;
    finishOrder = [];
    animationId = requestAnimationFrame(raceLoop);
}

function resetRace() {
    if (animationId) cancelAnimationFrame(animationId);
    racing = false;
    finishOrder = [];
    startBtn.disabled = false;
    resetBtn.disabled = true;
    createMarbles();
    drawTrack();
    for (const marble of marbles) {
        drawMarble(marble);
    }
    updateLeaderboard();
}

startBtn.addEventListener("click", startRace);
resetBtn.addEventListener("click", resetRace);

window.addEventListener("resize", () => {
    resizeCanvas();
    if (!racing) {
        drawTrack();
        for (const marble of marbles) {
            drawMarble(marble);
        }
    }
});

// Initialize
resizeCanvas();
createMarbles();
drawTrack();
for (const marble of marbles) {
    drawMarble(marble);
}
updateLeaderboard();
