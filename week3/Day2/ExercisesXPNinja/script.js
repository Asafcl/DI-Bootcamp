//Ejercicio 1: Evaluación

5 >= 1  // true, 5 is greater than 1 
0 === 1 // false, 0 isnt iqual to 1
4 <= 1  // false, 4 isnt less than 1
1 != 1  // false, 1 isnt diferet than 1
"A" > "B"  //false, A isnt greater than B
"B" < "C"  //true, B is less than C
"a" > "A"  //true, a is greater than A
"b" < "A"  //false, b isnt less than A
true === false //false, true isnt equal to false
true != true  //false, true isnt different from true




// Exercise 2 : Ask For Numbers

// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods


let numbers123 = prompt("ingrese numeros separados por coma( , )");
let sum = reduce(numbers123);
// if(numbers123.length!=NaN){
//     for (let i; i<numbers123.length && numbers123 !=',';i++){
//         let num=numbers123[i];
//     }


// }
console.log(num);
console.log(numbers123);


// Exercise 3 : Find Nemo

// 1. Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// 2. Find the word “Nemo”
// 3. Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// 4. If you can’t find Nemo, console.log “I can’t find Nemo”.




// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
