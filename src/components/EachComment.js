import React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import '../styles/profilModal.css';

export class EachComment extends Component {

    onClick = (e) => {
        this.props.onDelete(e.target.id)
    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-start justify-content-center p-2 mt-0 mx-2 mb-2 rounded bg-white shadow">
                    <div className="d-flex justify-content-center col-2 mx-1 p-0">
                        <div className="profilIcon mx-0" style={{backgroundImage: `url(${this.props.comment.profilPic})`}}></div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start col-10 pl-0">
                        <div className="d-flex justify-content-between col-12 px-0">
                            <small className="title text-left col-12 px-0">{this.props.comment.userName}</small>
                            {   
                                this.props.user && this.props.user._id === this.props.comment.userId ?
                                <small><i id={this.props.comment._id} className="far fa-trash-alt" onClick={this.onClick}></i></small>
                                :
                                null
                            }
                        </div>
                        <small className="title text-left">{this.props.comment.created}</small>
                        <Card className="p-1 my-1 col-12">
                            <CardText className="title comments text-left text-break p-1 col-12">{ this.props.comment.comment }</CardText>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.auth.user
});
  
EachComment.propTypes = {
    user: PropTypes.object
}
  
export default connect(mapStateToProps)(EachComment)
