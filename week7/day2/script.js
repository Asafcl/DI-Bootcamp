//exercise 1

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }//the result is 5 because the a on the block if is another variable

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()//va a salie 0 ya que a es una variable fuera del bloque
// funcTwo()//va a salir 5 ya que esta a = 5 dentro de la funcion
// funcThree()//a = 5 ya

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()//cambia dentro de windows a hello, dentro de window
// funcFive()//sera hello si entramos a window y sin entrar a window es 0

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()//a sera igual a 'test'
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);



// exercise 2


// const winBattle = () => {
//     return true; //si pongo false retorna y da 1
// }

// const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);



// exercise 3

// const isString = (value) => typeof value === 'string' ? true : false
// console.log(isString('hello'))//true
// console.log(isString([1,2,3,0]))//false

// exercise 4

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choise is ${color}.`);
// });
// if (colors.includes('Violet')){
//     console.log('yeah')
// }else{
//     console.log('No....');
// }

// exercise 5

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["st","nd","rd","th"];

// colors.forEach((color,index) =>{
//     const suffix = (index < 3) ? ordinal[index + 1] : ordinal[0];
//     console.log(`${index + 1}${suffix} choise is ${color}`)
// });

// // bonus
// //const ordinal = ["th","st","nd","rd"];
// // const suffix = (index < 3) ? ordinal[index + 1] : ordinal[3];


// exercise 6

// const vatRate = 1.17;
// const details = ["+200", "-100", "+146", "+167", "-2900"];
// const currentBankAccount = addVat(details)
// console.log('currentbanckAcount:', currentBankAccount)

// function addVat(details){
//     let total = 0;
//     details.forEach((detail) => {
//         const numExpense = Number(detail);
//         const expenseWhithVat = numExpense * vatRate
//         total += expenseWhithVat
//     });
//     return total;
// }


