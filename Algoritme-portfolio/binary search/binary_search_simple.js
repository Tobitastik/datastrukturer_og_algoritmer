const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function binarySearch(searchFor, values) {
  let found = false;
  let min = 0;
  let max = values.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let middleValue = values[middle];

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

  return found;
}

console.log(binarySearch(34, values));