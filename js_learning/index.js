// Using Array.prototype.forEach()
export const greetStudents = (arr) => {
    arr.forEach(i => {
        console.log("Hi ", i)
    });
};


// Using Array.prototype.map()
export const ageMutliplier = (arr) => {
    const newArray = arr.map(x => x * 2)
    console.log("New ages array ", newArray);
};