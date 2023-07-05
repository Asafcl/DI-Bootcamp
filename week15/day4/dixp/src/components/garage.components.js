// import React, {Component} from 'react'

// export class Garage extends Component{
//     render(){
//         return <p>who live in my garage</p>
//     }
// }

// import React, {Component} from 'react'

// export class Garage extends Component{

//     constructor(props){
//         super(props)
//         console.log(props)
//     }
//     render(){
//         return <p>who lives in my {this.props.size} garage</p>
//     }
// }

// import React from "react";

// export function Garage(props) {
//     return <p>Who lives in my {props.size} garage?</p>
// }

//B

// import React from "react";

// export function Garage(props) {
//     const size = props.size;
//     return <p>Who lives in my {size} garage?</p>
// }

//C

// import React from "react";

// export function Garage(props) {
//     const {size} = props;
//     return <p>Who lives in my {size} garage?</p>
// }

//D

import React from "react";

export function Garage({ size }) {
  return <p>Who lives in my {size} garage?</p>;
}
