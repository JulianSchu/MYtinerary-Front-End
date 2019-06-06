import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export class Footer extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="d-flex justify-content-center fixed-bottom">
                <Link to="/" className="text-dark">
                    <h3><i className="fas fa-home"></i></h3>
                </Link>
            </div>
        )
    }
}

export default withRouter(Footer)