import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-list.style.scss';

const MenuList = ({ title, image, size, history, linkUrl, match }) => (
    <div className={`${size} menu-list`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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
    </div>
)

export default withRouter(MenuList);