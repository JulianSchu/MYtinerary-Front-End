import React, { Component } from 'react'

export class ChosenCity extends Component {
    state = {
        chosenCity: ''
    }
    
    componentDidMount() {
        const { city } = this.props.match.params
        console.log(city)
        this.setState({chosenCity: city})
    }

    render() {
        return (
            <div>
                <p>Hi</p>
                <p>{ this.state.chosenCity }</p>
            </div>
        )
    }
}

export default ChosenCity
