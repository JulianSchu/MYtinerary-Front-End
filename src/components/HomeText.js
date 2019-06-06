import React, { Component } from 'react'

export class HomeText extends Component {
    render() {
        return (
            <div style={font} className="justify-content-center py-3">
                <p className="font-weight-bold text-center">Find your perfect trip, designed by insiders who know and love their cities.</p>
                <h4 className="font-weight-bold text-center">Start browsing</h4>
                <h1 className="text-center"><i className="display-3 fas fa-arrow-alt-circle-right"></i></h1>
            </div>
        )
    }
}

const font = {
    fontFamily: "'Courgette', cursive"
}

export default HomeText
