function binarySearchRecursive(search, values, start, end, iterations, comparator){
    iterations++;

    if(start > end){
        return {index: -1, iterations};
    }

    let mid = Math.floor((start + end) / 2);
    let comparasion = comparator(search, values[mid]);

    if(comparasion === 0){
        return{index: mid, iterations};
    } else if (camparison < 0){
        return binarySearchRecursive(search, values, start, mid - 1, iterations, comparator)
    } else{
        return binarySearchRecursive(search, values, mid + 1, end, iterations, comparator); 
    }
}