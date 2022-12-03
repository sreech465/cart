import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const state = useSelector((state)=>state)
    console.log(state)
  return (
    <div>
 Cart page
    </div>
  )
}

export default Cart