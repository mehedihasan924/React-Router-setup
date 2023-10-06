import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='menu' >    
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/frends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};
 
export default Header;