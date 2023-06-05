// exercise 1
// var num = Math.floor(Math.random()*100)+1

// if(num%2 === 0)
// console.log(num)

// exercise 2

// function capitalize(word){
//     var x = ''
//     for (var i=0;i<word.length;i++){
//         if(i%2 === 0){
//             x = x + word[i].toUpperCase()
//         }else{
//              x = x + word[i].toLowerCase()
//         }
//     }
    
//     return(x)
// }

// console.log(capitalize('palabRA'))

// exercise 3

// function isPalindome(word){

//     for(i=0;i<(word.length)/2;i++){
//         if(word[i]===word[word.length-i-1]){

//         }else{
//             return('is not PALINDROME')
//         }       
//     }
//     return('THE WORD IS PALINDROME')
// }

// console.log(isPalindome('kayak')) 
// console.log(isPalindome('ayak'))

// exercise 4

// const array = [-1,0,3,100, 99, 2, 99]
// const array2 = ['a', 3, 4, 2]
// const array3 = []

// function biggestNumberInArray(arrayNumber){
    
//     var theBigNum= Number.NEGATIVE_INFINITY
//     for(i=0;i<arrayNumber.length-1;i++){
//         if(theBigNum<arrayNumber[i+1] && typeof arrayNumber[i] === 'number'){
//             theBigNum = arrayNumber[i+1]
//         }
//     }
//     if (theBigNum === Number.NEGATIVE_INFINITY)
//         return 0
//     return theBigNum
// }

// console.log(biggestNumberInArray(array)) 
// console.log(biggestNumberInArray(array2)) 
// console.log(biggestNumberInArray(array3)) 

// exercise 5

var list=[1,2,3,3,3,3,4,5]

function uniqueElements(arr) {
    var newarr = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (newarr.indexOf(arr[i]) === -1) {
        newarr.push(arr[i]);
      }
    } 
    return newarr;
  }
console.log(uniqueElements(list))