import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <CustomLink className='custom-link' to='/'>Home</CustomLink>
            <CustomLink className='custom-link' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='custom-link' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='custom-link' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='custom-link' to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;