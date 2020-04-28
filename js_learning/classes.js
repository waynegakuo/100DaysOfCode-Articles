class Person {
    constructor() {
        this.names = []
    }

    addNames(username) {
        this.names.push(username);
    }

    printNames() {
        console.log("Names in the array", this.names.length);
        for (let name of this.names) {
            console.log(name);
        }
    }
}

var BOOK_API = "https:://some.url/api";

function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "Wayne",
            "Jeremiah",
            "Whitney",
            "Clerah"
        ]);
    }, 500);
}


function loadNames(thePeople) {
    fakeAjax(BOOK_API, function onNames(peopleNames) {
        for (let name of peopleNames) {
            thePeople.addNames(name);
        }
        thePeople.printNames()
    });
}

var students = new Person();

loadNames(students);


