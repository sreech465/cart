import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function Product() {


    const [product , setproduct] = useState({});

  const {id} =  useParams();
  const getTheSingleProduct = async()=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setproduct(data);
    
  }

  useEffect(()=>{
    getTheSingleProduct();
  })

  
  
  return (
    <div>

<div className='container'>
    {
        Object.keys(product).length>0 ? (
            <div className='row border border-primary mt-2'>
                <div className='col-md-6' >
                    <img className= 'img-fluid' src={product.image} alt={product.title} />
                    </div>

                    <div className='col-md-6'>
                      <div className='mt-2'>
                      <h3 className='p-3'>{product.title}</h3>
                      </div>
                      <div className='product_price'>
                       <span className='bg-info p-2 text-white'>Price: ${product.price}</span>
                      </div>
                      <div className='product_Category'>
                       <h2 className='py-3'>Category: ${product.category}</h2>
                      </div>

                      <div className='product_description'>
                       <p className='py-3'>Description: ${product.description}</p>
                      </div>

                    </div>

                   

                    <div className='product_addTocart'>
                        <span className='bg-info p-2 text-white'>Add to Cart</span>
                    </div>

            </div>
        ):null
    }

</div>


    </div>
  )
}

export default Product