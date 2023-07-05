// import React, {Component} from "react"
// import {Garage} from './garage.components'

// const carinfo = {name:"Ford", model:"Mustang"};

// export class Car extends Component {


//     constructor(){
//         super()
//         this.state = {color:'red'}
//     }
//     render() {           

//         return(
//             <>
//             <header>this car is a {carinfo.model}</header>
//             <h2>this is car {this.state.color}</h2>
//             <p>garage component: </p>
//             <Garage/>
//             <Garage size ="small"/>
//             </>
//             ) 
//     }
// }





import React from 'react'
import {Garage} from './garage.components'

const carinfo = {name:"Ford", model:"Mustang"};

export function Car(){
    const color ='red'

    return(
        <>
        <header>this car is a {carinfo.model}</header>
        <h1>this car is {color}</h1>
        <p>garage component: </p>
        <Garage size='small'/>
        <Garage size='big'/>
        </>
    )
}
