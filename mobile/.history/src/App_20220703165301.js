import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import {Route,Routes} from 'react-router';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/products' element={<Home/>}/>
     <Route path="/products" element={<Product/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Routes>
     
     
    
    <Footer/>

    </>
  );
}

export default App;
