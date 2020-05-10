// Executes a given function on the elements of an array and returns true 
// if the callback function returns a truthy value for AT LEAST ONE element inside of the array. 
// If falsy, then returns false

const numbers = [1, 2, 3, 4, 5]

function greaterThanFour(item){
  return item > 4
}
const res = numbers.some(greaterThanFour)
console.log(res)


// Use case: you want to check if at least one person is an adult
const persons = [
  {
    name: 'Tim',
    age: 30
  },
  {
    name: 'Jay',
    age: 24
  },
  {
    name: 'Nick',
    age: 10
  }
]

function isAdult(person){
  return person.age >= 18
}

const result = persons.some(isAdult)
console.log('Is there at least an adult? ', result)