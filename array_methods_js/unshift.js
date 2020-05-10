// Adds one or more elements at the beginning of the array and returns the new length of the array ~opposite of push

const numbers = [1, 2, 3]

const total = numbers.unshift(0, -1); // adding parameters starting with the last one
console.log(numbers);
console.log('Length of new array: ', total);