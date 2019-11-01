import React from 'react';
import '../../App.scss';
import '../../styles/mixinsVars.scss';
import './profilePic.scss';
import profilePicFile from '../../assets/Images/Mohan-muruge.jpg';

class ProfilePic extends React.Component {
    // the render() {} below is the same thing as doing
    // this.render = function() in constructor functions
    render() {
        // the render function must return a React element
        // note that we're defining a method here, not calling it
        return (
            <div className="profile-pic">
                <img className="profile-pic__display" src={profilePicFile}></img>
            </div>
             )
             
    }
}

export default ProfilePic