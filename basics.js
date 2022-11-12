// Write a function that takes two numbers (a and b) as argument
//  Sum a and b
// Return the result
const calcSum = (a, b) => {
  return a + b;
};

/*
Test cases:
calcSum(1,2) Expected 3
calcSum(1,10) Expected 11
calcSum(99,1) Expected 100
*/

// ========================================

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const strictEquality = (a, b) => {
  return a === b;
};

/*
Test cases:
strictEquality(2, 3) Expected false
strictEquality(3, 3) Expected true
strictEquality(1, '1') Expected false
strictEquality('10', '10') Expected true 
*/

// ========================================

// Write a function that takes a value as argument
// Return the type of the value
const getTypeOfValue = (a) => {
  return typeof a;
};

/*
Test cases:
getTypeOfValue(1) Expected 'number'
getTypeOfValue(false) Expected 'boolean'
getTypeOfValue({}) Expected 'object'
getTypeOfValue(null) Expected 'object'
getTypeOfValue('string') Expected 'string'
getTypeOfValue(['array']) Expected 'object'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Return the 1st character of the strgin a
// Tip: look up the string prototype function slice() or split()
const getFirstChar = (a, n) => {
  return a.charAt(n);
};

/*
Test Cases:
getFirstChar('abcd') Expected 'a'
getFirstChar('zyxbwpl') Expected 'z'
getFirstChar('gfedcba') Expected 'g'
*/

// ========================================

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// Tip: look up the string prototype function slice() or split()
const getNthChar = (a, n) => {
  return a.slice(n-1, n);
};

/*
Test Cases:
getNthChar('abcd',1) Expected 'a'
getNthChar('zyxbwpl',5) Expected 'w'
getNthChar('gfedcba',3) Expected 'e'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
// Tip: look up the string prototype function slice() or split()
const extractFirstHalfOfString = (a) => {
  return a.slice(0,a.length/2);
};

/*
Test Cases:
extractFirstHalfOfString('abcdefgh') Expected 'abcd'
extractFirstHalfOfString('1234') Expected '12'
extractFirstHalfOfString('gedcba') Expected 'ged'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const removeLastNChractersOfString = (a) => {
  return a.slice(0, -3);
};

/*
Test cases:
removeLastNChractersOfString('abcdefg') Expected 'abcd'
removeLastNChractersOfString('1234') Expected '1'
removeLastNChractersOfString('fgedcba') Expected 'fged'
*/

// ========================================

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
// Tip: How does the % operator work?
const checkIfNumberIsEven = (a) => {
  return a % 2 === 0;
};

/*
Test Cases:
checkIfNumberIsEven(10) Expected true
checkIfNumberIsEven(-4) Expected true
checkIfNumberIsEven(5) Expected false
checkIfNumberIsEven(-111) Expected false
*/

// ========================================

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const getPercentageOfNumber = (a, b) => {
  return (a/100) *b;
};

/*
Test cases:
getPercentageOfNumber(100,50) Expected 50
getPercentageOfNumber(10,1) Expected 0.1
getPercentageOfNumber(500,25) Expected 125
*/

// ========================================

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip:
// - Mind the order
// - Power operator is either Math.pow or **
//   - e.g. 2**2 = 4
const useAllTheOperators = (a, b, c, d, e, f) => {
  return ((a + b -c) *d /e )**f;
};

/*
Test cases:
useAllTheOperators(6,5,4,3,2,1) Expected 10.5
useAllTheOperators(6,2,1,4,2,3) Expected 2744
useAllTheOperators(2,3,6,4,2,3) Expected -8
*/

// ========================================
