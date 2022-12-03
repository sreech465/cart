import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Router} from 'react-router-dom';
import RouterComp from './components/Products/Routes/RouterComp';

function App() {
  return (
    <div className="App">
   <Header/>
   <RouterComp/>
    </div>
  );
}

export default App;
