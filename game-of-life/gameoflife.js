import { Grid } from "../datastruktur-portfolio/grid/grid-array/grid.js";

const grid = new Grid(20, 30, true);

for (let r = 0; r < grid.rows; r++) {
    for (let c = 0; c < grid.cols; c++) {
        grid.set({ row: r, col: c }, Math.random() < 0.5 ? 0 : 1);
    }
}

const container = document.getElementById("grid-container");
container.style.gridTemplateRows = `repeat(${grid.rows}, auto)`;
container.style.gridTemplateColumns = `repeat(${grid.cols}, auto)`;

function drawGrid() {
    container.innerHTML = ""; 

    for (let r = 0; r < grid.rows; r++) {
        for (let c = 0; c < grid.cols; c++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");

            if (grid.get({ row: r, col: c }) === 1) {
                cellDiv.style.backgroundColor = "black";
            } else {
                cellDiv.style.backgroundColor = "#eee";
            }

            container.appendChild(cellDiv);
        }
    }
}

function countAliveNeighbors({ row, col }) {
    const neighborPositions = grid.neighbours({ row, col }); 
    let count = 0;

    for (const n of neighborPositions) {
        if (grid.get(n) === 1) count++;
    }

    return count;
}

function nextGeneration() {
    const newGrid = new Grid(grid.rows, grid.cols);

    for (let r = 0; r < grid.rows; r++) {
        for (let c = 0; c < grid.cols; c++) {
            const aliveNeighbors = countAliveNeighbors({ row: r, col: c });
            const isAlive = grid.get({ row: r, col: c }) === 1;

            let newState = 0;

            if (isAlive) {
                if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                    newState = 1;
                }                
            } else {
                if (aliveNeighbors === 3) {
                    newState = 1; 
                }
            }

            newGrid.set({ row: r, col: c }, newState);
        }
    }

    grid.grid = newGrid.grid;
}

drawGrid();

let intervalId = null;

document.getElementById("start-btn").addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            nextGeneration();
            drawGrid();
        }, 50); 
    }
});

document.getElementById("stop-btn").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById("restart-btn").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;

    for (let r = 0; r < grid.rows; r++) {
        for (let c = 0; c < grid.cols; c++) {
            grid.set({ row: r, col: c }, Math.random() < 0.5 ? 0 : 1);
        }
    }

    drawGrid();
});