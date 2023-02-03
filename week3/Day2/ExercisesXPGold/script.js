// excersice 1





// EXERCISE 2

let sentence = ["my","favorite" , "color","is","blue"];

// console.log(sentence.toString());
// console.log(sentence.join());
// console.log(sentence.join('+'));
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
let newString = (`${str1} ${str2}`);

// 4. Finally console.log the new concatenated string.
console.log(newString);

// let str1 = "mix";
// let str2 = "pod";


// let str1FirstTwo = str1.slice(0,2);
// let str2FirstTwo = str2.slice(0,2);
// console.log(str1FirstTwo);
// console.log(str2FirstTwo);

// str1 = str1.replace(str1FirstTwo, str2FirstTwo);
// str2 = str2.replace(str2FirstTwo, str1FirstTwo);
// console.log(str1)
// console.log(str2)

// let newWord = str1 + " " + str2;
// console.log(newWord);


// example
let firstWord = "Hello";
let secondWord = "World";

let changeword = firstWord.slice(0,2);

    firstWord = (secondWord.slice(0,2) + firstWord.slice(2,5));
    secondWord= changeword + secondWord.slice(2,5);
    console.log(`${firstWord} ${secondWord}`);
// ver la sentencia .replace


// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// 1. Prompt the user for the first number.

// 2. Store the first number in a variable called num1.

// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?

// 3. Prompt the user for the second number.

// 4. Store the second number in a variable called num2.

// 5. Create an Alert where the value is the SUM of num1 and num2.

// 6. BONUS: Make a program that can subtract, multiply, and also divide!

// let num1 = parseFloat(prompt("ingrese primer numero"));
// let num2 = parseFloat(prompt('ingrese segundo numero'))
// let sum = num1 + num2;
// alert('the sum of ' + num1 + ' + ' + num2 + ' = ' + sum);

let num1 = parseFloat(prompt("ingrese primer numero"));
let num2 = parseFloat(prompt('ingrese segundo numero'));
let operation = prompt('enter the operation you want to perform: +, -, *, /')
let result;


if(typeof num1 === 'number' && typeof num2 === 'number'){
switch (operation){
    case '+':
        result=num1 + num2;
        break;
        case '-':
        result=num1 - num2;
        break;
        case '*':
        result=num1 * num2;
        break;
        case '/':
        result=num1 / num2;
        break;
        
        }
    
    }
    if (result){
        console.log('Result: ' + result);
    }
    else {
        console.log('invalid operation');
    }

    



