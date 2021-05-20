import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleButton, ...otherButtonProps }) => (
    <button className={`${isGoogleButton ? 'google-signin' : ''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;