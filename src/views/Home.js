import React, { Component } from 'react';

import Logo from '../components/Logo';
import HomeText from '../components/HomeText';

export class Home extends Component {
    state = {
        name: '',
        imgUrl: '',
        country: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = (e) => {
        e.preventDefault();
        const city = this.state
        console.log(city)
        fetch(`http://localhost:5000/api/cities`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(city), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTQ5Y2FjNDhkN2JlNjU5NDc0ODIwOCIsImlhdCI6MTU2MTY0MDA2NywiZXhwIjoxNTkzMTc2MDY3fQ.ywkvciViEGxyO4HD_u9N0iNypwlbGUjLQkvEAEuGy3A' } 
          }).then(res => res.json())
          .then(response => console.log('Success:', response))
          .catch(error => console.log('Error:', error));
    }

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
