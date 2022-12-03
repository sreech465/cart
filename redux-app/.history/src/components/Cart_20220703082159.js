import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const state1 = useSelector((state)=>state.productData.cartData)
    console.log(state1)
  return (
    <div>
 Cart page
    </div>
  )
}

export default Cart