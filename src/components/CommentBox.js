import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Card, CardText } from 'reactstrap';
import { writeNewCo, fetchComments } from '../actions/commentActions';
import PropTypes from 'prop-types';
import '../styles/profilModal.css';

export class CommentBox extends Component {
    state = {
        comment: '',
        filteredComments: this.props.comments,
        newComments: [],
        text: 'Be the first one to comment!'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    filteredComments = () => {

        const abc = this.props.comments.filter(comment => {
            if(comment.itId.match(this.props.itId)) return true
        })  
        return abc
    }

    onEnter = (e) => {
        if (e.key === 'Enter') {
            this.onSend()
        }
    }

    onSend = () => {

        const today = new Date().toISOString();
        const date = today.slice(0, 10);
        const time = new Date().toString().slice(16, 24);
        const messageTime = date + " " + time;

        const newComment = {
            userName: this.props.user.userName,
            userId: this.props.user._id, 
            profilPic: this.props.user.profilPic, 
            comment: this.state.comment,
            itId: this.props.itId,
            created: messageTime
        }

        this.props.writeNewCo(newComment)
        const newComments = this.state.newComments;
        newComments.unshift(newComment)
        this.setState({
            newComments,
            comment: '',
            text: ''
        })
    }

    render() {
            return (
                <div style={{backgroundColor: 'rgba(174, 220, 218, 0.2)'}} className="rounded shadow my-3 pb-3">
                    <p className="title text-left m-0 p-3">People Talking</p>
                    
                    { this.props.user && this.state.newComments.length !== 0 ?

                    this.state.newComments.map((comment, index) => (
                    <div key={index} className="d-flex align-items-start justify-content-center p-2 mt-0 mx-2 mb-2 rounded bg-white shadow">
                        <div className="d-flex justify-content-center col-2 mx-1 p-0">
                            <div className="profilIcon mx-0" style={{backgroundImage: `url(${ comment.profilPic })`}}></div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-start col-10 pl-0">
                            <small className="title text-left col-12 px-0">{ comment.userName }</small>
                            <small className="title text-left">{ comment.created }</small>
                            <Card className="p-1 my-1 col-12">
                                <CardText className="title comments text-left text-break p-1 col-12">{ comment.comment }</CardText>
                            </Card>
                        </div>
                    </div> )) : null
                    }

                    { this.filteredComments().length !== 0 ?

                    this.filteredComments().map((comment, index) => (
                    <div key={index} className="d-flex align-items-start justify-content-center p-2 mt-0 mx-2 mb-2 rounded bg-white shadow">
                        <div className="d-flex justify-content-center col-2 mx-1 p-0">
                            <div className="profilIcon mx-0" style={{backgroundImage: `url(${comment.profilPic})`}}></div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-start col-10 pl-0">
                            <small className="title text-left col-12 px-0">{comment.userName}</small>
                            <small className="title text-left">{comment.created}</small>
                            <Card className="p-1 my-1 col-12">
                                <CardText className="title comments text-left text-break p-1 col-12">{ comment.comment }</CardText>
                            </Card>
                        </div>
                    </div> )
                    ) : 
                    <p className="title text-left m-0 px-3">{ this.state.text }</p>
                }

                { this.props.user ?
                    <div className="d-flex p-2">
                        <input className="title comments w-100 p-1 my-3 border border-info border-right-0 rounded-left" type="text" name="comment" placeholder="Say something" value={this.state.comment} onChange={this.onChange} onKeyDown={this.onEnter}/>
                        <div className="my-3 border border-info border-left-0 rounded-right d-flex align-items-center px-2"><i className="fas fa-feather-alt" onClick={this.onSend}></i></div>
                    </div> :
                    null
                }
                </div>
            )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    error: state.error,
    comments: state.comment.comments,
    newComment: state.comment.newComment
});
  
CommentBox.propTypes = {
    user: PropTypes.object,
    error: PropTypes.object.isRequired,
    comments: PropTypes.array,
    itId: PropTypes.string.isRequired,
    writeNewCo: PropTypes.func.isRequired,
    newComment: PropTypes.object
}
  
export default connect(mapStateToProps, { writeNewCo, fetchComments })(CommentBox);
