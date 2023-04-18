let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// exercise 1

// const displayGroceries = () =>{
//    groceries.fruits.forEach((x) => {
//     console.log(x)
//    })
    
// }
// displayGroceries()

// exercise 2
//the two objects are pointing to the same memory location

// const cloneGroceries =() =>{
//     user = client
//     client ='betty'
//     shopping = groceries
//     shopping.totalPrice=35
//     shopping.other.payed = false
//     console.log (user,client,shopping,groceries)

// }


// exercise 3

// cloneGroceries()