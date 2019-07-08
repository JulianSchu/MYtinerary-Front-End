import React, { Component } from 'react';
import { connect } from  'react-redux';
import { writeNewCo, fetchComments, deleteCo } from '../actions/commentActions';
import PropTypes from 'prop-types';
import EachComment from './EachComment';
import '../styles/profilModal.css';
const uuidv1 = require('uuid/v1')

export class CommentBox extends Component {
    state = {
        comment: '',
        filteredComments: [],
        newComments: [],
        text: 'Be the first one to comment!'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    filteredComments = () => {
        const filteredComments = this.props.comments.filter(comment => {
            if(comment.itId.match(this.props.itId)) return true
        })
        
        this.setState({
            filteredComments
        })
    }

    onEnter = (e) => {
        if (e.key === 'Enter') {
            this.onSend()
        }
    }

    onSend = () => {

        if(this.state.comment !== '') {

        const today = new Date().toISOString();
        const date = today.slice(0, 10);
        const time = new Date().toString().slice(16, 24);
        const messageTime = date + " " + time;

        const newComment = {
            _id: uuidv1(),
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
    }

    onDelete = (commentId) => {
        
        this.props.deleteCo(commentId);

        const updatedNewComments = this.state.newComments.filter(comment => {
            if(comment._id !== commentId) return true
        })
        this.setState({
            newComments: updatedNewComments
        })

        const filteredComments = this.state.filteredComments.filter(comment => {
            if(comment._id !== commentId) return true
        })
        this.setState({
            filteredComments
        })
    }

    componentDidMount() {
        this.filteredComments()
    }

    render() {
            return (
                <div style={{backgroundColor: 'rgba(174, 220, 218, 0.2)'}} className="rounded shadow my-3 pb-3">
                    <p className="title text-left m-0 p-3">People Talking</p>
                    
                    { this.props.user && this.state.newComments.length !== 0 ?
                        this.state.newComments.map((comment, index) => (
                            <EachComment comment={comment} key={index} onDelete={this.onDelete} />
                        )) 
                        : null
                    }

                    { this.state.filteredComments.length !== 0 ?
                        this.state.filteredComments.map((comment, index) => (
                            <EachComment comment={comment} key={index} onDelete={this.onDelete} />
                        )) : 
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
    newComment: PropTypes.object,
    deleteCo: PropTypes.func.isRequired
}
  
export default connect(mapStateToProps, { writeNewCo, fetchComments, deleteCo })(CommentBox);
