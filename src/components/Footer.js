import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export class Footer extends Component {
    getClass = () => {
        if (this.props.location.pathname === "/") {
            return 'text-muted'
        } else {
            return 'text-dark'
        }
    }

    getStyle = () => {
        if (this.props.location.pathname === "/") {
            return {
                pointerEvents: 'none'  
            }
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center fixed-bottom">
                <Link to="/" style={this.getStyle()} className={this.getClass()} >
                    <h3><i className="fas fa-home"></i></h3>
                </Link>
            </div>
        )
    }
}

export default withRouter(Footer)