import React, { useState,useContext } from 'react'

import {ThemeContext} from '../App'

 export default UseStateHook = () => {
    // const [count,setCount] = useState(0);

    const colorChange = useContext(ThemeContext)

  
  return (
    // <div>
    //     <h1>StateCount : {count}</h1>
    //     <h1>ReducerCount : {reducer}</h1>
    //     <button onClick={()=>setCount(count+1)} className="btn btn-info ms-3">Increment</button>
    //     <button onClick={()=>setCount(count-1)} className="btn btn-info ms-3">Decrement</button>
    // </div>
    <>
    <h1>{value}</h1>
    </>
  )
}
