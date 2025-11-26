export function mergeSort(arr){
    if (arr.length <= 1) {
        return arr; 
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log("Split:", mid);
    console.log("Left:", left);
    console.log("Right:", right);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right){
    const result = [];
    let i = 0, j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while(i < left.length){
        result.push(left[i++]);
    }
    while(j < right.length){
        result.push(right[j++]);
    }

    console.log("Merging: ", left, "+", right, " Result:", result)
    return result;
}

const arr = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
mergeSort(arr);
