import React from 'react';

import './custom-button.style.scss';
import './custom-button.component';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;