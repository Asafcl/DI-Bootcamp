// exercise1
        // function inform(){
        //     alert("You clicked me")
        // }
   


//exercise 1

// document.getElementById('button').onclick = function() {
//     alert('Click!');
// };


// exercise 1-1


  
    function insertRow() {
      // get a reference to the table
      let table = document.getElementById("sampleTable");
      // create a new row element
      let newRow = table.insertRow();
      // create new cells for the row
      let cell2 = newRow.insertCell(1);
      let cell1 = newRow.insertCell(0);
      // add text to the new cells
      cell1.innerHTML = "New row cell 1";
      cell2.innerHTML = "New row cell 2";
    }


// exercise 2 GREEN



  // get a reference to the button element
  let button = document.getElementById('jsstyle');
// add a "click" event listener to change the text
button.addEventListener('click', function() {
  if (this.textContent === 'Style') {
    this.textContent = 'Clicked';
  } else {
    this.textContent = 'Style';
  }
});
  // add a "mouseover" event listener to change the background color
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
  });
  // add a "mouseout" event listener to change the background color back
  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });

