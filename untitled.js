import inquirer from "inquirer";
//Task1: Miles-to-Kilometers Converter (Operators):
//Creating a variable named miles
let miles = 150;
//Converting miles into kilometers 1 mile = 1.60934 kilometer
let convertedDistance = miles * 1.60934;
//Storing converted distance in Kilometer variable
let kilometer = convertedDistance;
console.log(`\nThe distance of ${miles} miles is equals to ${kilometer} kilometers.`);
// Task2: Evaluating a number game:
//Dynamic number value
let dynamicNumber = Math.floor(Math.random() * 10 + 1);
//Prompting User to enter a number
let userNumber = await inquirer.prompt({
    type: "number",
    name: "answer",
    message: "Enter a number between 1-10: "
});
//Printing Output Using If-Else statement
if (userNumber.answer === dynamicNumber) {
    console.log(`\nThe number you guessed is exactly EQUAL to '${dynamicNumber}' the system generated number.`);
}
else if (userNumber.answer > dynamicNumber) {
    console.log(`\nThe number you guessed is ${userNumber.answer - dynamicNumber} GREATER than '${dynamicNumber}' the system generated number.`);
}
else if (userNumber.answer < dynamicNumber) {
    console.log(`\nThe number you guessed is ${dynamicNumber - userNumber.answer} LESSER than '${dynamicNumber}' the system generated number.`);
}
;
// Task3: Friend checker game:
//List of known friends
let friendsName = ["Amaan", "Bismah", "Faiza", "Sahar", "Tabish"];
//Prompting User to enter a name
let userName = await inquirer.prompt({
    type: "input",
    name: "answer",
    message: "Enter a friends name: "
});
//Printing Output Using Switch statement
switch (true) {
    case (friendsName.includes(userName.answer)):
        console.log(`\n"${userName.answer}" is a known friend.`);
        break;
    default:
        console.log("\nEnter a valid friend name.");
        break;
}
;
//Task4: Functions:
// //Declaring two different variables
let num1 = 5;
let num2 = 4;
// //Creating a Print arrow function
const Print = (NUM1, NUM2) => {
    return `\n${NUM1} & ${NUM2} are the first and second number respectively.`;
};
// //Calling the Print function
let output1 = Print(num1, num2);
console.log(output1);
// //Second call
let output2 = Print(7, 3);
console.log(output2);
//Task5: Calculator project using function:
//Setting Up Variables 
let firstNumber = 48;
let secondNumber = 2;
let Operator = "+";
//Calculator function
function Calculator(value1, value2, operator) {
    if (operator === "+") {
        return `The sum is ${value1 + value2}`;
    }
    else if (operator === "-") {
        return `The difference is ${value1 - value2}`;
    }
    else if (operator === "*") {
        return `The product is ${value1 * value2}`;
    }
    else if (operator === "/") {
        return `The quotient is ${value1 / value2}`;
    }
}
;
let finalValue = Calculator(firstNumber, secondNumber, Operator);
console.log(finalValue);
//Updating Operator
Operator = "/";
finalValue = Calculator(firstNumber, secondNumber, Operator);
console.log(finalValue);
//Task6: Anonymous functions:
//Assigning a function expression to a variable
let Greeting = function (name) {
    console.log(`Assalam o Alaikum ${name}!`);
};
Greeting("Alina");
//Normal function declaration
function greeting(Name) {
    console.log(`Assalam o Alaikum ${Name}!`);
}
;
greeting("Ayeza");
