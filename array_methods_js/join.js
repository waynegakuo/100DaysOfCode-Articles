// Creates a new string from an array by concat'ing all the elements in that array. Uses a comma as a separator by default but you can specify what separator you want

const countries = ['Romania', 'USA', 'India']

const res = countries.join() //default
const res2 = countries.join(' - ') // dash and spaces
const res3 = countries.join(', ') // comma and space
console.log(res)
console.log(res2)
console.log('I want to visit ', res3)

