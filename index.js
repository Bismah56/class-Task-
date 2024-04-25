//HOMEWORK ASSIGNMENTS:
// 1
// // Function which counts vowels in a string
function countVowels(Sentence) {
    let count = 0;
    for (const val of Sentence) {
        if (val == "a" ||
            val == "e" ||
            val == "i" ||
            val == "o" ||
            val == "u") {
            count++;
        }
    }
    ;
    return `Number Of vowels is '${count}'`;
}
;
console.log(countVowels("Earth is sphere.".toLowerCase()));
// 2
// //function checks whether a number is prime or not using recursion
let i = 2;
function isPrimeOrNot(n) {
    if (n < 2) {
        console.log(`${n} is NOT a prime number.`);
        return;
    }
    ;
    if (i < n) {
        if (n % i === 0) {
            console.log(`${n} is NOT a prime number.`);
            return;
        }
        ;
        i++;
        isPrimeOrNot(n); //Recursive condition
    }
    else {
        console.log(`${n} is a Prime number.`);
        return;
    }
    ;
}
;
isPrimeOrNot(10);
// 3
// //Function checks a string for first non-repeated character
function firstNonRepeatedChar(str) {
    for (let char of str) { //for-of loop
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return `The first non-repeated character in the string is: '${char}'`;
        }
        ;
    }
    ;
    return `The first non-repeated character in the string is: ${null}`;
}
;
console.log(firstNonRepeatedChar("aabbcdde"));
// 4
// //Function that returns the square of a number
function square(NUMBER) {
    return `Square of ${NUMBER} is '${NUMBER ** 2}'`;
}
;
console.log(square(4));
// 5
// //Function that prints hello world
function displayMessage() {
    console.log("Hello World!");
}
;
displayMessage();
export {};
