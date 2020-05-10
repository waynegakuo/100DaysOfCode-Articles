// Fill method changes all the elements in an array with a provided value & returns array modified

const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.fill(0);
console.log('After filling with zero', newNumbers);

const num2 = [1, 2, 3, 4, 5]
const newNum2 = num2.fill(0, 1, 4) // filling zeros from index one to the 4th index not included
console.log('Filling zeros with indices', newNum2)

function fillInNumbers(n) {
    // returns an array of length n, fill it initially with values of zero, then map elements and changing those values by taking their index and add 1
    return Array(n).fill(0).map((_, idx) => idx + 1)
}
console.log(fillInNumbers(10))