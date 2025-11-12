export class Grid{
    constructor(rows, cols, wrap = true){
        this.rows = rows;
        this.cols = cols;
        this.grid = Array(rows * cols).fill(null);
        this.wrap = wrap;
    }

    set({row, col}, value){
        const index = row * this.cols +col;
        this.grid[index] = value;
    }


    get({row, col}){
        const index = row * this.cols + col;
        return this.grid[index];
    }

    indexFor({row, col}){
        let wrappedRow = row;
        let wrappedCol = col;

        if(wrappedRow < 0) wrappedRow = this.rows + wrappedRow
        if(wrappedRow >= this.rows) wrappedRow = wrappedRow - this.rows;

        if(wrappeCol < 0) wrappedCol = this.cols + wrappedCol;
        if(wrappedCol >= this.cols) wrappedCol = wrappedCol - this.cols;

        return wrappedRow * this.cols + wrappedCol;
    }

    rowColFOr(index){
        let wrappedIndex = index;
        const totalCells = this.grid.length;

        if(wrappedIndex < 0) wrappedIndex = totalCells +wrappedIndex;
        if(wrappedIndex >= totalCells) wrappedIndex = wrappedIndex - totalCells;

        const row = Math.floor(wrappedIndex / this.cols);
        const col = wrappedIndex % this.cols;

        return {row, col};
    }

    neighbours({row, col}) {
    const results = [];

    for (let dRow = -1; dRow <= 1; dRow++) {
        for (let dCol = -1; dCol <= 1; dCol++) {
            if (dRow === 0 && dCol === 0) continue;

            let newRow = row + dRow;
            let newCol = col + dCol;

            if (this.wrap) {
                if (newRow < 0) newRow = this.rows - 1;
                if (newRow >= this.rows) newRow = 0;
                if (newCol < 0) newCol = this.cols - 1;
                if (newCol >= this.cols) newCol = 0;
                results.push({ row: newRow, col: newCol });
            } else {
                if (newRow >= 0 && newRow < this.rows && newCol >= 0 && newCol < this.cols) {
                    results.push({ row: newRow, col: newCol });
                }
            }
        }
    }

    return results;
}


    neighbourValues({row, col}){
        const results = [];

        const neighbourPositions = this.neighbours({ row, col });

        for (const pos of neighbourPositions) {
            const value = this.get(pos); 
            results.push({ row: pos.row, col: pos.col, value });
        }

        return results;
    }

    nextInRow({row, col}){
        let newCol = col + 1;

        if(newCol >= this.cols){
            newCol = 0;
        }

        return {row: row, col: newCol};
    }

    nextInCol({row, col}){
        let newRow = row + 1;

        if(newRow >= this.rows){
            newRow = 0;
        }

        return{row: newRow, col: col};
    }

    north({row, col}){
        let newRow = row - 1;

        if(newRow < 0){
            newRow = this.rows - 1;
        }

        return{row: newRow, col: col};
    }

    south({row,  col}){
        let newRow = row + 1;

        if(newRow >= this.rows){
            newRow = 0;
        }

        return{row: newRow, col: col};
    }

    west({row, col}){
        let newCol = col - 1;

        if(newCol < 0){
            newCol = this.cols - 1;
        }

        return{row: row, col: newCol};
    }

    east({row, col}){
        let newCol = col + 1;

        if(newCol >= this.cols){
            newCol = 0;
        }

        return{row: row, col: newCol};
    }

    rows(){
        const allRows = [];

        for(let r = 0; r < this.rows; r++){
            allRows.push(r);
        }

        return allRows;
    }

    cols(){
        const allCols = [];

        for(let c = 0; c < this.cols; c++){
            allCols.push(c);
        }

        return allCols;
    }

    size(){
        return this.rows * this.cols;
    }

    fill(value){
        for(let i = 0; i < this.grid.length; i++){
            this.grid[i] = value;
        }
    }
}