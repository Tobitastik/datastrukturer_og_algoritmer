export function mergeSort(arr){
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log("Left: ", left);
    console.log("Right: ", right);

}

const arr = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
mergeSort(arr);