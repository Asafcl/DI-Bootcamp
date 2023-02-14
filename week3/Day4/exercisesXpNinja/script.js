

// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// let date1 = parseInt(prompt('escriba una fecha de nacimiento, solo el año (AAAA):'));
// let date2 = parseInt(prompt('escriba una segunda fecha, solo año completo (AAAA)'));

// if (date1 && date2){
//     if(date1 === date2)
//     console.log('cumplen el mismo año');
//     else if(date1 > date2){
//         console.log(` ${'the year you will be half the age of the eldest:'} ${parseInt(date2 + (date1 - date2)/2)}`);
//     }
//     else if (date2 > date1){
//         console.log(` ${'the year you will be half the age of the eldest:'} ${parseInt(date1 + (date2 - date1)/2)}`);
//     }
// }
//     else {
//         console.log('error')
//     }



// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length


let onlyNum = prompt('ingrese codigo postal:');
let index =onlyNum.length;

if ((5 == index))
    {
        console.log('success')
        console.log(onlyNum + ' 1er if')
        
    }
else{
        console.log ('error')
        console.log(onlyNum + ' else')
        console.log(index)
        
    }

if (onlyNum = 'number') 
console.log(index + '1');

