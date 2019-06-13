import React, { Component } from 'react';

import Logo from '../components/Logo';
import HomeText from '../components/HomeText';
import LogSign from '../components/LogSign';

export class Home extends Component {
    render() {
        return (
            <div>
                <Logo />
                <HomeText/> 
                <LogSign />
            </div>
        )
    }
}

export default Home
