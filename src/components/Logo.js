import React, { Component } from 'react'

import '../styles/mytinerary.css';

export class Logo extends Component {
    render() {
        return (
            <div className="py-3 my-3">
                <h1 className="logo text-danger display-4 font-weight-bold py-3 text-center">MYtinerary</h1>
                <div className="d-flex flex-wrap justify-content-between">
                    <h2 style={border} className="border border-dark rounded-circle text-center pt-2"><i className="fas fa-music"></i></h2>
                    <h2 style={border} className="border border-dark rounded-circle text-center pt-2"><i className="fas fa-plane"></i></h2>
                    <h2 style={border} className="border border-dark rounded-circle text-center pt-2"><i className="fas fa-utensils"></i></h2>
                    <h2 style={border} className="border border-dark rounded-circle text-center pt-2"><i className="fas fa-subway"></i></h2>
                </div>
            </div>
        )
    }
}

const border = {
    width: '60px',
    height: '60px'
}

export default Logo
