import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'



 function Products() {

    const [products, setproducts] = useState([]);

  

     const getProducts = async () => {
         const { data } = await axios.get('https://fakestoreapi.com/products');
     
        console.log(data);
        setproducts(data);
    }
    useEffect(() => {
        getProducts();
     
    }, [])
    return (
        <div>
            <div className='container  py-5'>
                <div className='row'>
                    {
                        products && products.length > 0 && products.map((product) => (
                            <div className='col-md-3'>
                                <Link to={`/products/${product.id}`}>

                                    <div class="card">
                                        <img class="card-img-top" src={product.image} alt="Card image cap" />
                                      <button className='btn btn-success'>BUY NOW</button>
                                    </div>

                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
export default Products;
