import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">ExerTracker</a>
            <button className="navbar-toggler" type="button"  onClick={handleNavCollapse} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className='nav-link'>Exercises</Link>
                    </li>
                    <li className='nav-item' >
                        <Link to="/create" className='nav-link'>Create Exercise Log</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/user" className='nav-link'>Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar