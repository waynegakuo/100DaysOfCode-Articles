const containsDuplicate = function (nums) {
    let numbers = new Set()

    for (let num of nums) {
        if (!numbers.has(num)) {
            numbers.add(num)
        }
        else {
            return true;
        }
    }
    return false
};
const arr = [1, 2, 3, 1]
console.log(containsDuplicate(arr))