import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import contact from './components/contact';
import Product from './components/Product';
import {Redirect,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Switch>
     <Route to="/" component={Home} />
     <Route to="/products" component={Product} />
     <Route to="/about" component={About} />
     <Route to="/contact" component={Contact} />
     <Redirect to="/" />
     
    </Switch>

    </>
  );
}

export default App;
