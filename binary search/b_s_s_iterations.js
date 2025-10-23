let data = [];
for(let i=1; i <= 100; i++) {
  data[i-1] = i;
}

function binarySearch(searchFor, data) {
  let found = false;
  let min = 0;
  let max = data.length;
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

const result = binarySearch(2, data);
console.log(result.found, 'iterations:', result.iterations);



/*
50 = 1
25 = 2
75 = 7
12 = 3
18 = 4
15 = 5
3 = 5
1 = 6
2 = 7

For 50, 25, 12 passer det med at det er halvdelen så de skal have en ekstra iteration hver.
75 kommer til at være så mange iterationer da den tæller fra 51 til 100 
*/