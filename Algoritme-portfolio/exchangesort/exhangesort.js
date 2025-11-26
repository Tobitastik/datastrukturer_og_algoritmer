export function exchangeSort(arr) {
    
    const arrBefore = [...arr];
    for (let i = 0; i < arr.length - 1; i++) {
        console.log("Outer loop at index:", i, "Value:", arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
            console.log(`   Comparing ${arr[i]} and ${arr[j]}`);

            if (arr[j] < arr[i]) {
                console.log(`   Swapping ${arr[i]} and ${arr[j]}`);
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log("Before sort:", arrBefore);
    console.log("Final sorted list:", arr);
}

const arr = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

exchangeSort(arr);