// exercise 1

// function mergeWords(word) {
//     return function (){
//     return word;
//     }
// }
// const hello = mergeWords('Hello');
// console.log(hello()); 

// exercise 2

// const first = (x) => (y)=>{
//     console.log (x*y)
//     const second=() =>{
//          console.log(x*y)
//     }
//     return second
// }
// const primero = first(5)
// const multiplicadorPor5= primero();
// multiplicadorPor5(4)

// const mergeWords = x => y => z => m =>{
//     return n => {
//         return `${x} ${y} ${z} ${m}`
//     };
// };

// console.log (mergeWords('There')('is')('no')('spoon.')());



// exercise 3

// function mergeWords(string) {
//     return function(nextString) {
//       if (nextString === undefined) {
        
//         return string;
//       } else {
//         return mergeWords(string + ' ' + nextString);
//       }
//     }
//    }
//    const string = mergeWords('hello')('how')('are')('you')
//    console.log(string())
