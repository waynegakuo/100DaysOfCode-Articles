// will search inside an array and it will return the first element for which 
// the callback function returns a truthy value. Will return undefined if callback returns falsy
const names = ['Florin', 'Tim', 'Ivan', 'Liam']

function findIvan (item){
  return item === 'Ivan'
}

const res = names.find(findIvan)
console.log(res)// Finds and returns the searched for element

const persons = [
  {
    name: 'Florin',
    age: 59
  },
  {
    name: 'Tim',
    age: 18
  },
  {
    name: 'Ivan',
    age: 26
  },
  {
    name: 'Liam',
    age: 30
  }
];

function findFlorin(person){
  return person.name === 'Florin'
}
const age = persons.find(findFlorin).age

console.log('Found Florin and his age is', age)
