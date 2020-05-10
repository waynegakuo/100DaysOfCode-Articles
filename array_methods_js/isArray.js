// Creates a new shallow copied array from an array-like or iterable object

const str = '1234567';

// we want [1, 2, 3, 4, 5, 6, 7]

// const res = Array.from(str) // result ['1', '2', '3','4', '5', '6','7']
// gives array of numbers but are in string format ~ we can use a map function for that and pass it as a second parameter
function mapFn (x) {
  return Number(x)
}
// const res = Array.from(str, mapFn)
// const res = Array.from(str).map(x => Number(x))
const res = Array.from(str, Number)
console.log(res) 

// Usecase: removing duplicates from an array
const numbers = [1, 2, 3, 4, 5, 4, 3, 5, 7, 8, 10, 9]; // works with strings too

const result = Array.from(new Set(numbers));
//set alone creates a set and not an array
console.log(result)