import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({ }) => (
    <div className="header">
        <Link className="logo-container">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/">Home</Link>
            <Link className="option" to="/shop">Shop</Link>
        </div>

    </div>
)

export default Header;