// let exercise = () =>{

//     let frase = prompt('into a phrase and separate by comas')
//     let matriz = frase.split(',');
//     let flags = 0;
//     for(x of matriz){
//         if(flags < x.length) {
//             flags = x.length;
//         }
//     }
    
//     let flags2 = 0;
//     for(i=0;i<flags;i++){
//         let x=0;
//         if (i === 0){
//             while(x < flags+4){
//                 x++
//                 console.log('*')
//             }
//         }

        
//         if(flags2 === 0){
//             flags2++
//             let x = 0
//             while(x < matriz.length){
//                 // let a =(flags+2) - matriz[x].length
//                 // console.log(a)
//                 matriz[x] = ('* ' + matriz[x]);
                                               
//                 for(y= matriz[x].length; y<= flags+2;y++) {
//                     matriz[x] += ' '
//                     // console.log(y + 'es la Y')
//                     // console.log((flags) + 'es Flags')
//                 }
//                 matriz[x] += '*'
//                 console.log(matriz[x]) 
//                 x++
//             }

           

//         }
        
//         x=0
//         if (i === matriz.length){
//             while(x < flags+4){
//                 x++
//                 console.log('*')
//             }
//         }
//     }

    
// }
// exercise();


    let exercise = () =>{

let frase = prompt('into a phrase and separate by commas')
let matriz = frase.split(',');
let flags = 0;
for(x of matriz){
    if(flags < x.length) {
        flags = x.length;
    }
}


let flags2 = 0;
let line = '';
for(i=0;i<flags;i++){
    let x=0;
    if (i === 0){
        while(x < flags+4){
            x++
            line += '*'
        }
    }
}
console.log(line);

    if(flags2 === 0){
        flags2++
        let x = 0
        let line2 = '';
        while(x < matriz.length){
            let a =(flags+2) - matriz[x].length
            matriz[x] = ('* ' + matriz[x]);
                                           
            for(y= matriz[x].length; y<= flags+2;y++) {
                matriz[x] += ' '
            }
            matriz[x] += '*'
            console.log(matriz[x]) 
            x++
            line2 += '*'
        }
    }
    console.log(line);
    
    
}

exercise();
