import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'



 function Products() {

    const [users, setusers] = useState([]);

  

    getData = async() => {
        const response = await fetch('https://dummyapi.io/data/v1/user?page=1&limit=10', {
            headers: {
                "app-id": "62ab4c2cedcbc2dc96d36b50"
            }
        });
        const data1 = await response.json();
        console.log(data1);
         setusers(data1.data);
       
    }
    useEffect(() => {
        this.getData();
     
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
