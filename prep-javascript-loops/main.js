// While loops
function whileLoop1() {
  const newArray = [];
  let index = 0;

  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const newArray = [];
  let index = 0;

  while (index < 10) {
    newArray.push(index * 2);
    index++;
  }
  return newArray;
}

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

// For loops
function forLoop1() {
  const newArray = [];

  for (let index = 0; index < 10; index++) {
    newArray.push(index);
  }
  return newArray;
}

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time to explosion: ' + index);
  }
}

forLoop2();

// For...in loops
const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray = [];

  for (let propertyName in object) {
    newArray.push(propertyName);
  }
  return newArray;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const newArray = [];

  for (let key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
