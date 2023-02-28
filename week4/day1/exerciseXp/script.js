


// exercise 1
const people = ["Greg", "Mary", "Devon", "James"];

function myFuntion(nombre,array){
    let x = array.indexOf(nombre);

    if( x != -1){
        array.splice(nombre,x+1);
        
    }
}
myFuntion('Greg',people);
console.log (people);



function replace(nombre,reemplazo){
    let x = people.indexOf(nombre);
    if (x != -1){
        people.splice(x,1,reemplazo)
        people.push('asaf');
        
    }
    console.log(people)
}

replace('James','Jason');



function indexMary(nombre){
    return(people.indexOf(nombre))
}

console.log ('mary index is ' + indexMary('Mary'));


// exercise 5
function newArray (nombre){
    let x = people.indexOf(nombre);
    let newArr = people;
    newArr.splice(x,x+1);
    return(newArr);
}

let newArr = newArray('Mary');
console.log(newArr);


// seguir exercise 6



  


