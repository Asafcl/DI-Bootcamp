// import React from "react";

// export class Phone extends React.Component {

// }

//Instead of React.Component import Comp
//directly from react then reduce syntax in export.


//Part I : Phone

// import React, { Component } from "react";

// export class Phone extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Samsung",
//             model: "Galaxy S20",
//             color: "black",
//             year: 2020
//         };
//     }
//     render() {
//         return <p>This phone brand is : {this.state.brand}</p>;
//     }
// }



//Part II : Change the Phone


// import React, { Component } from "react";

// // const changeColor = () => console.log("change color");

// export class Phone extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Samsung",
//             model: "Galaxy S20",
//             color: "black",
//             year: 2020
//         };
//     }
//     // changeColor = () => console.log("change color");

//     changeColor = (e) => this.setState( {color: "blue"} );

//     render() {
//         return (
//         <>
//             <h2>This phone brand is : {this.state.brand}</h2>
//             <h3>It´s a {this.state.color} {this.state.model} from {this.state.year}</h3>
//             {/* <button onClick={changeColor}>Change Color</button> */}
//             <button onClick={this.changeColor}>Change Color</button>
//         </>
//         );
//     }
// }


// to console log changeColor arrow function do: 
// changeColor = (e) => {
//     this.setState( {color: "blue"} );
//     console.log(this.state);
// };



//SWITCH FROM CLASS COMPONENT TO FUNCTIONAL COMPONENT

// import React, { useState } from "react";

// export const Phone = () => {
//     const [brand] = useState("Samsung");
//     const [model] = useState("Galaxy S20");
//     const [color, setColor] = useState("black");
//     const [year] = useState(2020);

//     const changeColor = () => setColor("blue");

//     return (
//         <>
//             <h2>This phone brand is: {brand}</h2>
//             <h3>It's a {color} {model} from {year}</h3>
//             <button onClick={changeColor}>Change Color</button>
//         </>
//     );
// };



// OPTION B


import React, { useState } from "react";

export const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhone((prevPhone) => ({ ...prevPhone, color: "blue" }));
  };

  return (
    <>
      <h2>This phone brand is: {phone.brand}</h2>
      <h3>It's a {phone.color} {phone.model} from {phone.year}</h3>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};


// changeColor is a function declared using arrow function syntax (() => {}).
// Inside the function body, setPhone is called with a callback function as its argument.
// The callback function receives the previous state value of phone as its parameter, which is represented 
// by prevPhone.
// The callback function uses the spread syntax (...prevPhone) to create a new object by copying all the 
// properties from the previous phone object.
// The new object has its color property set to "blue".
// Finally, the setPhone function is called with the new object as its argument, updating the state of phone 
// with the new value.
// In summary, when the changeColor function is invoked, it triggers a state update for the phone state. 
// It uses the functional form of the setPhone function and a callback to access the previous state value. 
// By spreading the properties of the previous state object into a new object and overriding 
// the color property, it creates a new state object with the updated color value. 
// This approach ensures that the other properties of the phone object remain unchanged while only 
// updating the desired property (color in this case).


// OPTION B REFACTORED

// import React, { useState } from "react";

// export const Phone = () => {
//   const [phone, setPhone] = useState({
//     brand: "Samsung",
//     model: "Galaxy S20",
//     color: "black",
//     year: 2020,
//   });

//   const changeColor = () => {
//     setPhone({ ...phone, color: "blue" });
//   };

//   return (
//     <>
//       <h2>This phone brand is: {phone.brand}</h2>
//       <h3>It's a {phone.color} {phone.model} from {phone.year}</h3>
//       <button onClick={changeColor}>Change Color</button>
//     </>
//   );
// };


// previous state value. Instead, it creates a new object by spreading the properties of the current 
// phone state object and overrides the color property with "blue". Then, the new state object is directly 
// passed to the setPhone function, updating the state of phone with the new value.

// This approach achieves the same result as the previous version but in a more concise and straightforward 
// manner.





// OPTION C REFACTORED (BEST PRACTICE)

// import React, { useState } from "react";

// export const Phone = () => {
//   const [phoneDevice, setPhoneDevice] = useState({
//     brand: "Samsung",
//     model: "Galaxy S20",
//     color: "black",
//     year: 2020,
//   });

//   const changeColor = () => {
//     setPhoneDevice({ ...phoneDevice, color: "blue" });
//   };

//   return (
//     <>
//       <h2>This phone brand is: {phoneDevice.brand}</h2>
//       <h3>It's a {phoneDevice.color} {phoneDevice.model} from {phoneDevice.year}</h3>
//       <button onClick={changeColor}>Change Color</button>
//     </>
//   );
// };



// The ...phoneDevice expression in the code is using the spread syntax in JavaScript. 
// It allows you to create a new object or array by spreading the properties or elements from an 
// existing object or array.

// In the context of the code you provided, ...phoneDevice is used inside the setPhoneDevice function call:


// setPhoneDevice({ ...phoneDevice, color: "blue" });

// Here, ...phoneDevice spreads all the properties of the phoneDevice state object into a new object. 
// It essentially creates a shallow copy of the phoneDevice object, including all its properties.

// By spreading the existing properties, we ensure that the new object retains all the original properties 
// of phoneDevice (such as brand, model, and year). Then, we can override the color property with "blue" 
// to update the state with the new color value.

// In summary, ...phoneDevice in this context is used to create a new object that includes all the 
// properties of the existing phoneDevice state object, allowing for the selective modification of specific 
// properties while preserving the rest.