import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




function Product() {


    const [users1 , setUsers1] = useState({});

  const {id} =  useParams();
  const getTheSingleProduct = async()=>{
    const response2 = await fetch(`https://dummyapi.io/data/v1/user/${id}`,{
      headers: {
        "app-id": "62ab4c2cedcbc2dc96d36b50"
    }
    });
    const data1 = await response2.json();
    console.log(data1);
     setUsers1(data1);
    
  }

  useEffect(()=>{
    getTheSingleProduct();
  })

  
  
  return (
    <div>

<div className='container'>
    {
        Object.keys(users1).length>0 ? (
            <div className='row border border-primary mt-2'>
                <div className='col-md-6' >
                    <img className= 'img-fluid' src={users1.picture} alt={users1.title} />
                    </div>

                    <div className='col-md-6'>
                      <div className='mt-2'>
                      <h3 className='p-3'>{users1.title}</h3>
                      </div>
                      <div className='product_price'>
                       <span className='bg-info p-2 text-white'>Price: ${users1.email}</span>
                      </div>
                      <div className='product_Category'>
                       <h2 className='py-3'>Category: ${users1.firstName}</h2>
                      </div>

                      <div className='product_description'>
                       <p className='py-3'>Description: {users1.gender}</p>
                      </div>

                      <div className='product_rating'>
                       <p className='py-3'>Rating: {users1.title}</p>
                  
                      </div>


                      <div className='product_addTocart'>
                        <span className='bg-info p-2 text-white'>Add to Cart</span>
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