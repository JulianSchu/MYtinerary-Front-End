import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/mytinerary.css'

export class HomeText extends Component {
    render() {
        return (
            <div style={font} className="d-flex flex-wrap justify-content-center py-3">
                <p className="col-12 font-weight-bold text-center">Find your perfect trip, designed by insiders who know and love their cities.</p>
                <h4 className="col-12 font-weight-bold text-center">Start browsing</h4>
                <h1  className="iconBorder text-center"><Link to="/cities" className="link text-dark"><i className="fas fa-camera"></i></Link></h1>
            </div>
        )
    }
}

const font = {
    fontFamily: "'Gloria Hallelujah', cursive"
}

export default HomeText
