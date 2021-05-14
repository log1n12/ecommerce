import React from 'react';
import './menu-list.style.scss';

const MenuList = ({ title, bgImage, size }) => (
    <div className={`${size} menu-list`} >
        <div className="bgImage"
            style={
                { backgroundImage: `url(${bgImage})` }
            }
        />
        <div className="menu-list-content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuList;