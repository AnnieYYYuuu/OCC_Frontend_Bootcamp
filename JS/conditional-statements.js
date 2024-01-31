// Control Flow Structures

// Conditional Statement - Allows you to execute different block of codes based on a condition

// Conditionals - if Statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.")
} else {
    console.log('You are not eligible to vote.')
}

// if-else statement (Multiple conditions)
let temperature = 25;
if ( temperature < 0) {
 console.log("It is freezing!")
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is cold outside.")
} else {
    console.log("It is a warm day.")
}

// Conditionals - switch statement
let day = "Friday";
switch (day) {
    case 'Monday':
        console.log('Start of the week!');
        break;
    case 'Friday':
        console.log('End of weekdays!');
        break;
    default:
        console.log('It is a regular day!');
        break;
}