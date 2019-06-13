import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class LogSign extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center py-3">
                <p className="col-12 font-weight-bold text-center">Want to build your own MYtinerary?</p>
                <div className="w-75 d-flex flex-wrap justify-content-between">
                    <Link to="/LogIn">Log in</Link>
                    <Link to="/SignUp">Create Account</Link>
                </div>
            </div>
        )
    }
}

export default LogSign
