/////////////////////////////       ASSIGNMENTS OF ARRAY        ///////////////////////////////
//Ques 1
let fruits = ["Apple", "Banana", "Mango", "Orange"];
//Ques 2
let Numbers = [10, 20, 30, 40];
//Ques3
let third_Fruit = fruits[2];
//Ques4
//First Way updating value of index 1
Numbers[1] = 25;
//other way with splice method
Numbers.splice(1, 1, 25);
//Ques5
fruits.push("Grape");
//Ques6
let last_fruit = fruits.pop();
//Ques7
let first_fruit = fruits.shift();
//Ques8
fruits.unshift("Kiwi");
//Ques9
//Removing elements through splice method
fruits.splice(1, 2);
//Ques10
//Inserting TWO new elements at index 2
fruits.splice(2, 0, "Pineapple", "Pear");
//Ques11
let citrusFruits = fruits.slice(0, 2);
//Ques12
let lastTwoFruits = fruits.slice(-2);
// Creating an array with selectedStudents of Products in it
let products = [
    {
        name: "Camel Coat",
        price: 8000,
        selectedColor: "Black",
        inventory: {
            stock: 300,
            availableColors: ["Black", "Green", "Red", "NavyBlue"]
        }
    },
    {
        name: "Leather Jacket",
        price: 4500,
        selectedColor: "Pink",
        inventory: {
            stock: 100,
            availableColors: ["Pink", "Mocha", "Lavender", "Biege", "Teal", "Brown"]
        }
    },
    {
        name: "Woolen Sweater",
        price: 2500,
        selectedColor: "Yellow",
        inventory: {
            stock: 160,
            availableColors: ["Yellow", "Grey", "Lavender"]
        }
    }
];
//Implementing Function and Logic to manage selectedStudent manipulation effectively
function changeColor(productName, color) {
    if (products.some((element) => { return productName === element.name; })) {
        console.log(`\n${productName} is available.Following are the details: \n`);
        let selectedProduct = products.find((element) => { return productName === element.name; });
        //updating the selectedColor property and the price property in accordance with the Color
        if (selectedProduct?.inventory.availableColors.includes(color)) {
            selectedProduct.selectedColor = color;
            let index = selectedProduct.inventory.availableColors.findIndex((val) => { return val === color; });
            if (index === 0) {
                selectedProduct.price = selectedProduct.price;
            }
            else if (index > 0 && index <= 2) {
                selectedProduct.price = selectedProduct.price * 1.2;
            }
            else if (index > 2 && index <= 4) {
                selectedProduct.price = selectedProduct.price * 1.4;
            }
            else {
                selectedProduct.price = selectedProduct.price * 1.6;
            }
        }
        else {
            console.log(`Sorry! ${color} color is not available for ${selectedProduct?.name}.\n\nHave a Look at ${selectedProduct?.selectedColor} color instead.\n`);
        }
        ;
        //Displaying the Products details
        console.log(`Name: ${selectedProduct?.name}`);
        console.log(`Price: Rs.${selectedProduct?.price}/-`);
        console.log(`Color: ${selectedProduct?.selectedColor}`);
        console.log(`Stock: ${selectedProduct?.inventory.stock}`);
        console.log(`Available Colors: ${selectedProduct?.inventory.availableColors}`);
    }
    else {
        console.log(`\nSorry! ${productName} is not available at the store.`);
    }
    ;
}
;
//Invoking the function
changeColor("Camel Coat", "NavyBlue");
changeColor("Leather Jacket", "Brown");
changeColor("Woolen Sweater", "Grey");
// Creating an array with selectedStudents of Students in it
let students = [
    {
        name: "Ibrahim",
        marks: [55, 60, 88, 92, 72]
    },
    {
        name: "Bilal",
        marks: [67, 88, 90, 98, 75]
    },
    {
        name: "Maria",
        marks: [53, 89, 95, 49, 77]
    },
    {
        name: "Aman",
        marks: [66, 87, 59, 69, 70]
    }
];
//Implementing Function and Logic to manage students grades effectively
function calculateAverageGrade(studentName) {
    if (students.some((student) => { return studentName === student.name; })) {
        let selectedStudent = students.find((element) => { return studentName === element.name; });
        //Calculating Average of students
        let SumOfMarks = selectedStudent?.marks.reduce((prev, curr) => {
            let sum = (prev + curr);
            return sum;
        });
        let averageOfStudents = SumOfMarks / (selectedStudent.marks.length);
        selectedStudent.AverageGrade = averageOfStudents;
    }
    else {
        console.log(`\nSorry!! student named ${studentName} does not exist\n.`);
    }
    ;
}
;
calculateAverageGrade("Aman");
calculateAverageGrade("Maria");
calculateAverageGrade("Bilal");
calculateAverageGrade("Ali");
//Iterating through students array
students.forEach((val) => { console.log(`\nName: ${val.name}\nAverage Grade: ${val.AverageGrade}\n`); });
let employees = [
    {
        name: "Zeeshan",
        hoursWorked: 18,
        hourlyRate: 250,
        salary: 0
    },
    {
        name: "Haider",
        hoursWorked: 20,
        hourlyRate: 300,
        salary: 0
    },
    {
        name: "Ayesha",
        hoursWorked: 15,
        hourlyRate: 500,
        salary: 0
    },
    {
        name: "Rameen",
        hoursWorked: 40,
        hourlyRate: 1000,
        salary: 0
    }
];
function calculateSalariesAndBonus(EmployeeName) {
    if (employees.some((element) => { return EmployeeName === element.name; })) {
        let EMPLOYEE = employees.find((Element) => { return EmployeeName === Element.name; });
        //calculating salary & bonus of 10% and updating salary
        if (EMPLOYEE?.hoursWorked >= 20) {
            let SALARY = (EMPLOYEE?.hourlyRate * EMPLOYEE?.hoursWorked) * 1.1;
            EMPLOYEE.salary = SALARY;
            console.log(`The salary of ${EMPLOYEE.name} is ${EMPLOYEE.salary} with 10% of Bonus inclusive.`);
        }
        else {
            let SALARY = EMPLOYEE?.hourlyRate * EMPLOYEE?.hoursWorked;
            EMPLOYEE.salary = SALARY;
            console.log(`The salary of ${EMPLOYEE.name} is ${EMPLOYEE.salary}.`);
        }
        ;
    }
    else {
        console.log(`Sorry! ${EmployeeName} named employee doesn't exist.`);
    }
    ;
}
;
calculateSalariesAndBonus("Rameen");
export {};
/////////////////////////////////////////////////~~~~~~~~~~~~~~THE END ~~~~~~~~~~~~~~////////////////////////////////////////////
