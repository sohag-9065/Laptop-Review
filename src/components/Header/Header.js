import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    let location = useLocation();
    console.log("Path" + location.pathname)

    // Not Found Path Check 
    if (location.pathname === '/404') {
        return null;
    }
    // Not Found Path Check Another way
    //   if(location.pathname !== '/Home' && location.pathname !== '/Review' && location.pathname !== '/Dashboard' && location.pathname !== '/Blogs' && location.pathname !== '/About' && location.pathname !== '/Home' ){
    //     // nagigate("/Review");
    //     console.log('Sohag')
    //      return null;
    //   }
    return (
        <nav className='headerNav'>
            <div className='nav'>
                <Link to='/Home'>Home</Link>
                <Link to="/Review">Review</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Blogs">Blogs</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
    );
};

export default Header;