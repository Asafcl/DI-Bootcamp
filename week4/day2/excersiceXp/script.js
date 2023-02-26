// Exercise 1 : List Of People
// Instructions
 //const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

 const people = ["Greg", "Mary", "Devon", "James"];
 console.log(people);
 people.shift(people);
 console.log(people);

 people[2] = "jason";

 people.push("asaf");

 console.log(people);
 console.log('index of Mary is: ' + (people.indexOf("Mary")));
 console.log(people);
 const newPeople = people.slice(0);
 console.log('newPeople: ', newPeople);
 


 console.log(people.indexOf("Foo"));

// exercise 7
  const last = people[people.length -1];
  console.log("last name of the array is: ", last);


// PART 2 LOOPS



// 1.

 for(const friend of people){
     console.log("this person is: ", friend);
    
 }


for(const friend of people){
    console.log("this person is: ", friend)
    if (friend=== 'devon' ){
        break;
    }
}


// Exercises 2

const colors = ["blue", "yellow","red", "green", "purple"];
const suffixes =["st","nd","rd","th","th"];

// for(let i=0; i<colors.length;i++){
//     console.log(`my #${i+1}${suffixes[i]} choice is ${colors[i]}`);
// }

// for (let i in colors) 
// console.log(`my #${(Number(i)+1)}${suffixes[i]} choice is ${colors[i]}`);// el i+1 no da 2 sino 11






// Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.


console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log('second tenans: ' + building.nameOfTenants[1] + 'and the numbers of rooms is: ' + building.numberOfRoomsAndRent.dan[0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const saraRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if((saraRent + davidRent) > danRent ){
    building.numberOfRoomsAndRent.dan[1]=1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);
console.log();



// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


const family ={
    dad: 'Jhon',
    mom: 'mary',
    daughther: 'jane'
};

for (const key in family){
    console.log(`key: ${key}, value: ${family[key]}`);
    
}


// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let sentences='';
for(const i in details){
    sentences = (sentences + ' ' + i + ' ' + details[i]);
   
}
console.log(sentences);





// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let secret = '';

let x = names.sort();
for (let i in x){
    secret += x[i][0];
}

console.log(secret);


