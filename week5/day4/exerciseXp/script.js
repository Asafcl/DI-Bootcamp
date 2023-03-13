//  exercise 1
// const h1 =document.querySelector('h1')
// console.log(h1.textContent)


// const paragraph = document.querySelectorAll('p')
// let paragraphLast = (paragraph.length -1)
// paragraph[paragraphLast].remove();


// const h2 = document.querySelector('h2')
// h2.addEventListener('click',()  => {
//     h2.style.color =('blue')
// })

// const h3 = document.querySelector('h3')
// h3.addEventListener('click',() => {
//     h3.style.display = 'none'
// })

// const boldBtn = document.getElementById('boldBtn')
// boldBtn.addEventListener('click',() =>{
//     paragraph.forEach(p =>{
//         p.style.fontWeight = 'bold'
//     })
// });

//  // bonus 1
// const numRandom = () => Math.floor(Math.random() * 101);

// h1.addEventListener('mouseenter',() => {
//     h1.style.fontSize = `${numRandom()}px`;
// });

// // bonus 2
// function desvanecerElemento() {
// paragraph[1].classList.add('ocultar');
// }
// function restaurarElemento() {
// paragraph[1].classList.remove('ocultar');
// }
// paragraph[1].addEventListener('mouseenter', () => {
// desvanecerElemento();
// });


//         // exercise 2

        const form = document.querySelector('form');
        console.log(form);

        const firstNameInput = document.querySelector('#fname');
        const lastNameInput = document.querySelector('#lname');
        console.log(firstNameInput, lastNameInput);

        const firstNameInputByName = document.querySelector('input[name="fname"]'); //name attribute with the value of "fname".
        const lastNameInputByName = document.querySelector('input[name="lname"]');
        console.log(firstNameInputByName, lastNameInputByName);

        const submitButton = document.querySelector('#submit');
        const usersAnswerList = document.querySelector('.usersAnswer');

        form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
  
        if (!firstName || !lastName) {
            alert('Please enter both first name and last name');
            return;
        }
  
        const firstNameLi = document.createElement('li');
        firstNameLi.textContent = firstName;
  
        const lastNameLi = document.createElement('li');
        lastNameLi.textContent = lastName;
        
        usersAnswerList.appendChild(firstNameLi);
        usersAnswerList.appendChild(lastNameLi);
  
        firstNameInput.value = '';
        lastNameInput.value = '';
})

// // exercise 3

// let allBoldItems;
    
//     function getBold_items() {
//       allBoldItems = document.getElementsByTagName("strong");
//     }
    
//     function highlight() {
//       for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].style.color = "blue";
//       }
//     }
    
//     function return_normal() {
//       for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].style.color = "black";
//       }
//     }
    
//     getBold_items();
    
//     document.querySelector("p").addEventListener("mouseover", highlight);
//     document.querySelector("p").addEventListener("mouseout", return_normal);

// // exercise 4

// const form = document.querySelector('#MyForm');
// const radiusInput = document.querySelector('#radius');
// const volumeInput = document.querySelector('#volume');
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // prevent form submission
//     const radius = Number(radiusInput.value);
//     const volume = (4/3) * Math.PI * Math.pow(radius, 3);
//     volumeInput.value = volume.toFixed(2); // display the result in the volume input
// });

// // exercise 5

// const myBotton = document.getElementById('myButton')

// myBotton.addEventListener('click', () =>{
//     myBotton.style.color = 'black'
//     myBotton.style.backgroundColor = ('blue')
//     myBotton.style.fontSize = ('21px')
//     myBotton.style.top =('1px')
//     myBotton.style.marginLeft = '650px'
//     myBotton.style.marginTop = '300px'
    
// });
// myBotton.addEventListener('mouseover', () =>{
//     myBotton.style.color = 'green'
//     myBotton.style.backgroundColor = ('black')
//     myBotton.style.fontSize = ('30px')
//     myBotton.style.top = ('10px')
    
    
// });
// myBotton.addEventListener('mouseout', () =>{
//     myBotton.style.color = 'yellow'
//     myBotton.style.backgroundColor = ('green')
//     myBotton.style.fontSize = ('15px')
//     myBotton.style.top =('0px')
    
// });
// myBotton.addEventListener('dblclick', () =>{
//     myBotton.style.color = 'blue'
//     myBotton.style.backgroundColor = ('magenta')
//     myBotton.style.fontSize = ('35px')
//     myBotton.style.top =('1px')
//     myBotton.style.marginLeft = '0px'
//     myBotton.style.marginTop = '0px'
//     let changeText = document.getElementById('myButton')
//     changeText.textContent = 'ok';
// });

// function resetButton() {
//     myButton.style.color = 'white';
//     myButton.style.backgroundColor = 'green';
//     myButton.style.fontSize = '19px';
//     myButton.style.top = '0px';
//     myButton.style.marginLeft = '0px';
//     myButton.style.marginTop = '0px';
//     myButton.textContent = 'Intro';
//   }

// setTimeout(resetButton, 1000);

