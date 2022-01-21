// This code was already here (as an example?) 👇🏼
// function addTwoNumbers(x, y) {
//   return x + y;
// }

// var sum = addTwoNumbers(4, 4);
// console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(12, 19);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertedHours = convertHoursToMinutes(24);
console.log('convertHoursToMinutes Exercise:', convertedHours);

function getGreeting(name) {
  return `Hello ${name}!`;
}
var greetMe = getGreeting('Macy');
console.log('getGreeting Exercise: ', greetMe);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) / 5;
}
var multipliedSum = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise: ', multipliedSum);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise: ', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(2022, 1990);
console.log('subtractTwoNumbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var CircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise: ', CircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Tom', 'Holland');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}
var cubedNumber = cube(6);
console.log('cube Exercise: ', cubedNumber);
