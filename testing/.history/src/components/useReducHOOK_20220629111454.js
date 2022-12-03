import React,{useReducer} from 'react';

export const reducer = (currentState,action)=>{
    console.log(action);
    //reducer is used to update the state based on action 
    //return value of reducer is updated state
    switch(action.type){
    case 'INCREMENT' : 
                  return currentState + 1;
    case 'DECREMENT' :
               return currentState - 1;
    default : 
          return currentState;
    }
}

const UseReducerHook = () => {
    const [count,dispatch]=useReducer(reducer,0)
  return (
    <div>
       <h1>Count : {count}</h1>
       <button onClick={()=>dispatch({type:'INCREMENT',payload : 1})} className="btn btn-info ms-3">Increment</button>
       <button onClick={()=>dispatch({type:'DECREMENT',payload: 1})} className="btn btn-info ms-3">Decrement</button>
    </div>
  )
}

export default UseReducerHook;