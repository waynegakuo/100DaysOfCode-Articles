// creates a new array by removing all the elements for which the callback function returns a falsy value

// Getting even numbers
const numbers = [1, 2, 3, 4, 5];
function isEven(value) {
  return value % 2 === 0;
}

const even = numbers.filter(isEven);

console.log(even);

// Need only people within a certain age condition/range
const people = [
  {
    name: 'Florin',
    age: 26
  },
  {
    name: 'Ivan',
    age: 18
  },
  {
    name: 'Ken',
    age: 15
  }
];
const adults = people.filter(person => {
  return person.age >= 18
});
console.log(adults);


// Removing duplicates using filter method
const nums = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
const refineNums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
})
console.log('Removing duplicates', refineNums);