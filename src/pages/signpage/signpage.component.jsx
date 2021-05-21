import React from 'react';

import './signpage.style.scss';

import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignPage = () => (
    <div className="signpage">
        <SignIn />
        <SignUp />

    </div>
)

export default SignPage;