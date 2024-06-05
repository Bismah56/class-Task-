//////////////////////// Loops Assignments //////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//////////////////// 1. Creating a Lesson Plan(Using for loop ) /////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//Creating a blank Array
let myWork = [];

//Using a loop to create lessons
for(let i=1; i<=10; i++){

    let lesson = {
        name : `Lesson ${i}`,
        status : true
    };
    lesson.status = (i%2!==0)? true:false ;
    
    myWork.push(lesson);
};
//Printing the result:
console.log(myWork);

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// 2. Guessing Game (Using while loop ) //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

//Setting a maximum value
let maxNum = 5;

//Generating a random number:
let randomNumber = Math.floor(Math.random()*maxNum+1);
// console.log(`\nThe random no. is: ${randomNumber}`);

//Simulating user guesses which are between 1-maxNum
let userGuesses = [4,3,5,1,2];

//Tracking the users guess status
let trackingGuess = false;

//Using a while loop to iterate over the predefined guesses//
let idx = 0;
while (idx<userGuesses.length && trackingGuess===false) {
    if(randomNumber===userGuesses[idx]){
        console.log(`\nThe number user guessed is correct.`);
        trackingGuess = true;
    }
    else if (randomNumber>userGuesses[idx]){
        console.log(`\nThe number user guessed is '${randomNumber-userGuesses[idx]}' less than the system generated number.`);
        idx++;
    }
    else if (randomNumber<userGuesses[idx]){
        console.log(`\nThe number user guessed is '${userGuesses[idx]-randomNumber}' greater than the system generated number.`);
        idx++;
    };
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// 3. Counter Incrementer (Using do while loop ) ////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creating a variable counter
let counter = 0;

//Defining the step value by which the counter will increase
let step = 5;

//Adding a Do while Loop
do {
    console.log(counter);
    counter += step;
} while (counter<=100);


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// 4. Exploring Objects with for...in Loop //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Defining an Object
let myObject:any = {
    item1 : "Bat",
    item2 : "Ball",
    item3 : "Stumps"
};

//Using a for...in loop to access properties' names and values from myobject
for (const key in myObject) {
    console.log(`${key} is: ${myObject[key]}`);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// 5. Exploring Arrays with Loops(Using for & for of loops ) //////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creating an empty Array
let myArray = [];

//Runing a loop 10 times, adding a new incrementing value to the array
for (let i=1; i<=10; i++){
    myArray.push(i);
};

//Printing myArray
console.log(myArray);

//Using the for loop to iterate through the array
for(let idx=0; idx<myArray.length; idx++){
    //Printing each array element along with its index into the console
    console.log(`Index:${idx}   Value: '${myArray[idx]}'` );
};

//Using the for...of loop to output the value into the console from the array
for (const val of myArray) {
    console.log(`Value is: ${val}`);
};