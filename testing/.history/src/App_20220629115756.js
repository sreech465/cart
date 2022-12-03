import logo from './logo.svg';
import './App.css';
import UseStateHook1 from './components/UseStateHook1';
import React,{ useState,useContext } from 'react';


export const ThemeContext = React.createContext()

function App() {
  

   const [theme,setTheme]=useState('light')
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <UseStateHook1/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
