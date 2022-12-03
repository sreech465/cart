import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const cartData = useSelector((state)=>state)
    console.log(cartData)
  return (
    <div>
 Cart page
    </div>
  )
}

export default Cart