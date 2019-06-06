import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import Logo from '../components/Logo';
import HomeText from '../components/HomeText';
import LogSign from '../components/LogSign';
import LogIn from './LogIn';
import SignUp from './SignUp';

export class Home extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={props => (
                <React.Fragment>
                <Logo />
                <HomeText/> 
                <LogSign />
                </React.Fragment>
                )} />
                <Route path="/LogIn" component={LogIn} />
                <Route path="/SignUp" component={SignUp} /> 
            </div>
        )
    }
}

export default Home
