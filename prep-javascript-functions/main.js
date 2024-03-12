// Define and log addTwoNumbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const twoNumbersResult = addTwoNumbers(2, 2);
console.log('The expected output is ' + twoNumbersResult);

// Define and log convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

const hoursToMinutesConversion = convertHoursToMinutes(2);
console.log('The expected output is ' + hoursToMinutesConversion + ' minutes.');

// Define and log getGreeting
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const fullGreeting = getGreeting('World');
console.log('The expected string is ' + fullGreeting);

// Define and log addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('The expected output is ' + addAndMultiplyResult);

// Define and log multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('The expected output is ' + multiplyAndDivideResult);

// Define and log subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractResult = subtractTwoNumbers(22, 7);
console.log('The expected output is ' + subtractResult);

// Define and log getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circumferenceResult = getCircleCircumference(5);
console.log('The expected circumference is ' + circumferenceResult);

// Define and log getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log('The expected full name is ' + fullName);

// Define and log cube
function cube(number) {
  return number ** 3;
}

const cubeResult = cube(5);
console.log('The expected cube is ' + cubeResult);
