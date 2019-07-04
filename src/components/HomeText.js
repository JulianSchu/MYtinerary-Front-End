import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

import '../styles/mytinerary.css'

export class HomeText extends Component {

    logout = () => {
        // if(this.props.user.country === 'Google') {
        //     this.signOut()
        // }

        this.props.logout();
        this.setState({
          menuOpen: false
        })
    }

    signOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }

    render() {
        return (
            <div className="title d-flex flex-wrap justify-content-center py-3">
                { this.props.isAuthenticated ? 
                <h2 className="col-12 font-weight-bold text-center">Welcome back {this.props.user.userName}</h2> :
                <p className="col-12 font-weight-bold text-center">Find your perfect trip, designed by insiders who know and love their cities.</p>
                }
                <h4 className="col-12 font-weight-bold text-center pt-3 mt-3">Start browsing</h4>
                <h1  className="iconBorder text-center"><Link to="/cities" className="link text-dark"><i className="fas fa-camera pt-2"></i></Link></h1>
                
                { this.props.isAuthenticated ? 
                <div className="col-12">
                    <p className="link text-dark text-center font-weight-bold my-3" onClick={this.logout}>Log out</p>
                </div> :
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
    // token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});
  
HomeText.propTypes = {
  // token: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
}
  
export default connect(mapStateToProps, { logout })(HomeText)
