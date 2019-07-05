import React, { Component } from 'react';

import Logo from '../components/Logo';
import HomeText from '../components/HomeText';

export class Home extends Component {

    render() {
        return (
            <div>
                <Logo />
                <HomeText/>
            </div>
        )
    }
}

export default Home
