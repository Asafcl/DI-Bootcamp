// exercise 1
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });//[2,4,6]


//   exercise 2

// [[0, 1], [5, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );//[1],[5]
  //correctly[1,2,0,1,2,3]

//   exercise 3

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
}) //i= index
//1 0, alert(1)
//2 1, alert(2)
//4 2, alert(4)
//5 3, alert(5)
//8 4, alert(8)
//9 5, alert(9)

// exercise 4.1

// const array = [[1],[2],[3],[[[4]]],[[[5]]]]

// const newArray1 = array.flat(2)
// console.log(newArray1)

//EXERCISE 4.2

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]

// const newGreeing= greeting.map(subrray =>
//     subrray.join(" ")
// )
// console.log(newGreeing)

// exercise 4.3

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
// const flattenedGreeting = greeting.flat()
// const greetingString = flattenedGreeting.join(" ")
// console.log(greetingString)

// exercise 4.4

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
//     console.log( trapped.flat(Infinity))


    


