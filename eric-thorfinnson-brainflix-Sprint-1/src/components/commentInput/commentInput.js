import React from 'react';
import '../../App.scss';
import '../../styles/mixinsVars.scss';
import './commentInput.scss';
import ProfilePic from '../profilePic/profilePic.js'


class CommentInput extends React.Component {
    // the render() {} below is the same thing as doing
    // this.render = function() in constructor functions
    render() {
        // the render function must return a React element
        // note that we're defining a method here, not calling it
        return (
            <section className="comment-input">


                <div className="comment-input__count">
                <h2>3 Comments</h2>
                </div>
                <div className="comment-input__title">
                <h5>JOIN THE CONVERSATION</h5>
                </div>
                <div className="comment-input__all-form">
                    <div className="comment-input__profile-pic-box-container">
                    < ProfilePic />
                    <textarea className="comment-input__box" defaultValue="Enter A Comment"></textarea>
                    </div>
                    <div className="comment-input__button-container">
                    <button className="comment-input__button">COMMENT</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default CommentInput