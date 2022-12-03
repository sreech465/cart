import React from 'react'

const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid py-2">
                    <NavLink class="navbar-brand" href="#">Navbar</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" href="#">product</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" href="#">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" href="#">Contact</NavLink>
                            </li>
                            
                            
                           
                        </ul>

                    </div>
                    <NavLink className='nav-link' href='#'>Navbar</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header