import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>SignUp</Link>
        </div>
    );
};

export default Nav;