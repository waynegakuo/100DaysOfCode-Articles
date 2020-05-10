// creates a new array with all the subarrays elements concatinated into it. It works recursively upto the specified depth
const arr = [1, [2, [3, [4, [5]]]]];

// we want [1, 2, 3, 4]

// const res = arr.flat() // result: [ 1, 2, [ 3, [ 4 ] ] ]
// It removed one array because we didn't specify the depth ~ how deep inside to go

// const res = arr.flat(3) //specified depth
const res = arr.flat(Infinity) // will work with whichever the depth is
console.log(res)