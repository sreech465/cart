import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'



 function Products() {

    const [products, setproducts] = useState([]);

  

     const getProducts = async () => {
         const { data1 } = await fetch('https://dummyapi.io/data/v1/user?page=1&limit=10');
     
        console.log(data1.data);
        setproducts(data1.data);
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

                                    <div className="card">
                                        <img className="card-img-top" src={product.image} alt="Card image cap" />
                                      <span className='btn btn-info'>BUY NOW</span>
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
