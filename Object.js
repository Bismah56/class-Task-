//                                   OBJECT ASSIGNMENTS
let employee = {
    name: "Hassan Jafri",
    department: "Accounts",
    role: "Manager",
    contact: {
        phoneNo: 92331386976,
        email: "hassanJafri@gmail.com"
    },
    skills: ["Excel Expert", "Accounting Principals", "Software Proficiency"]
};
console.log(employee);
let car = {
    engine: {
        horsePower: 500
    },
    getHorsepower: () => {
        console.log(`The horsepower is ${car.engine.horsePower}hp.`);
    }
};
car.getHorsepower();
console.log(car);
let product = {
    name: "Round Neck T-Shirts",
    price: 400,
    color: "Black",
    inventory: {
        stock: 600,
        colorOptions: ["Black", "White", "Red"],
        changeColor: (newColor) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                product.color = newColor;
                console.log(`${newColor} is available.Have a look at it.`);
                if (newColor === "White") {
                    product.price += 0.1 * product.price;
                }
                else if (newColor === "Red") {
                    product.price -= 0.2 * product.price;
                }
                ;
            }
            else {
                console.log(`Sorry! ${newColor} is not available.Have a look at ${product.color} instead.`);
            }
            ;
        }
    }
};
product.inventory.changeColor("Red");
console.log(product);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ OBJECT, ARRAY AND FUNCTION ALL MIXED ASSIGNMENTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Assignment 1 : Building Your Friend List /////////////////////
////////////// Task: Create a program that manages a simple friend list //////////////
//////////////////////////////////////////////////////////////////////////////////////
//Defining an Object named people with empty friends array in it
let people = {
    friends: []
};
//Each friends Info
const friend1 = {
    firstName: "Laila",
    lastName: "Wasti",
    userID: "Lailadesu"
};
const friend2 = {
    firstName: "Amna",
    lastName: "Kamal"
};
const friend3 = {
    firstName: "Bisma",
    lastName: "AbdulGhaffar",
    userID: "its._Bisma"
};
//Adding these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
people.friends.forEach((friend) => { console.log(friend); });
///////////////////////////////////////////////////////////////////////////////////
///////////// Assignment 2:Manipulating an Array: Rearranging Words ///////////////
///////////////////////////////////////////////////////////////////////////////////
let scrambledArray = ["student", "a", 10, "am", false, "GIAIC", "of", 456, "I"];
let desiredArray = [];
desiredArray.push(scrambledArray[8], scrambledArray[3], scrambledArray[1], scrambledArray[0], scrambledArray[6], scrambledArray[5]);
console.log(desiredArray.join(" "));
//Reusable code for Rearranging words:
//enter the index of the item from the scrambledArray (to be arranged) in the desired order
let Idx = [8, 3, 1, 0, 6, 5];
function RearrangingItems() {
    let RearrangedArray = [];
    Idx.forEach((num) => {
        RearrangedArray.push(scrambledArray[num]);
    });
    console.log(`Here is the final sentence: ${RearrangedArray.join(" ")}`);
}
;
RearrangingItems();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// Assignment 3: Company Product Catalog /////////////////////////////////////////
//Task: Create a program to represent a product catalog using an array and perform basic queries/////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inventory = [];
const product1 = {
    name: "Miss-Rose Foundation",
    model: 200091,
    costperUnit: 1000,
    quantity: 200
};
const product2 = {
    name: "Miss-Rose Cream Concealer",
    model: 450082,
    costperUnit: 600,
    quantity: 400,
};
const product3 = {
    name: "Miss-Rose Loose Powder",
    model: 870096,
    costperUnit: 450,
    quantity: 50
};
//Adding all products in the inventory
inventory.push(product1, product2, product3);
//Accessing and logging the quantity property of the third product
console.log(`Quantity of Miss-Rose Loose Powder: ${inventory[2].quantity}`);
//Adding more properties within the product object
Object.defineProperty(product2, "expiry", { value: "3 years", enumerable: true });
console.log(`Name: ${inventory[0].name}\nCost Of One ${inventory[0].name}: ${inventory[0].costperUnit}`);
console.log(product2);
;
//Array which is a Class List
let students = [
    {
        name: "Emily",
        isSenior: false,
        assignmentDone: false
    },
    {
        name: "Amber",
        isSenior: true,
        assignmentDone: true
    },
    {
        name: "David",
        isSenior: true,
        assignmentDone: true
    },
    {
        name: "Sabrina",
        isSenior: false,
        assignmentDone: true
    },
    {
        name: "Travis",
        isSenior: false,
        assignmentDone: false
    },
    {
        name: "Barbara",
        isSenior: true,
        assignmentDone: true
    },
    {
        name: "Catherine",
        isSenior: true,
        assignmentDone: false
    },
    {
        name: "Ryan",
        isSenior: true,
        assignmentDone: true
    }
];
//Finding senior students who have completed their assignments
function findSeniorStudentsWithAssignments(Class_List) {
    let studentsFound = [];
    console.log("\nFinding students who are senior and have also done their assignments......");
    Class_List.forEach((value) => {
        if (value.isSenior === true && value.assignmentDone === true) {
            studentsFound.push(value.name);
            console.log(`${value.name} ✔`);
        }
        ;
    });
    if (studentsFound.length === 0) {
        console.log("\n              No such students found.");
    }
    ;
}
;
findSeniorStudentsWithAssignments(students);
//Class List Update:
//removing students who haven't completed their assignments
function RemovingStudentsWithIncompleteAssignments(Class_List) {
    let idxOfRemovablestudent = 0;
    let studentsToBeRemoved = Class_List.filter((val) => {
        return val.assignmentDone === false;
    });
    console.log("\nFollowing students who haven't completed their assignments have been Removed:");
    studentsToBeRemoved.forEach((val) => {
        if (students.includes(val)) {
            idxOfRemovablestudent = students.findIndex((VALUE) => {
                return VALUE == val;
            });
            students.splice(idxOfRemovablestudent, 1);
        }
        ;
        console.log(val.name, "✘");
    });
    console.log("\nHere is the Info of students who have completed their assignments:");
    console.log(students);
}
;
RemovingStudentsWithIncompleteAssignments(students);
export {};
