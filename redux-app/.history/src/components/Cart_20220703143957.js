import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { notEligibleForOscar } from '../redux/ActionCreators'

function Cart() {
    const state1 = useSelector((state)=>state.productsData.cartData)
    console.log(state1)

    const dispatch = useDispatch();
  return (
    <div>
 {
    state1 && state1.length?(
        <div className='container border border-success'>
            {
                state1.map((user)=>(
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={user.picture} alt={user.title} className='img-fluid pt-5 w-75 h-50'/>
                        </div>
                        <div className='col-md-4'>

                            <div>
                                <p>firstName : {user.firstName}  lastName: {user.lastName}</p>
                            </div>
                            
                            <div>
                                <p className='fw-bold'>EMAIL:{user.email}  Gender :{user.gender}</p>
                            </div>
                           
                            <div>
                                <p className='fst-italic'>PHONE:{user.phone}</p>
                            </div>
                            <div>
                                <p className='fw-lighter'>{user.location.street} {user.location.city} {user.location.state}</p>
                            </div>
                            <div className='btn btn-info' onClick={()=>{dispatch(notEligibleForOscar(user.id))}}>DISQUALIFY</div>


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