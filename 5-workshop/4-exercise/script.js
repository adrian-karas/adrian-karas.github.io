// <<<<<<<<<< Condition >>>>>>>>>>>>

// let a = 7;
// if (a < 5) {
//   console.log(a / 2);
// } else {
//   console.log(a * 2);
// }

// What will be printed if we run the previous code snippet?
// 14

// What should be changed to get 1 printed to the console?
// let a = 7;
// if (a < 5) {
//   console.log(a / 2);
// } else {
//   console.log(a % 2);
// }

// <<<<<<<<<< Loops >>>>>>>>>>>>

// Create a loop which prints the numbers from 0-9.
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Change the previous loop to print the numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print the even numbers between 0 and 20.
// for (let i = 0; i <= 10; i++) {
//     console.log(i * 2);
// }

// <<<<<<<<<< Functions >>>>>>>>>>>>

// Use your previous for loops and create a function which print the first N numbers.

// let printNumbersTill = x => {
//     console.log(1);
//     for (let i = 1; i <= x; i++) {
//         console.log(i);
//     }
// }
// printNumbersTill(20);
// printNumbersTill(15);

// Create a function which gets a name as parameter and then returns a greeting to the specified person.

// let getGreetingTo = name => {
//     return "'Hello " + name + "!'";
// }

// getGreetingTo('Mark');
// console.log(getGreetingTo('Mark'));

// <<<<<<<<<< For loops and arrays >>>>>>>>>>>>

// Create a function which gets an array as parameter and prints each value from it.

// let printValues = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     };
// }

// printValues([0, 3, 6, 7, 9]);

// Change your previous printValues function to use forEach loop.

let myNumbers = [0, 3, 6, 7, 9];

myNumbers.forEach((number) => {
    console.log(number);
});