const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Multiplying items by their indices in an array and putting them in a new array using map
function multiply(value, index, arr) {
    return value * index;
}
const numbersMultiplied = numbers.map(multiply);
console.log("Mapping multiplication", numbersMultiplied);



// Doubling items in an array and putting them in a new array using map
function double(value, index, arr) {
    return value * 2;
}
const numbersDouble = numbers.map(double);
console.log("After mapping", numbersDouble);



// Mapping items from an array while picking specific properties
const products = [
    {
        name: "Laptop",
        price: 1000,
        count: 5
    },
    {
        name: "Desktop",
        price: 15000,
        count: 2
    },
    {
        name: "Phone",
        price: 500,
        count: 10
    }
];
const totalProductsValue = products.map(item => ({ // returning an array of objects
    name: item.name,
    totalValue: item.price * item.count
}));

console.log('Finding total prodcuts value using mapping', totalProductsValue);


// Changing strings to numbers using map
const strNum = ['1', '2', '3', '4', '5']
const numbersChange = strNum.map(Number);

console.log('Changing string to numbers using Map', numbersChange)
