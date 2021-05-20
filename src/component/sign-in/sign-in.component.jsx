import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' });
    }

    //storing the value to the state depending on the name
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="signin">
                <h2 className="title">I already Have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit" name="submit"> Sign In </CustomButton>
                        <CustomButton isGoogleButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;