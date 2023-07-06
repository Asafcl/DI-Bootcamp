// EXERCISE 4 : ComponentDidMount

//COMPONENT LIFECYCLE (Not Necessary to fully learn)


// import React, { Component } from "react";

// export class Color extends Component {
//     constructor(props) {
//         super(props);
//         console.log("constructor");
//     }
//     static getDerivedStateFromProps() {
//         console.log("getDerivedStateFromProps()");
//     }
//     render() {
//         console.log("render");
//         return <h1>Hi</h1>;
//     }
//     componentDidMount() {
//         console.log("componentDidMount()");
//     }
// }


// import React, { Component } from "react";
// This line imports the Component class and the React library from the "react" package. It is necessary to 
// extend the Component class and utilize React functionality in the component.
// constructor(props) { ... }
// The constructor is a special method that gets called when an instance of the class is created. It is used 
// to initialize the component's state and bind event handlers. In this case, the constructor logs the 
// message "constructor" to the console. The super(props) call is used to invoke the constructor of the 
// parent class (Component) and pass the props object to it.
// static getDerivedStateFromProps() { ... }
// The getDerivedStateFromProps method is a static method that is invoked just before rendering when new 
// props are received. It allows you to update the component's state based on changes in the props. In this 
// example, it logs the message "getDerivedStateFromProps()" to the console. This method is currently missing a return statement, which should return an object representing the 
// updated state or null to indicate no state update is necessary.
// render() { ... }
// The render method is a required method in a React component. It returns the JSX that defines the 
// component's structure and content. In this case, it logs the message "render" to the console and renders 
// an <h1> element with the text "Hi".
// componentDidMount() { ... }
// The componentDidMount method is a lifecycle method that is called after the component has been rendered to 
// the DOM. It is commonly used to perform initialization tasks, fetch data from APIs, or set up event 
// listeners. In this example, it logs the message "componentDidMount()" to the console.
// These methods represent different stages in the lifecycle of a React component, allowing you to perform 
// specific actions at each stage. The console logs in the example code demonstrate when each method is called 
// during the component's lifecycle.




// 1.) 2.)



// import React, { Component } from "react";

// export class Color extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red" };
//     }
//     render() {
//         return <h1>My favorite color is : {this.state.favoriteColor}</h1>;
//     }

// }


// 3.)


// import React, { Component } from "react";

// export class Color extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red" };
//     }
//     render() {
//         return <h1>My favorite color is : {this.state.favoriteColor}</h1>;
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoriteColor: "yellow" });
//         }, 5000);
//     }

// }



// 4.)


// import React, { Component } from "react";

// export class Color extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red" };
//     }

//     changeColor = () => {
//         this.setState({ favoriteColor: "blue"});
//     }

//     render() {
//         return (
//             <>
//             <h1>My favorite color is : {this.state.favoriteColor}</h1>
//             <button onClick={ this.changeColor }>Change color to blue</button>
//             </>
//         )
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoriteColor: "yellow" });
//         }, 5000);
//     }

// }




// 4.) REFACTORED FROM CLASS TO FUNCTIONAL COMPONENT USING STATE AND EFFECT.



import React, { useState, useEffect } from "react";

export const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    const changeColor = () => {
        setFavoriteColor("blue");
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFavoriteColor("yellow");
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <h1>My favorite color is: {favoriteColor}</h1>
            <button onClick={changeColor}>Change color to blue</button>
        </>
    );
};



// In the functional component version, the state is managed using the useState hook. The favoriteColor 
// state is initialized with the initial value of "red", and the setFavoriteColor function is used to 
// update the state.

// The changeColor function remains the same, updating the favoriteColor state to "blue" when the 
// button is clicked.

// The useEffect hook is used to replicate the componentDidMount behavior. It sets a timeout that updates 
// the favoriteColor state to "yellow" after 5000 milliseconds (5 seconds). The empty dependency array ([]) 
// as the second argument ensures that the effect is only run once, simulating the behavior of 
// componentDidMount. Additionally, the cleanup function returned from useEffect is used to clear the 
// timeout to avoid memory leaks.