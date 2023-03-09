// Excercise 1

// const Excercise1 = () =>{
//     let str = prompt("ingrese cualquier palabra o numero");
//     if(!str || /^[\s\n]*$/.test(str)){
        
//         console.log('TRUE')
//     }else{
//         console.log('FALSE');
//     }
// }
// Excercise1();



// Exercise 2


// const Excercise2 = (str)=>{
//     while (!str || /^[\s\n]*$/.test(str)){
//         prompt('ingresa nombre y apellido')
//     }
//     let space = str.indexOf(' ');
    
//     if(space>=0){
//         let name = str.substring(0,space)
//         let lName = str.substring(space +1)
//          lName = lName.slice(0,1).toUpperCase()

//         console.log(`${name} ${lName + '.'}`)
        
//     }
// }
// Excercise2('asaf cohen');
// Excercise2('Gregorio suarez');


// Exercise 3



//  const excercise3 = (str)=>{
    
//     if (str){
//         let letters;
//         let arr2 ="";
        
//         for (i in str){
//             if (str[i] === str[i].toUpperCase()){
//                  arr2 += str[i].toLowerCase();
//                 //  console.log (arr2)
//             }else arr2 += str[i].toUpperCase()
//         }
//         console.log(arr2) 
//     }
//  }
//  excercise3('Hola Como Estas');
//  excercise3('todo esta bieN');


//  Exercise4
// let flags=0;
// let x = 0;
// const omnipresent = (arr,index) =>{
    
//     for (i of arr){
        
//         for (x=0;x<i.length;x++) {
//             if(i[x] === index){
                
//                 flags++;
//                 break;
//             }      
        
//         }
        
//     }
//     if ( arr.length === flags) console.log('the number: ' + index + ' is omnipresent');
//     else console.log('the number: ' + index + ' is not omnipresent'); 
// }

// omnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [6, 3], [4, 3]],3)
// omnipresent([[3, 4], [4, 3, 4], [3], [9, 3], [6, 3], [4, 3]],4)

