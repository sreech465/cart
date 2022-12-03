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

  const handleClick = (product)=>{
    dispatch(addToCart(product));
    console.log(product)
  }
  
  return (
    <div>

<div className='container'>
    {
        Object.keys(product).length>0 ? (
            <div className='row mt-2'>
                <div >
                    <img src={product.image} />
                    </div>

                    <div className='product_addTocart'>
                        <button className='btn btn-info px-3 py-2' onClick={()=>handleClick(product)}>Add to Cart</button>
                    </div>

            </div>
        ):null
    }

</div>


    </div>
  )
}

export default Product