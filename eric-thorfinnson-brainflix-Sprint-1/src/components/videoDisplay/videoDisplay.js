import React from 'react';
import '../../App.scss';
import '../../styles/mixinsVars.scss';
import './videoDisplay.scss';
import videoFile from '../../assets/Video/BrainStation Sample Video.mp4';
import playButton from '../../assets/Icons/SVG/Icon-play.svg';
import pauseButton from '../../assets/Icons/SVG/Icon-pause.svg';
import fullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import playbackSlider from '../../assets/Icons/SVG/Icon-scrubber-control.svg';
import videoThumbnail0 from '../../assets/Images/video-list-0.jpg'




  class VideoDisplay extends React.Component {
    render() {
        return (
            <div className="videoDisplay">
                <video src={videoFile} alt="cool bmx dudes" className="videoDisplay__video" poster={videoThumbnail0}>
                </video>

                <div className="videoDisplay__controls-all-container">
                    <div className="videoDisplay__controls-container">
                    <div className="videoDisplay__play-pause-button-container">
                        <button className="videoDisplay__play-pause-button">
                        <img src={playButton} className="videoDisplay__play-pause-icon"></img>    
                        </button>
                    </div>
                        <img src={playbackSlider} className="videoDisplay__playback-slider"></img>
                        <div className="videoDisplay__full-screen-volume-container">
                            <button className="videoDisplay__full-screen-button">
                                <img src={fullScreen} className="videoDisplay__full-screen-icon"></img>    
                            </button>
                            <button className="videoDisplay__volume-slider">
                                <img src={volume} className="videoDisplay__volume-icon"></img>    
                            </button>
                        </div>
                    </div>
                </div>

               

            </div>
        )
    }
}

export default VideoDisplay;
