import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 mt-3">
                <h3><i className="fas fa-user-circle"></i></h3>
                <h3><i className="fas fa-bars"></i></h3>
            </div>
        )
    }
}

export default Header
