import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Products from '../Products';
import Product from '../Product';


export default function RouterComp() {
  return (
    <div>
      <Routes>
        <Route path='/products' element={<Products/>}/>

        <Route path='/products/:id' element={<Product/>}/>

        <Route path='/cart' element={<Cart/>}/>



       

      </Routes>
    </div>
  )
}
