// Default sort order is ascending

// Sort converts elements to string and checks for the UTF-16 unit code values

const numbers = [74, 18, 10, 5, 84, 24]
function compareFunction(a, b) {
    // 1. < 0 ... a becomes first
    // 2. 0 ...nothing  will change
    // 3. > 0 ... be comes first
    return a - b;
}
// const newNums = numbers.sort();
// result [ 10, 18, 24, 5, 74, 84 ] ~ reason in the description of what sort() does

const newNums = numbers.sort(compareFunction)
// const newNums = numbers.sort((a, b) => a-b);
console.log(newNums);

const names = ['Florin', 'Wayne', 'Jai', 'Noah']
const newNames = names.sort();
console.log("New names array", newNames)


const products = [
    {
        name: "Laptop",
        price: 1000,
    },
    {
        name: "Desktop",
        price: 15000,
    },
    {
        name: "Phone",
        price: 500,
    }
];

products.sort((a, b) =>
    a.price - b.price
)

console.log('Sorted products based on price', products)
