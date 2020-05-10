// indexOf -> returns the first index at which a given element can be found in an array
// lastIndexOf -> returns the last index from the end of the array

const names = ['Wayne', 'Nick', 'Florin', 'Fury', 'Wayne']

console.log(names.indexOf('Fury'))

// Use case: wanna swap sth in an array but you'd first want to know the index
const idx = names.indexOf('Nick')

// if -1, means doesn't exist
if (idx > -1) {
    console.log('The user exists')
}
else {
    console.log('User does not exist')
}

names[idx] = 'Jay' // swap/replace
console.log(names)

console.log('Last index of provided user name ', names.lastIndexOf('Wayne'))
