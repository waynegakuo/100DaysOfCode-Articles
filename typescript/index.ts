let nm: number

nm = 2

function add(a:number, b: number){
    return a+b;
}
let res = add(12, 12);
console.log(res)

let students = [];

students = ['Wayne', 'Kisingo', 'Gakuo']

for(const i of students){
    console.log("Students", i)
}

enum Role {
    "Student",
    "Admin"
}


enum Colors {
    Blue ="Blue",
    Red = "Red",
    Yellow = "Yellow"
}

// Use "tsc file_name" to transpile

// Use "node file_name.js" to get info on terminal