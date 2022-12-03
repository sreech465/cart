import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/products' component={<Home/>}/>
     <Route path="/products" component={<Product/>}/>
     <Route path="/about" component={<About/>}/>
     <Route path="/contact" component={<Contact/>}/>
     </Routes>
     
     
    
    <Footer/>

    </>
  );
}

export default App;
