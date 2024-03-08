const person = {
  firstName: 'Christy',
  lastName: 'Pessagno',
  hobby: 'Photography',
};

console.log(person);

// Part 2
const fullName =
  "The person's name is: " + person.firstName + ' ' + person.lastName;

console.log(fullName);

// Part 3
person.job = 'Filmmaker';
const job = "The person's job is: " + person.job;

console.log(job);

// Part 4
person['previousJob'] = 'Editor';
const prevJob = "The person's previous job was: " + person['previousJob'];

console.log(prevJob);

// Part 5
console.log(person);
