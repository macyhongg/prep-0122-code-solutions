const person = {
  firstName: 'Macy',
  lastName: 'Hong',
  hobby: 'napping'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s full name: ' + fullName);

person.job = 'Teacher at Jeffrey Trail MS';
console.log('This person\'s current job is: \n', person.job);

person.previousJob = 'Teacher at Northwood HS';
console.log('This person\'s previous job was: \n' + person.previousJob);

console.log('The complete person object: \n', person);
