import React,{useContext} from 'react'
import { ThemeContext } from '../App.js'


 export default useStateHook1 = ({theme,setTheme}) => {
    // const [count,setCount] = useState(0);

    const data = useContext(ThemeContext)
    console.log(data);

  
  return (
    // <div>
    //     <h1>StateCount : {count}</h1>
    //     <h1>ReducerCount : {reducer}</h1>
    //     <button onClick={()=>setCount(count+1)} className="btn btn-info ms-3">Increment</button>
    //     <button onClick={()=>setCount(count-1)} className="btn btn-info ms-3">Decrement</button>
    // </div>
    <>
    <div>
      <h4>USESTATEHOOK - {theme}</h4>
      <button className='btn btn-info'
         onClick={()=>{
                setTheme('dark')
         }}
         >Toggle</button>
    </div>
    </>
  )
}
