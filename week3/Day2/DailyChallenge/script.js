// Exercise 1:

// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove Banana from the array.
// 2. Sort the array in alphabetical order.
// 3. Add “Kiwi” to the end of the array.
// 4. Remove “Apples” from the array. Don’t use the same method as in part 1.
// 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:

// ["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits)


fruits.sort()
console.log(fruits)


fruits.push('kiwi')
console.log(fruits) 


delete fruits [0]
console.log(fruits)

fruits.reverse()
fruits.pop()  //borra el ultimo elemento
console.log(fruits)


// Exercise 2:

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][2][0]);










