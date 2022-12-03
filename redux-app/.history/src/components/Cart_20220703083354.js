import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const state1 = useSelector((state)=>state.productsData.cartData)
    console.log(state1)
  return (
    <div>
 {
    state1 && state1.length?(
        <div className='container'>
            {
                state1.map((user)=>{
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={user.picture} alt={user.title} className='img-fluid'/>
                        </div>
                        </div>
                })
            }
            </div>
    )
 }
    </div>
  )
}

export default Cart