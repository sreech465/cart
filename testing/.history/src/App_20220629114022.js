import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/useStateHook';
import { useState } from 'react';


export const ThemeContext = React.createContext()

function App() {
  

   const [theme,setTheme]=useState('light')
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <UseStateHook/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
