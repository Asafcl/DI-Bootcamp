// exercise 1
// const sum = (num1,num2) => num1 + num2

// console.log(sum (3,7))


// exercise 2

// function declaration 4.1
//  const kgToG = ((kilo) =>{
  // return Number( kilo * 1000)
//  })

// function invoke
//  console.log( kgToG(6))

// function expression 4.2
// const kgExpression = function (kilo){
//     return Number( kilo * 1000)
// }

// function invoke 4.3
// console.log(kgExpression(7))

// the diference:
// declarations are processed during the compile phase, expressions are processed during code execution

// arrow function 4.4
// const kgArrow = kilo => Number( kilo * 1000)
// invoke arrow function
// console.log( kgArrow(9))

// exercise 3

// (function (numberOfChildren, partnersName, geographicLocation, jobTitle){
//     const demo = document.getElementById('demo')
//     demo.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`
 
// })

// (8, 'Meny', 'Bahamas', 'ceo integral company')

// exercise 4

// (function(name) {
//   const userProfile = document.getElementById("user-profile");
//   userProfile.innerHTML = `
//     <img src="https://via.placeholder.com/50" alt="Profile picture">
//     <span class="ml-2">Welcome, ${name}!</span>
//   `;
// })("John");

// exercise 5
// part 1
//  function makeJuice(sizeDrink){

//    addIngredients('apple','whater','zugar')
//   function addIngredients(firstIngredient,secondIngredient,thirdIngredient){
//     document.getElementById('demo').textContent = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`
//   }
// }
// makeJuice('large')


// part 2

// function makeJuice(sizeDrink){
//   const ingredients=[]

//    addIngredients('apple','whater','zugar')
//    addIngredients('manzanilla', 'canela','tamarindo')
//   function addIngredients(firstIngredient,secondIngredient,thirdIngredient){
//     ingredients.push(firstIngredient,secondIngredient,thirdIngredient)
//   }

//   function displayJuice(){
//     let demo = `The client wants a ${sizeDrink} juice, containing:` 
//     ingredients.forEach (function(ingredient){
//       demo += ' ' + ingredient; 
//   })
//   document.getElementById('demo').textContent = demo
//   }

//   displayJuice()
// }
// makeJuice('large')