import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            <div><NavLink className='link' activeClassName='active' to="/collections">collections </NavLink></div>
            <div><NavLink className='link' activeClassName='active' to="/books">books </NavLink></div>
        </div>
    );
};

export default Header;