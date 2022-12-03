import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'



 function Products() {

    const [users, setusers] = useState([]);

  

    const getData = async() => {
        const data1 = await axios.get('https://dummyapi.io/data/v1/user?page=1&limit=10', {
            headers: {
                "app-id": "62ab4c2cedcbc2dc96d36b50"
            }
        });
        
        console.log(data1);
         setusers(data1.data);
       
    }
    useEffect(() => {
        getData();
     
    }, [])
    return (
        <div>
            <div className='container  py-5'>
                <div className='row'>
                    {
                        users && users.length > 0 && users.map((user) => (
                            <div className='col-md-3'>
                                <Link to={`/products/${user.id}`}>

                                    <div className="card">
                                        <img className="card-img-top" src={user.image} alt="Card image cap" />
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
