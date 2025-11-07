import { createBoard } from './view.js';

createBoard();

const board = document.getElementById('board');
const resetBtn = document.getElementById('resetButton');

const maxPerLetter = 3;
let currentLetter = 'X';

const xCells = [];
const oCells = [];

const winningCombos = [
    
    [[1,1],[1,2],[1,3]],
    [[2,1],[2,2],[2,3]],
    [[3,1],[3,2],[3,3]],
    
    [[1,1],[2,1],[3,1]],
    [[1,2],[2,2],[3,2]],
    [[1,3],[2,3],[3,3]],
    
    [[1,1],[2,2],[3,3]],
    [[1,3],[2,2],[3,1]],
];

function checkWin(cells) {
    const positions = cells.map(cell => [parseInt(cell.dataset.row), parseInt(cell.dataset.col)]);

    return winningCombos.some(combo =>
        combo.every(pos => positions.some(p => p[0] === pos[0] && p[1] === pos[1]))
    );
}

board.addEventListener('click', (event) => {
    const cell = event.target;
    if (!cell.classList.contains('cell')) return;
    if (cell.textContent) return;

    const queue = currentLetter === 'X' ? xCells : oCells;

    if (queue.length >= maxPerLetter) {
        const oldestCell = queue.shift();
        oldestCell.classList.add('cleared');

        setTimeout(() => {
            oldestCell.textContent = '';
            oldestCell.classList.remove('cleared');
        }, 300); 
    }

    cell.textContent = currentLetter;
    queue.push(cell);

    console.log(`Row: ${cell.dataset.row}, Col: ${cell.dataset.col}, Letter: ${currentLetter}`);

    if (checkWin(queue)) {
        alert(`${currentLetter} wins!`);
        board.style.pointerEvents = 'none';
        return;
    }

    currentLetter = currentLetter === 'X' ? 'O' : 'X';
});

resetBtn.addEventListener('click', () => {
    const cells = Array.from(document.querySelectorAll('.cell'));

    const highlightDuration = 200; 
    const overlap = 100; 

    cells.forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.add('cleared');
            setTimeout(() => {
                cell.textContent = '';
                cell.classList.remove('cleared');
            }, highlightDuration);
        }, index * overlap);
    });

    setTimeout(() => {
        xCells.length = 0;
        oCells.length = 0;
        currentLetter = 'X';
        board.style.pointerEvents = 'auto';
        console.log('Board has been reset');
    }, (cells.length - 1) * overlap + highlightDuration);
});