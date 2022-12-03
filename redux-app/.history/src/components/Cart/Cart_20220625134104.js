import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';

function Cart() {
    const [total , setTotal]  = useState(0);
    const cartData = useSelector((state)=>state.productsData.cartData)
    console.log(cartData);

    const getTheTotal = ()=>{
        const grandTotal = cartData.reduce((total,currentvalue)=>total+currentvalue.price,0)
        setTotal(grandTotal);
    }

    useEffect(()=>{
        getTheTotal();
    })
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