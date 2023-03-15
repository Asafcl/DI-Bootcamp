// exercise 1

// const selectElement = document.getElementById('genres')
// const selectValue = selectElement.value
// console.log(selectValue)

// const selectElement = document.getElementById('genres')
// const newOption = document.createElement('option')
// newOption.value = 'classic'
// newOption.textContent = 'Classic'
// selectElement.appendChild = (newOption)

// const eraseSelected = document.querySelector("option[value='blues']")
// eraseSelected.selected = false
// newOption.selected = true

// exercise 2

// const buttonOption = document.querySelector("input[type='button']")
// buttonOption.addEventListener('click', removeColor)

// function removeColor(){
//     const selectElement = document.getElementById('colorSelect')
//     const optionSelect = selectElement.options[selectElement.selectedIndex];
//     selectElement.removeChild(optionSelect)
// }

// exercise 3

let shoppingList = []; // hay q hacer la lista en el HTML y borrarla

const buttonToAdd = document.querySelector("input[type='button']")
buttonToAdd.addEventListener('click', addItems);
let SelectInput = document.querySelector('input')
var clearAllButton = document.querySelector("button[type='reset']")
clearAllButton.addEventListener('click', clearAll)

function addItems(){
    
    shoppingList.push(SelectInput.value)
     const clearText = document.querySelector("input[type='text']")
     clearText.value = []
    console.log(shoppingList)
    
}

function clearAll(){
    shoppingList = []
    console.log(shoppingList)
}
    



