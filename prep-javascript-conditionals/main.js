// 01 Define a function named isAdult
function isAdult(age) {
  return age >= 18;
}

// 02 Test the isAdult function
const isAdultResult = isAdult(17);
console.log('The result should be false, is it? ' + isAdultResult);

// 03 Define a function named didStudentPass
function didStudentPass(score) {
  return score >= 70;
}

// 04 Test the didStudentPass function
const didStudentPassResult = didStudentPass(70);
console.log(
  'The result of if the student passed should be true, is it? ' +
    didStudentPassResult
);

// 05 Define a function named gradeCalculator
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

// 06 Test the gradeCalculator function
const gradeCalculatorResult = gradeCalculator(84);
console.log('The student got a grade of ' + gradeCalculatorResult);

// 07 Define a function named seasonMessenger
function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

// 08 Test the seasonMessenger function
const seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult);

// 09 Define a function named dayDetector
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

// 10 Test the dayDetector function
const dayDetectorResult = dayDetector('monday');
console.log(dayDetectorResult);
