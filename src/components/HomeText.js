import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

import '../styles/mytinerary.css'

export class HomeText extends Component {
    render() {
        return (
            <div className="title d-flex flex-wrap justify-content-center pb-3">
                { this.props.isAuthenticated ? 
                <div>
                    <h2 className="col-12 font-weight-bold text-center pt-3">Welcome back</h2>
                    <h2 className="col-12 font-weight-bold text-center">{this.props.user.userName}</h2>
                </div> :
                <h2 className="col-12 font-weight-bold text-center">Find your perfect trip, designed by insiders who know and love their cities.</h2>
                }
                <h4 className="col-12 font-weight-bold text-center py-3 my-3">Start browsing</h4>
                <h1  className="iconBorder text-center"><Link to="/cities" className="link text-dark"><i className="fas fa-camera pt-2"></i></Link></h1>
                
                { this.props.isAuthenticated ? 
                null :
                <div className="title d-flex flex-wrap text-center justify-content-center py-3 col-12">
                    <div className="col-12"><Link to="/LogIn" className="text-dark font-weight-bold link">Log in</Link></div>
                    <p className="my-3">-- or --</p>
                    <div className="col-12"><Link to="/SignUp" className="text-dark font-weight-bold link">Create Account</Link></div>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});
  
HomeText.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
}
  
export default connect(mapStateToProps, { logout })(HomeText)
