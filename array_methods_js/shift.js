// Removes the first element from an array and returns it ~ opposite of pop method

const numbers = [1, 2, 3];

console.log('Array before shift', numbers)
const firstItem = numbers.shift();
console.log('Item \'shifted\': ', firstItem)
console.log('New array after shift: ', numbers)