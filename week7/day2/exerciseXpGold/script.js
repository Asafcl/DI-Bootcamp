// exercise 1
// let arr = []

// let sum = document.getElementById('demo')
// let numeros = document.getElementById('numeros')
// let btnAddNum = document.getElementById('boton')
// let btnsumaTodo = document.getElementById('sumaTodo')

// btnAddNum.addEventListener('click', () => {
//     let inputValue = numeros.value;
//     arr.push(Number(inputValue));
//     numeros.value = ''
//   });

//   btnsumaTodo.addEventListener('click', () => {
//     let Total = arr.reduce((sum1,val)=> sum1 + val)
//     sum.textContent = Total + ' es el total'
//   })

// exercise 2

// let arr = [1,2,3,4,5,5,6,7,7,8,9,10]

// let arrDuplicate = Array.from(new Set(arr))
// console.log (arrDuplicate)

// exercise 3

// const clearArray = numbers => {
//     let newArray =[]
//     for( const number of numbers){
//         if(number !=='' && number !==undefined && number !==0 && 
//         number !==false && !isNaN(number) && number !==null)
//         newArray.push(number)
        
//     }
//     return newArray
// } 

// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]
// console.log(clearArray(array))

// exercise 4

// const repeat = (a = 'AH!',num = 1) =>{
//     let arr = ''
//     for(i=0; i<num; i++){
//         arr += a
//     }
//        return arr
// }

// console.log(repeat('AH!',2))

// exercise 5

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// const startLine1 = () =>{
//     console.log(startLine)
// }

// const turtle1 = () =>{  
//     let espacios = startLine.length-12 
//     turtle = turtle.padStart(espacios,' ') 
//     // removes the whitespaces and fills the 
//     //trailing part 9 times '=' without affecting the 
//     //spacing of the turtle, in this case 7 times
//     turtle = turtle.trim().padEnd(9, '=')   
//     console.log(turtle)
// }
// const  rabbit1 = () =>{
//     let espacios = startLine.length-12
//     rabbit = rabbit.padStart(espacios,' ')
//     console.log(rabbit)
// }
//     startLine1()
//     turtle1()
//     rabbit1()

    
    

