import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export class GoAndSee extends Component {
    onChoose = () => {
        this.props.onClickingThis()
    }

    render() {
        return (
            <Container className="d-flex justify-content-center align-items-center h-100">
                <div>
                    <div className="profilePic" style={{backgroundImage: 'url("https://www.customsnappies.com/images/custom_products_image_categories/4/1470435861_emoji-basic-rosy_cheeks.png")'}}></div>   
                </div>
                <h3 className="title text-center">Your own itineray has been created successfully! <Link to="/cities" className="text-decoration-none text-info" onClick={this.onChoose}>Go and have a look!</Link></h3>
            </Container>
        )
    }
}

export default GoAndSee
