import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { fetchTheProducts } from '../redux/ActionCreators';
import { useDispatch } from 'react-redux/es/exports';


export default function Products() {
    const [products, setproducts] = useState([]);

    // const getProducts = async () => {
    //     const { data } = await axios.get(process.env.REACT_APP_STORE_API);
    //     console.log(process.env.REACT_APP_STORE_API)
    //     console.log(data);
    //     setproducts(data);
    }
    useEffect(() => {
        // getProducts();
       dispatch(fetchTheProducts());
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
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                           
                                        </div>
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
