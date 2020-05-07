// Changes an array by removing or replacing existing elements from it
// gets a starting indexed, a CountQueuingStrategy, meaning how many elements you wanna 
// remove and it can also get optionally new elements  which will be placed inside the array

const numbers = [1, 2, 3, 4, 5];

// Remove the last 3 elements from the array:
// Index starting from and the number of items to remove
const deleted = numbers.splice(2, 3)

console.log(numbers)
console.log("Deleted numbers: ", deleted)

// Adding new elements in place of those deleted
const numbers2 = [1, 2, 3, 4, 5];

const newNumbers = numbers2.splice(2, 3, 6, 7)

console.log('New array of numbers after deleting and replacing: ', numbers2)

// Adding new elements to the array without deleting
const numbers3 = [1, 2, 3, 4, 5]
const nums3 = numbers3.splice(2, 0, 6, 7)
console.log('adding elements without deleting: ', numbers3)