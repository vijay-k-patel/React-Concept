import React,{useReducer} from 'react'
import PropTypes from 'prop-types';
const initialState = {
  firstCounter: 0,
  secondCounter: 10
};

const reducer = (state,action) => {
  switch(action.type){
    case 'increment':
      return {...state,firstCounter : state.firstCounter + action.value}
    case 'decrement':
      return {...state,firstCounter : state.firstCounter - action.value}
    case 'increment10':
      return {...state,secondCounter : state.secondCounter + action.value}
    case 'decrement10':
      return {...state,secondCounter : state.secondCounter - action.value}
    case 'reset':
        return initialState
    default:
      return state
  }
}

function Counter2() {

  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>Complex Count - {count.firstCounter}</h1>
      <h1>10 Count - {count.secondCounter}</h1>
      <button onClick={()=>dispatch({type:'increment10', value:1})}>Increment 10</button>
      <button onClick={()=>dispatch({type:'decrement10', value:1})}>Decrement 10</button>
      <button onClick={()=>dispatch({type:'increment', value:1})}>Increment 1</button>
      <button onClick={()=>dispatch({type:'increment', value:2})}>Increment 2</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}
// initialState.propTypes = {
//   firstCounter:PropTypes.string,
// }

export default Counter2
