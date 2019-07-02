import config from '../config';
import '../styles/mytinerary.css';
import React, { Component } from 'react';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { googleLogin } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

const GOOGLE_BUTTON_ID = 'google-sign-in-button';

export class Google extends Component {
    componentDidMount() {
        window.gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            window.auth2 = window.gapi.auth2.init({
              client_id: config.google,
              cookiepolicy: 'single_host_origin',
              // Request scopes in addition to 'profile' and 'email'
              //scope: 'additional_scope'
            });
            window.auth2.attachClickHandler(document.getElementById(GOOGLE_BUTTON_ID), {},
                (googleUser) => {
                    const profile = googleUser.getBasicProfile()
                    const userName = profile.getName();
                    const email = profile.getEmail();
                    const profilPic = profile.getImageUrl();
                    const user = {
                        userName,
                        email,
                        profilPic
                    }
                    console.log(user);
                    this.props.googleLogin(user);
                }, function(error) {
                  alert(JSON.stringify(error, undefined, 2));
                });
          })
    }

    render() {
        return (
            <button id={GOOGLE_BUTTON_ID} className="col-12 btn btn-warning py-1 shadow" type="button">
                <img className="rounded-circle loginIcon" src={require('../assets/GoogleIcon.jpg')} alt="google.jpg"/>
                <span className="ml-2">Google Account</span>
            </button>
        )
    }
}

const mapStateToProps = state => ({
    // token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    // user: state.auth.user,
    error: state.error
 });

Google.propTypes = {
    googleLogin: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { googleLogin, clearErrors })(Google)
