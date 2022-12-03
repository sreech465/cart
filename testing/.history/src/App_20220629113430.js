import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/useStateHook';




function App() {
   const ThemeContext = React.createContext()
  return (
    <>
    <ThemeContext.Provider value={chandy}>
    <UseStateHook/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
