import logo from './logo.svg';
import Child from './components/Child';
import React,{ useState,useContext } from 'react';


export const ThemeContext = React.createContext()

function App() {
  

   const [theme,setTheme]=useState('light')
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Child/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
