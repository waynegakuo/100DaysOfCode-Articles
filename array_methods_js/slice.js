// returns a shallow copy of a portion of an array: it won't modify the original array it's called upon- you can provide the beginning & ending indices

const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1, 4);

console.log(numbers2)// last index is not included

console.log(numbers) // no change in original array

const numbers1 = numbers.slice()
console.log('Shallow copy', numbers1);

const numbers3 = numbers.slice(-3); // want the last 3 items in the array
console.log(numbers3)

const numbers4 = numbers.slice(1) //get all items from an index
console.log(numbers4);


const participants = ['Florin', 'Ivan', 'Liam', 'Jai', 'Patrick'];
const winners = participants.slice(0, 3);
console.log(winners); // value of the ending index not included