export function createBoard(rows = 3, cols = 3) {
    const board = document.getElementById('board');
    board.innerHTML = ''; 
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r + 1;
            cell.dataset.col = c + 1;
            board.appendChild(cell);
        }
    }
}
