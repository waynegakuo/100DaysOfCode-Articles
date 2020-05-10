// Concat does not alter the original arrays
const a = [1, 2, 3]
const b = [4, 5, 6]
const d = [7, 8, 9]

const c = a.concat(b, d, 10, 11, 12);

// Sneaked in spread operator
const e = [...a, ...b, ...d]

console.log('New array after concat', c)

console.log('Using spread operator', e)