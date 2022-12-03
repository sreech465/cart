import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const cartdata = useSelector((state)=>state.productData.cartData)
    console.log(cartdata)
  return (
    <div>
 Cart page
    </div>
  )
}

export default Cart