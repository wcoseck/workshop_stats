// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Perform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  for (let i = 0; i < userInputString.length; i++) {}
  return stringArray.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let getSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    getSum += numbers[i];
  }
  return getSum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let getSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    getSum += numbers[i];
  }
  return getSum / numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let getMin = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num < getMin) {
      getMin = num;
    }
  }
  return getMin;
}
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let getMax = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > getMax) {
      getMax = numbers[i];
    }
  }
  return getMax;
}
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let getRange = stringArray.slice(numbers);
  {
    return numbers.slice(numbers);
  }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let getEvens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) getEvens.push(numbers[i]);
  }
  return getEvens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let getOdds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) getOdds.push(numbers[i]);
  }
  return getOdds;
}
