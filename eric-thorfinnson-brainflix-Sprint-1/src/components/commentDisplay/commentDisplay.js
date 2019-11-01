import React from 'react';
import '../../App.scss';
import '../../styles/mixinsVars.scss';
import './commentDisplay.scss'
import ProfilePic from '../profilePic/profilePic.js'


class CommentDisplay extends React.Component {
    // the render() {} below is the same thing as doing
    // this.render = function() in constructor functions
    render(props) {
        // the render function must return a React element
        // note that we're defining a method here, not calling it
        return (
            <section className="comment-display">
            < ProfilePic />
            <div className="comment-display__name-date-content-container">
                <div className="comment-display__name-date-container">
                <h3 className="comment-display__name">{this.props.name}</h3>
                <h3 className="comment-display__date">{this.props.date}</h3>
                </div>
                <div className="comment-display__content-container">
                    <p className="comment-display__content">{this.props.comment}</p>
                </div>
            </div>
            

        </section>
        )
    }
}

export default CommentDisplay