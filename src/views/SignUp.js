import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm'

export class SignUp extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center my-3">
                <div className="title d-flex">
                    <h3>SignUp</h3>
                    <p>Welcome</p>
                </div>
                <SignUpForm />
            </div>
        )
    }
}

export default SignUp
