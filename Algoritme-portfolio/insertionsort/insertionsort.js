export function insertSort(arr){
    const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
    let i = 1;
    let key = list[i]
    let j = i - 1;

    while(j >= 0 && list[j] > key){
        console.log(`Shifting ${list[j]} to the right`);
        list[j + 1] = list[j];
        j--;
    }

    list[j + 1] = key;

    console.log("List after inserting key:", list);
}

insertSort();