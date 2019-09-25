// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// By creating a new array
const reverseArray = (...array) => {
  newArray = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }
  console.log(newArray);
};

reverseArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//With in place array - Without creating a new Array

const reverseArrayInPlace = (...arr) => {
  let start = 0;
  let end = arr.length - 1;
  let temp;
  while (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }
  console.log(arr);
};

reverseArrayInPlace(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
