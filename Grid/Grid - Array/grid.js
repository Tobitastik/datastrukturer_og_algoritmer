class Grid{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.grid = Array(rows * cols).fill(null);
    }

    set({row, col}, value){
        this.grid[row * this.cols + col] = value;
    }


    get({row, col}){
        return this.grid[row * this.cols + col];
    }

    indexFor({row, col}){

    }

    rowColFOr(index){

    }

    neighbours({row, col}){

    }

    neighbourValues({row, col}){

    }

    nextInRow({row, col}){

    }

    nextInCol({row, col}){

    }

    north({row, col}){

    }

    south({row,  col}){

    }

    west({row, col}){

    }

    east({row, col}){

    }

    rows(){

    }

    cols(){

    }

    size(){

    }

    fill(value){

    }
}