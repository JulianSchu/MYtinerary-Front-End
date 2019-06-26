import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'

export class LogIn extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center my-3">
                <div className="title d-flex">
                    <h3>Login</h3>
                    <p>hello</p>
                </div>
                <LoginForm />
            </div>
        )
    }
}

export default LogIn
