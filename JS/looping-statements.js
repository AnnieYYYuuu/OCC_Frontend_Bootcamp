// Looping statements - repeatedly execute a block of codes until a specific condition is met
// Use to automate repetitive task

// loops: for loop
for (let i = 1; i <= 5; i ++) {
    console.log('Count:', i);
}

// loops: while loop
//  Checks condition first before executing statements
let count = 1;
while (count <= 5) {
    console.log("My count:", count);
    count ++;
};

//Loops: do-while-loop
// Executes statements once then checks the condition if it will continue
let a = 1;
do {
    console.log("Do while count:", a);
    a++;
} while (a <=5 );