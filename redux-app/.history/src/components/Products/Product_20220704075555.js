import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {eligibleForOscar} from '../../redux/ActionCreators'
import { useDispatch } from 'react-redux/es/exports'




function Product() {

const dispatch = useDispatch()
    const [users1 , setUsers1] = useState({});

  const {id} =  useParams();
  const getTheSingleProduct = async()=>{
    const response2 = await fetch(`https://dummyapi.io/data/v1/user/${id}`,{
      headers: {
        "app-id": "62ab4c2cedcbc2dc96d36b50"
    }
    });
    const data1 = await response2.json();
     setUsers1(data1);
    
  }

  useEffect(()=>{
    getTheSingleProduct();
  })

  const handleClick = (users1)=>{
   dispatch(eligibleForOscar(users1));
    console.log(users1);
  }
  
  return (
    <div>

<div className='container'>
    {
        Object.keys(users1).length>0 ? (
            <div className='row border border-primary mt-2'>
                <div className='col-md-6' >
                    <img style={{width:'160px',height:'250px'}}className= 'img-fluid p-5' src={users1.picture} alt={users1.title} />
                    </div>

                    <div className='col-md-6'>
                      <div className='mt-2'>
                      <p className='p-3 fst-italic'>Phone:{users1.phone}</p>
                      </div>
                      <div className='product_price'>
                       <span className='bg-info p-2 text-white fw-lighter'>EMAIL: {users1.email}</span>
                      </div>
                      <div className='product_Category'>
                       <h2 className='py-3 fw-lighter'>firstName: {users1.firstName}  lastName: {users1.lasttName}</h2>
                      </div>

                      <div className='product_description'>
                       <p className='py-3 fw-bolder'>Gender: {users1.gender}   DOB: {users1.dateOfBirth}</p>
                      </div>

                      <div className='product_rating'>
                       <p className='py-3 fw-normal'>Title: {users1.title}</p>
                  
                      </div>

                      <div className='product_rating'>
                       <p className='py-3'>STREET: {users1.location.street}  CITY: {users1.location.city} STATE: {users1.location.state}</p>
                  
                      </div>


                      <div className='product_addTocart'>
                        <span className='bg-info p-2 text-white' onClick={()=>handleClick(users1)}>Eligible for OSCAR </span>
                    </div>

                    </div>

                   

                  

            </div>
        ):null
    }

</div>


    </div>
  )
}

export default Product