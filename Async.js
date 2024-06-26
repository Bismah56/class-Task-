////////////////////////////////////////////////////////////////////////
//////////////////////////// ASSIGNMENT ////////////////////////////////
////////////////////// Topic: Asynchronous /////////////////////////////
//Question 1 
const fetchGreeting = () => {
    return setTimeout(() => {
        console.log("Assalam O Alaikum Everyone!");
    }, 2000);
};
// fetchGreeting();
//Question 2
function simulateTask() {
    console.log("Task Started.......");
    setTimeout(() => {
        console.log("Task Completed!");
    }, 1000);
}
;
// simulateTask();
//Question 3
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         console.log("Fetching data.........");
//         setTimeout(() => {
//             resolve("Data fetched successfully!");
//         }, 1000);
//     });
// };
// fetchData()
// .then((result)=>{
//     console.log(result);
// });
//Question 4
function fetchWithError() {
    let randomNo = Math.floor(Math.random() * 2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNo === 0) {
                resolve("Data Fetched Successfully!");
            }
            else {
                reject("Data Fetch Failed!");
            }
        }, 2000);
    });
}
;
// fetchWithError()
// .then((res)=>{
//     console.log(res);
// })
// .catch((Err)=>{
//     console.log(Err);
// });
//Question 5
function fetchdata() {
    return "Data";
}
;
function processData(Id) {
    return `<${fetchdata()}: ${Id}>`;
}
;
function executeSequentially() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("done");
        }, 2000);
    });
}
;
console.log("Fetching data.........");
executeSequentially()
    .then(() => {
    console.log(fetchdata());
    console.log("Processing data...");
    setTimeout(() => {
        console.log(processData(10));
    }, 2000);
});
export {};
