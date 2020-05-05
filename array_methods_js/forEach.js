const numbers = [1, 2, 3, 4, 5];

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {};

// function consoleItem(item, index, arr) {
//     console.log('a[' + index + ']='+ item);
// }

numbers.forEach((item, index, arr) => {
    console.log('a[' + index + ']=' + item);
})

let sum = 0

numbers.forEach(item => {
    sum += item;
})

letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1
    }
})

console.log(count);

console.log(sum)

// numbers.forEach(consoleItem);

