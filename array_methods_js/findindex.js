// similar to find method: difference is that this method will find the element and return its index

/**
 *  Similarity with find method which says ~ it'll search inside an array and it will return the first element for which 
 * the callback function returns a truthy value. Will return undefined if callback returns falsy
 */

const numbers = [1, 2, 3, 4]

function findThree(value) {
    return value === 3;
}

const res = numbers.findIndex(findThree)

console.log('Found three and its index is ', res)