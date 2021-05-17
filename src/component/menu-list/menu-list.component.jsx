import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './menu-list.style.scss';

const MenuList = ({ title, image, size, linkUrl, match }) => (
    <Link className={`${size} menu-list`} to={`${match.url}${linkUrl}`}
    >
        <div className="bgImage"
            style={
                { backgroundImage: `url(${image})` }
            }
        />
        <div className="menu-list-content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </Link>
)

export default withRouter(MenuList);