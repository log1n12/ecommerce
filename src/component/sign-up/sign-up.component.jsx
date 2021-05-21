import React from 'react';

import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        //destructure current state
        const { displayName, email, password, confirmPassword } = this.state;

        //if the password is not identical dont do anything
        if (password !== confirmPassword) {
            alert('Password dont match');
            return;
        }

        //create auth using the destructured data from the top
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            //so the input forms will show nothing
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }

        catch (error) {
            console.log("Error", error.message);
        }
    }


    //setting value to the state simus
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title">Sign Up</h1>
                    <FormInput type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} label="Name" required />
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} label="Confirm Password" required />

                    <CustomButton type="submit" name="submit"> Sign Up </CustomButton>
                </form>
            </div>

        )
    }
}

export default SignUp;