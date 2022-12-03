import React from 'react'
import {useSelector} from 'react-redux';

function Cart() {
    const cartData = useSelector((state)=>state.productsData.cartData)
    console.log(cartData);
  return (
    <div>
        <div className='container'>
            {cartData && cartData.length>0 
            ? cartData.map((product)=>(
                <div className='row mt-3'>
                    <div className='col-md-4'>
                    <img src={product.image} alt={product.title} className='img-fluid' />
                </div>
                <div className='col-md-4'></div>
            </div>
            )):null
}
</div>
</div>
  )
}

export default Cart