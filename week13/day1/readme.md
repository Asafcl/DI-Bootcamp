<!-- myModule.js -->

<!-- funtion sayHello(){
    console.log('hello')
}

module.exports ={
    sayHello: sayHello
} -->

<!-- main.js -->

<!-- const myModule = require('./myModule.js')

myModule.sayHello() -->




<!-- exercise2 -->
<!-- math.js -->

<!-- function add(a+b){
    return a+b
}

function substract(a-b){
    return a-b
}

module.exports = {
    add: add,
    subtract: subtract
} -->

<!-- main.js -->

<!-- const math = require('./math.js')

console.log(math.add(5,3))
console.log(math.subtract(5,3)) -->


<!-- exercise -->
<!-- Four Node.js and modules, exercises -->

<!-- mathUtils.js -->

<!-- module.exports.sum =  function(a,b){
    return a+b
} -->

<!-- main.js -->

<!-- const mathUtils = require('./mathUtils.js')

const sumResult = matUtils.sum(5,7)
console.log(sumResult) -->



<!-- exercise -->

<!-- StringUtils.js -->

<!-- module.exports.reverseString = function(str){
    return str.split('').reverse().join('')
} -->

<!-- main.js -->

<!-- const stringUtils = require('./stringUtils.js)
const reverseUtils = stringUtils.reverseString('hello world')
console.log(reverseString) output !dlrow olleh-->



<!-- exercise 
Create a module named "calculator" that exports multiple functions, 
including "add", "subtract", "multiply", and "divide," which perform the corresponding operations 
on two numbers. Write a Node.js program that uses this module to perform arithmetic calculations.-->

<!-- calculator.js -->

<!-- module.exports.add = function(a,b){
    a+b
}
module.exports.subtract = function(a,b){
    a-b
}
module.exports.multiply = function(a,b){
    a*b
}
module.exports.divide = function(a,b){
    a/b
} -->

<!-- main.js -->

<!-- const calculator = require('./calculator.js')

const additionResult = calculator.add(5,3)
console.log(additionResult)

const subtractResult = calculator.subtract(20,8)
console.log(subtractResult)

const multiplyResult = calculator.multiply(5,4)
console.log(multiplyResult)

const divideResult = calculator.divide(20,5) 
console.log(divideResult)-->


<!-- exercise -->

<!-- randomUtils.js -->

<!-- module.exports.generateRandomNumber = function(min,max){
    return Math.floor(Math.random()*(max - min + 1))
} -->

<!-- main.js -->

<!-- const randomUtils = require('./randomUtils.js')

constrandomNumber = randomUtils.generateRandomNumber(1,10)
console.log(randomNumber) -->




<!-- exercise -->

<!-- mathUtils.js -->

<!-- module.exports.sum = functions(a,b){
    return a+b
} -->


<!-- <!DOCTYPE html>
<html lang="en">
<head>
<title>Exercise 1</title>
<script src='main.js' type='module'></script>
</head>
<body>
<h1>Exercise 1</h1>
<p id='result'></p>
</body>
</html> -->

<!-- main.js -->

<!-- const mathResult = require('./mathUtils.js)

const sumResult = mathUtils.sum(5,7)
document.getElementById('result').textContent = sumResult -->




<!-- exercise 2 -->


<!-- stringUtils.js -->

<!-- module.exports.reverseString = functions(str){
    return str.split('').reverse().join('')
} -->

<!-- index.html -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
<title>Exercise 2</title>
<script src='main.js' type='module' defer></script>
</head>
<body>
<h1>Exercise 2</h1>
<p id='result'></p>
</body>
</html> -->

<!-- main.js -->

<!-- const stringResult = require('./stringUtils.js)

const reverseString = stringUtils.reverseString('hello world')
document.getElementById('result').textContent = reverseString -->


<!-- exersice -->

 <!-- <!DOCTYPE html>
<html lang="en">
<head>
<title>Exercise 3</title>
<script src='main.js' type='module' defer></script>
</head>
<body>
<h1>Exercise 3</h1>
<p id='addition'></p>
<p id='subtraction'></p>
<p id='multiplication'></p>
<p id='division'></p>
</body>
</html> -->


<!-- calculator.js -->

<!-- module.exports.add = function(a,b){
    a+b
}
module.exports.subtract = function(a,b){
    a-b
}
module.exports.multiply = function(a,b){
    a*b
}
module.exports.divide = function(a,b){
    a/b
} -->

<!-- main.js -->

<!-- const calculator = require('./calculator.js')

const additionResult = calculator.add(5,3)
document.getElementById('addition').textcontent = `addition: ${additionResult}`

const subtractResult = calculator.subtract(20,8)
document.getElementById('subtraction').textcontent = `addition: ${subtractResult}`

const multiplyResult = calculator.multiply(5,4)
document.getElementById('multiplication').textcontent = `addition: ${multiplyResult}`

const divideResult = calculator.divide(20,5) 
document.getElementById('division').textcontent = `addition: ${divideResult}`-->


REFACTORED 4 EXERCISES USING IMPORT AND EXPORT:


Exercise 1:
mathUtils.js:


export function sum(a, b) {
  return a + b;
}


index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 1</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 1</h1>
  <p id="result"></p>
</body>
</html>




main.js:


import { sum } from './mathUtils.js';

const sumResult = sum(5, 7);
document.getElementById('result').textContent = sumResult;
Exercise 2:
stringUtils.js:


export function reverseString(str) {
  return str.split('').reverse().join('');
}



index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 2</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 2</h1>
  <p id="result"></p>
</body>
</html>




main.js:


import { reverseString } from './stringUtils.js';

const reversedString = reverseString('Hello, World!');
document.getElementById('result').textContent = reversedString;





Exercise 3:
calculator.js:


export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}



index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 3</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 3</h1>
  <p id="addition"></p>
  <p id="subtraction"></p>
  <p id="multiplication"></p>
  <p id="division"></p>
</body>
</html>



main.js:


import { add, subtract, multiply, divide } from './calculator.js';

const additionResult = add(5, 3);
document.getElementById('addition').textContent = `Addition: ${additionResult}`;

const subtractionResult = subtract(10, 4);
document.getElementById('subtraction').textContent = `Subtraction: ${subtractionResult}`;

const multiplicationResult = multiply(7, 2);
document.getElementById('multiplication').textContent = `Multiplication: ${multiplicationResult}`;

const divisionResult = divide(20, 5);
document.getElementById('division').textContent = `Division: ${divisionResult}`;




Exercise 4:
randomUtils.js:


export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 5</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 5</h1>
  <p id="result"></p>
</body>
</html>



main.js:

import { generateRandomNumber } from './randomUtils.js';

const randomNumber = generateRandomNumber(1, 10);
document.getElementById('result').textContent = `Random Number: ${randomNumber}`;




