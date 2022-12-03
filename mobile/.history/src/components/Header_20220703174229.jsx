import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid py-2">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link p-2" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link p-2" to="/products">product</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link p-2" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link p-2" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                           
                        </ul>

                    </div>
                    <NavLink className='navbar-brand mx-auto fw-bold' to='/'>APPLE MART</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header