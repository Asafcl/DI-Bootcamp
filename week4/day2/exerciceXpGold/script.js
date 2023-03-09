// exercise 1
let numbers = [123, 8409, 100053, 333333333, 7, 8, 5, 32,33]

for (i of numbers){
    if( (i%3) === 0){
    console.log(`${i}, true`)
    }else{
        console.log(`${i}, false`)
    }
}

// exercise 2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let getName = prompt('what is your name: ')

if (getName in guestList){
    console.log(`hi, i'm ${getName} and I'm from ${guestList[getName]}`)
}else console.log("I'm a guest")


// exercise 3

let age = [20,5,12,43,98,55];
let addNum = 0;
let hiAge = 0
for (i=0;i<age.length;i++){
    if(age[i]>hiAge){
    hiAge = age[i]
    }
    addNum += age[i];
}
console.log(addNum);
console.log(hiAge)


