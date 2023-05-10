import React, {useReducer} from 'react'
const initialstate=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialstate
        default:
            return state
    }
}
function CounterOne() {
    const[count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <div><h1>Count -{count}</h1></div><br/>
        <button onClick={()=>dispatch('increment')}>+</button>
        <button onClick={()=>dispatch('decrement')}>-</button>
        <button onClick={()=>dispatch('reset')}>~</button>
    </div>
  )
}

export default CounterOne