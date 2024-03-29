// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
//  console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

const range = (start, end) => {
  let rangeOfValues = [];
  for (let i = start; i <= end; i += 1) {
    rangeOfValues.push(i);
  }
  console.log(rangeOfValues);
};

range(1, 10);

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

const sumFunction = (...num) => {
  sum = 0;
  for (let i = 0; i < num.length; i += 1) {
    sum += num[i];
  }
  console.log(sum);
};

sumFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

const rangeFuncUpdate = (start, end, step) => {
  arrayOfValues = [];
  sumOfValues = 0;
  if (end > start) {
    for (let i = start; i <= end; i += step) {
      // sumOfValues += i;
      arrayOfValues.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      // sumOfValues += i;
      arrayOfValues.push(i);
    }
  }

  console.log(arrayOfValues);
};

rangeFuncUpdate(5, 2, -1);
