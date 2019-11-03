import React from 'react';
import '../../App.scss';
import '../../styles/mixinsVars.scss';
import './videoInfo.scss';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';





  class VideoInfo extends React.Component {
    render() {


        return (
            <section className="videoInfo">
                <div className="videoInfo__title-container">
                    <h1 className="videoInfo__title">BMX Rampage: 2018 Highlights</h1>
                </div>
                <div className="videoInfo__authour-date-likes-views-container">
                    <div className="videoInfo__authour-date-container">
                        <h3 className="videoInfo__authour">By Red Cow</h3>
                        <h5 className="videoInfo__date">12/18/2018</h5>
                    </div>
                    <div className="videoInfo__views-likes-container">
                        <img src={viewsIcon} className="videoInfo__views-icon"></img>
                        <h3 className="videoInfo__views-number">1,001,320</h3>
                        <img src={likesIcon} className="videoInfo__likes-icon"></img>
                        <h3 className="videoInfo__likes-number">110,985</h3>
                    </div>
                </div>
                <p className="videoInfo__description">
                On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>    
            </section>
        )
    }
}

export default VideoInfo;