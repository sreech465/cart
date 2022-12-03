import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/useStateHook';


const ThemeContext = React.createContext()

function App() {
  return (
    <>
    <ThemeContext.Provider value={chandy}>
    <UseStateHook/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
