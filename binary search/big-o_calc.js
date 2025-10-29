let data = [];
for(let i=1; i <= 50000; i++) {
  data[i-1] = i;
}

function binarySearch(searchFor, data) {
  let found = false;
  let min = 0;
  let max = data.length-1;
  let iterations = 0;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let middleValue = data[middle];
    iterations++
    console.log("Min index:", min, "Max index:", max, "Middle index:", middle, "Middle value:", middleValue);

    if (middleValue === searchFor) {
      found = true;
      break;
    } else if (middleValue < searchFor) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }

  return {found, iterations};
}

let worstCase = 0;
for (let i = 0; i < data.length; i++) {
  const result = binarySearch(data[i], data);
  if (result.iterations > worstCase) {
    worstCase = result.iterations;
  }
}

console.log(`Worst case iterations for n = ${data.length}: ${worstCase}`);


/*
200 = 8
500 = 9
1.000 = 10
2.000 = 11
5.000 = 13
10.000 = 14
50.000 = 16

*/