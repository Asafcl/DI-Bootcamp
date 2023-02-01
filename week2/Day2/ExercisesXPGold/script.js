// excersice 1





// EXERCISE 2

let sentence = ["my","favorite","color","is","blue"];

// console.log(sentence.toString());
// console.log(sentence.join());
// console.log(sentence.join(' '));

console.log(`${sentence[0]} ${sentence[1]} ${sentence[2]} ${sentence[3]} ${sentence[4]} `);
sentence = (`${sentence[0]} ${sentence[1]} ${sentence[2]} ${sentence[3]} ${sentence[4]} `);
console.log(sentence);

// 


// 1.Create 2 variables. The values should be strings. For example:

let str1 = "mix";
let str2 = "pod";


// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let changeLet = str1.slice(0,2) + str2.slice(2,3);
str1 = str2.slice(0,2) + str1.slice(2,3);
str2 = changeLet;

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let newString = (`${str1} ${str2}`)

// 4. Finally console.log the new concatenated string.
console.log(newString)


// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// 1. Prompt the user for the first number.
let num1 = prompt("ingrese numero");
console.log(num1);
// 2. Store the first number in a variable called num1.

// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?

// 3. Prompt the user for the second number.

// 4. Store the second number in a variable called num2.

// 5. Create an Alert where the value is the SUM of num1 and num2.

// 6. BONUS: Make a program that can subtract, multiply, and also divide!

