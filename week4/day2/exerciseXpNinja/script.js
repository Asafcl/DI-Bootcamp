// exercise 1
const person1 = {
    fullName: 'Gabriel Hernandes',
    mass: 100.01,
    height: 1.85,
    imc: function() {
        return this.mass / (this.height)
    }
};
const person2 = {
    fullName:'Andres London',
    mass:100,
    height:1.85,
    imc: function() {
        return this.mass / (this.height)
    }
};

if (person1.imc() === person2.imc())
console.log(`${person1.fullName} and ${person2.fullName}`)
else if (person1.imc() > person2.imc())
console.log (`${person1.fullName} is the big`)
else 
console.log (`${person2.fullName} is the big`)


// exercise 2

let gradesList = [2,20,15,25,7,1];

function findAvg(arr){
    let sum = 0;
    let avg = 0;
    for (let i of arr){
        sum +=i
     }
     avg = sum/arr.length;
     repeatCurse(avg)
     return avg;
}

function repeatCurse(avg){
    
    if (avg > 65)
     console.log('approved')
     else 
     console.log ('failed and needs to repeat the course')
}

let average = findAvg(gradesList)
console.log(average)



