// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const getNthCharacterInArray = (a, n) => {
  return a[n-1];
};

/*
Test cases:
getNthCharacterInArray([1,2,3,4,5],3) Expected 3
getNthCharacterInArray([10,9,8,7,6],5) Expected 6
getNthCharacterInArray([7,2,1,6,3],1) Expected 7
*/

// ========================================

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
// Tip: use the array prototype function slice()
const removeFirstThreeElements = (a) => {
  return a.slice(3);
};

/*
Test cases:
removeFirstThreeElements([1,2,3,4]) Expected [4]
removeFirstThreeElements([5,4,3,2,1,0]) Expected [2,1,0]
removeFirstThreeElements([99,1,1]) Expected []
*/

// ========================================

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
// Tip: use the array prototype function slice()
const removeLastNElements = (a, n) => {
  return a.slice(-n);
};

/*
Test cases:
removeLastNElements([1, 2, 3, 4, 5], 2) Expected [ 4, 5 ]
removeLastNElements([1, 2, 3], 6) Expected [ 1, 2, 3 ]
removeLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3) Expected [ 6, 7, 8 ]
*/

// ========================================
// Write a function that takes an array (a) as argument
// Return the number of elements in a
// Tip: How do you find the length of an array?
const countNumberOfElements = (a) => {
  return a.length;
};
/*
Test cases: 
countNumberOfElements([1,2,2,4]) Expected 4
countNumberOfElements([9,9,9]) Expected 3
countNumberOfElements([4,3,2,1,0]) Expected 5
*/

// ========================================

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
// Tip: There are multiple ways to solve this e.g.
// - Use .filter() to filter only negative numbers, and count them
// - Use .forEach() to iterate through all numbers and count negatives
const countNumberOfNegativeValues = (a) => {
  return a.filter(a => a < 0).length;
};

/*
Test cases:
countNumberOfNegativeValues([1,-2,2,-4]) Expected 2
countNumberOfNegativeValues([0,9,1]) Expected 0
countNumberOfNegativeValues([4,-3,2,1,0]) Expected 1
*/

// ========================================

// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
// Tip: forEach, c-style loop (or even .reduce() for the brave)
const calcSumOfArrayOfNumbers = (a) => {
  return a.reduce((i,x) => i + x);
};

/*
Test cases:
calcSumOfArrayOfNumbers([10,100,40]) Expected 150
calcSumOfArrayOfNumbers([10,100,1000,1]) Expected 1111
calcSumOfArrayOfNumbers([-50,0,50,200]) Expected 200
*/

// ========================================
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
// Tip: forEach, c-style loop (or even .reduce() for the brave)
// to get the sum, then divide by number of elements in array
const calcAvgOfArrayOfNumbers = (arr) => {
  return arr.reduce((i,x) => i + x)/arr.length;
};

/*
Test cases:
calcAvgOfArrayOfNumbers([10,100,40]) Expected 50
calcAvgOfArrayOfNumbers([10,100,1000]) Expected 370
calcAvgOfArrayOfNumbers([-50,0,50,200]) Expected 50
*/

// ========================================
// Write a function that takes an array of strings as argument
// Return the longest string
// Tip: It's possible to get length of string with .length
// E.g. 'Gunnsteinn'.length = 10
const getLongestStringFromArray = (arr) => {
  var word = "";
  arr.forEach(element => {
    if(element.length > word.length)
    word = element
  });
return word;
  
};

/*
Test cases:
getLongestStringFromArray(['help', 'me']) Expected 'help'
getLongestStringFromArray(['I', 'need', 'candy']) Expected 'candy'
*/

// ========================================
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
// Tip: STRICTLY equal, ====
const areAllEqual = (arr) => {
  return arr.every(element => element === arr[0]);
};

/*
Test cases:
areAllEqual([true, true, true, true]) Expected true 
areAllEqual(['test', 'test', 'test']) Expected true 
areAllEqual([1,1,1,2]) Expected false 
areAllEqual(['10',10,10,10]) Expected false 
*/  
// ========================================
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
// Tip: Make use of the spread syntax (...), as the parameters suggest
const mergeAllArrays = (...arrays) => {
  var arr1 = [];
  arr1 = arr1.concat(...arrays)
  return arr1;
};

/*
Test cases:
mergeAllArrays([1, 2, 3], [4, 5, 6]) Expected [1, 2, 3, 4, 5, 6]
mergeAllArrays(['a', 'b', 'c'], [4, 5, 6]) Expected ['a', 'b', 'c', 4, 5, 6]
mergeAllArrays([true, true], [1, 2], ['a', 'b']) Expected [true, true, 1, 2, 'a', 'b']
*/
