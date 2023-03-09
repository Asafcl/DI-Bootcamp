// exercise 1
const numbers = [5,0,9,1,7,4,2,6,3,8];

let numToString = numbers.toString();
console.log(numToString)

let numToString2 = numbers.join(',')
console.log(numToString2)
numToString2 = numbers.join(' ')
console.log(numToString2)

function bubbleSort(){
    for (i of numbers){ // it will pass by the size of the array
        
        for (let x=0;x<numbers.length;x++){ //go through each number next to it once
            if (numbers[x] < numbers[x+1]){ //ask if the number on the left is less
                let temp = numbers[x]  //swap the numbers
                numbers[x]=numbers[x+1]
                numbers[x+1]=temp
            }
            
        }
    }
}
bubbleSort()
console.log(numbers)




