import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-primary text-white text-center mt-5 py-3 d-flex align-items-center justify-content-center'>
            <p><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;