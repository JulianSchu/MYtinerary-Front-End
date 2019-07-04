import React, { Component } from 'react'

import '../styles/mytinerary.css';

export class Logo extends Component {
    render() {
        return (
            <div className="py-3 my-3">
                <h1 className="logo display-4 font-weight-bold py-3 text-center text-shadow">MYtinerary</h1>
            </div>
        )
    }
}

export default Logo
