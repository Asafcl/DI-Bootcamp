
// exercise 1

// function infoAboutMe(){
//     console.log ("asaf cohen, me gusta pescar");
// }
// infoAboutMe();



//  function  infoAboutPerson(personName, personAge, personFavoriteColor){
// console.log('your name is', personName );
// console.log('you are', personAge, 'years old');
// console.log('your favorite color is: ', personFavoriteColor);
// }
// infoAboutPerson('asaf', 42, 'red');
// infoAboutPerson('daniel', 22, 'blue');

// // exercise 2

// function calculateTip(){
//     const amount = Number(prompt('how much is the bill'))
//     let tipPercent;

//     if (amount < 50) tipPercent = 0.2;
//     if (amount >= 50 && amount <200) tipPercent = 0.15;
//     if (amount >= 200) tipPercent = 0.1;

//     const totalBill = amount * (1 + tipPercent);

//     console.log ('bill: ', amount);
//     console.log ('total bill including tip: ', totalBill);
// }
// calculateTip();



// // exercise 3


// function isDivisible(){
//     let sum = 0;
//     for (let i =0; i <500; i++){
//         if (i % 23 === 0){
//             console.log(i);
//             sum +=  i;
//         }
//     }
//     console.log('the sum of the numbers divisible by 23 is:', sum)
// }
// isDivisible();


// // bonus
// function isDivisibleBonus(divisor){
//     let sum = 0;
//     for (let i =0; i <500; i++){
//         if (i % divisor=== 0){
//             console.log(i);
//             sum +=  i;
//         }
//     }
//     console.log('the sum of the numbers divisible by 23 is:', sum)
// }
// isDivisibleBonus(23);



// // exercise 4

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ['banana','orange', 'apple']
// function myBill() {
//     for (const item of shoppingList){
//         const quantityInStock = stock[item]

//         if(quantityInStock > 0){
//             const price = prices[item]
//             console.log('the price of: ', item, 'is', price )
//             console.log('we have these many in stock', stock[item])
//             stock[item] = stock[item] -1
//             console.log('there is no', item, 'in stock')
//         }
//     }
// }
// myBill();


// exercise 5

function changeEnough(itemPrice, amountOfChange) {
    console.log("the item price is", itemPrice)
    const sum = calculateSum(amountOfChange)
    return (sum > itemPrice)
}

function calculateSum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++){
        let coinValue
        const numberOfCoins = arr[i]
        if (i === 0) {coinValue = 0.25}
        if (i === 1) {coinValue = 0.10}
        if (i === 2) {coinValue = 0.05}
        if (i === 3) {coinValue = 0.01}
        console.log("We have ", numberOfCoins, " coins that have a value of ", coinValue)
        
        sum = sum + numberOfCoins * coinValue
    }
    console.log("you own", sum)
    return sum
}
changeEnough(4.25, [25, 20, 5, 0]);