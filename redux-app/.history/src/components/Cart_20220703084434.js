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
                state1.map((user)=>(
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={user.picture} alt={user.title} className='img-fluid'/>
                        </div>
                        <div className='col-md-4'>

                            <div>
                                <h3>{user.firstName}</h3>
                            </div>
                            <div>
                                <h3>{user.lastName}</h3>
                            </div>
                            <div>
                                <h3>{user.email}</h3>
                            </div>
                            <div>
                                <h3>{user.gender}</h3>
                            </div>
                            <div>
                                <h3>{user.phone}</h3>
                            </div>
                            <div>
                                <h3>{user.location.street}</h3>
                            </div>


                        </div>
                        </div>
                ))
            }
            </div>
    ):(<p>No items in the Cart</p>)
 }
    </div>
  )
}

export default Cart