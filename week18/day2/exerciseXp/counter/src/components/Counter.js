import React, { Component } from 'react';
import {connect} from "react-redux";
import { decrementActions, incrementActions, incrementifOdd } from '../actions/counter.actions';

// class Counter extends Component {
//     constructor(props){
//         super(props)
//         console.log(props);
//     }

//     handlerIncrementAsync = () =>{
//       setTimeout(() =>{
//         this.props.dispatch({type: 'INCREMENT'})
//       }, 1000);
//     }
//   render() {
//     return (
//       <div>Counter: {this.props.counter}
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>this.props.dispatch({type: "DECREMENT"})}>-</button>
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT_IF_ODD"})}>INCREMENT IF ODD</button>
//       <button onClick={this.handlerIncrementAsync}>increment async</button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//     return {counter: state.counterReducer}
//   }

// export default connect(mapStateToProps)(Counter);





class Counter extends Component {
  constructor(props){
      super(props)
      console.log(props);
  }

  handlerIncrementAsync = () =>{
    setTimeout(() =>{
      this.props.dispatch({type: 'INCREMENT'})
    }, 1000);
  }
render() {
  return (
    <div>Counter: {this.props.counter}
    <button onClick={()=>this.props.dispatch(incrementActions)}>+</button>
    <button onClick={()=>this.props.dispatch(decrementActions)}>-</button>
    <button onClick={()=>this.props.dispatch(incrementifOdd)}>INCREMENT IF ODD</button>
    <button onClick={this.handlerIncrementAsync}>increment async</button>
    </div>
  );
}
}

function mapStateToProps(state){
  return {counter: state.counterReducer}
}

export default connect(mapStateToProps)(Counter);



// PART 1 (USING FUNCTIONAL COMPONENT)



//PART 1 FUNCTIONAL COMPONENT

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function Counter() {

//     const counter = useSelector(state => state.counterReducer);
//     const dispatch = useDispatch();

//     return (
//       <div>Counter: {counter}
//       <button onClick={()=>dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>dispatch({type: "DECREMENT"})}>-</button>
//       </div>
//     );
//   }
//   export default Counter;
 
  // The useSelector hook is used to access the counter state from the Redux store.
  // The useDispatch hook is used to get the dispatch function, which is used to dispatch actions.

  // The connect HOC is not needed anymore, as hooks directly provide access to the store's state 
  // and dispatch function.


  // PART 2 FUNCTIONAL COMPONENT


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function Counter() {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counterReducer);

//   const handleIncrementAsync = () => {
//     setTimeout(() => {
//       dispatch({ type: 'INCREMENT' });
//     }, 1000);
//   };

//   return (
//     <div>
//       Counter: {counter}
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button onClick={() => dispatch({ type: 'INCREMENT_IF_ODD' })}>Increment if odd</button>
//       <button onClick={handleIncrementAsync}>Increment async</button>
//     </div>
//   );
// }
// export default Counter;


  // The useSelector hook is used to access the counter state from the Redux store.
  // The useDispatch hook is used to get the dispatch function, which is used to dispatch actions.
  // The handleIncrementAsync function remains the same, as it is still responsible for 
  // dispatching the 'INCREMENT' action after a delay.
  // The connect HOC is not needed anymore, as hooks directly provide access to the store's state 
  // and dispatch function.