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
        <div className='container'>
            {
                state1.map((user)=>(
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={user.picture} alt={user.title} className='img-fluid'/>
                        </div>
                        <div className='col-md-4'>

                            <div>
                                <h3>firstName : {user.firstName}  lastName: {user.lastName}</h3>
                            </div>
                            
                            <div>
                                <h3>EMAIL:{user.email}  Gender :{user.gender}</h3>
                            </div>
                           
                            <div>
                                <h3>PHONE:{user.phone}</h3>
                            </div>
                            <div>
                                <h3>{user.location.street} {user.location.city} {user.location.state}</h3>
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