// exercise 1

// const container = document.getElementById('container')
// console.log('container: ', container)

// document.querySelector('.list').children[1].textContent= 'richard'


// const lists = document.querySelectorAll('.list')
// lists.forEach(list => list.firstElementChild.textContent = 'asaf')


// lists[1].children[1].remove()

// lists.forEach(list => list.classList.add ('student_list'))
// console.log(lists)

// const firstUl = document.querySelector('ul.list.student_list')
// firstUl.classList.add('university', 'attendance')
// console.log(firstUl)

// exercise 2

  // const div = document.querySelector("div")
  // console.log(div?.style)

  // const divBackground = getComputedStyle(div).backgroundColor
  // const users = document.querySelectorAll("li")
  // console.log("users: ", users)
  
  // if (divBackground === "rgb(173, 216, 230)") {
  //   console.log("this is lightblue!")
  //   console.log(`Hello ${users[0].textContent} and ${users[1].textContent} !`)
  // } 

// exercise 3

// const navbar = document.getElementById('navBar')
// console.log('navbar:', navbar)
// navbar?.setAttribute('id', 'socialNetworkNavigation')

// const li =document.createElement('li')
// console.log('li: ', li)

// const logout =document.createTextNode('logout')
// console.log('logout: ', logout)

// li.appendChild(logout) //<li> logout </li>
// console.log('li: ', li)

// const ul = navbar?.firstElementChild
// console.log('li: ', li)
// ul?.appendChild(li)

// const firstLi = ul?.firstElementChild
// const lastLi = ul?.lastElementChild

// console.log('firstLi: ', firstLi)
// console.log('lastLi: ', lastLi)

// console.log('first li content')
// console.log(firstLi?.textContent)

// console.log('second li content')
// console.log(lastLi?.textContent)

// const textNode =document.createTextNode('hola mundo')
// document.body.appendChild(textNode)



// exercise 4

// const allBooks = []

// const book1 = {
//   title: "Harry Potter",
//   author: "J.K. Rowling",
//   image: "https://picsum.photos/seed/picsum/200",
//   alreadyRead : false
// }

// const book2 = {
//   title: "Lord of the Rings",
//   author: "Tolkien",
//   image: "https://picsum.photos/200",
//   alreadyRead : true
// }

// allBooks.push(book1, book2)

// console.log("allbooks: ", allBooks)

// const table = document.createElement("table")
// table.innerHTML = `
// <thead>
//     <tr>
//       <th colspan="1">My book list</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr class="${book1.alreadyRead ? "is-read" : ""}">
//       <td>${book1.title} written by ${book1.author}</td>
//       <td><img src="${book1.image}"/></td>
//       <td>Already read: ${book1.alreadyRead}</td>
//     </tr>
//     <tr class="${book2.alreadyRead ? "is-read" : ""}">
//       <td>${book2.title} written by ${book2.author}</td>
//       <td><img src="${book2.image}"/></td>
//       <td>Already read: ${book2.alreadyRead}</td>
//     </tr>
//   </tbody> 
// `

// const bookListDiv = document.querySelector(".list-books")
// console.log("bookListDiv:", bookListDiv)
// bookListDiv?.appendChild(table)

// console.log(table)