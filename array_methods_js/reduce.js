// Executes a callback function on every elements of an array and returns a single output value
const numbers = [1, 2, 3, 4, 5, 6, 7]

function sum(accumulator, value) {
    return accumulator + value;
}

const total = numbers.reduce(sum, 0) //accumulator starts at zero ~ initial value
console.log(total)


const total2 = numbers.reduce((a, b) => a + b)
console.log('Totals using arrow functions', total2)

// Usecase: want to get the maximum value in an array 
// 'value' is stored in the 'accumulator' and used in the next iteration
function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator
    }
    return value
}
const maximum = numbers.reduce(callback, -Infinity)
console.log('The maximum value in the array is ', maximum)

//Using arrow functions
const max2 = numbers.reduce((acc, val) => {
    if (acc > val) {
        return acc
    }
    else {
        return val
    }
})
console.log('Maximum value finding using arrow functions', max2)

// Usecase2: Getting total price of all products
const products = [
    {
        name: "Laptop",
        price: 1000,
        count: 3
    },
    {
        name: "Desktop",
        price: 1500,
        count: 4
    },
    {
        name: "Phone",
        price: 500,
        count: 10
    }
];

const totalValueStore = products.reduce((acc, item) => acc + (item.price * item.count), 0);
console.log(totalValueStore);