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


// let numbers123 = prompt("ingrese numeros separados por coma( , )");
// let num = numbers123.split(',')
// let sum = 0

// for(i=0;i<num.length;i++){
//     sum +=Number( num[i])
// }

// console.log(sum);



// Exercise 3 : Find Nemo

// 1. Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// 2. Find the word “Nemo”
// 3. Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// 4. If you can’t find Nemo, console.log “I can’t find Nemo”.


// const palabra = prompt('ingrese una oracion que contenga Nemo')

// let indexNemo = palabra.indexOf('nemo')

// if(indexNemo>=0){
//     console.log("I found Nemo at the position " + indexNemo)
// }else
// console.log ('I can’t find Nemo')





// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

let num = prompt('enter a number')
num = Number(num)


if( num < 2){
    console.log('boom')
}
if(num > 2){
    var num2 = String(num)
    for (i=0;i<num;i++){
        num2 = num2 + 'o'  
    }
    console.log((num2))
}
if(num%2===0){
    let num3 = num2 +'!'
    console.log(num3)
}   
if(num%5===0){
    let num4 = num2.toUpperCase()
    console.log(num4)
}
if (num%2 === 0 && num%5===0){
     let num5 = num2
     num5 = num5.toUpperCase() + '!'
     console.log(num5)
    
}