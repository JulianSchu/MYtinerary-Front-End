import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class ModalDelete extends Component {
    render() {
        return (
            <Container className="d-flex justify-content-center align-items-center h-100">
                <div>
                    <div className="profilePic" style={{backgroundImage: 'url("data:image/png;base64,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")'}}></div>   
                </div>
                <h3 className="title text-center">Are you sure you want to delete this itinerary?!</h3>
            </Container>
        )
    }
}

export default ModalDelete
