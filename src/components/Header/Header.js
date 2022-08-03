import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
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