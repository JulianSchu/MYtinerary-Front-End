import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class HomeText extends Component {
    render() {
        return (
            <div style={font} className="d-flex flex-wrap justify-content-center py-3">
                <p className="col-12 font-weight-bold text-center">Find your perfect trip, designed by insiders who know and love their cities.</p>
                <h4 className="col-12 font-weight-bold text-center">Start browsing</h4>
                <p className="text-center col-12"><Link to="/Cities" className="text-dark"><i className="display-3 fas fa-arrow-alt-circle-right"></i></Link></p>
            </div>
        )
    }
}

const font = {
    fontFamily: "'Gloria Hallelujah', cursive"
}

export default HomeText
