import React from 'react';
import '../../App.scss';
import '../../styles/mixinsVars.scss';
import './videoPlaylist.scss';

class VideoPlaylist extends React.Component {

    render(props) {
        return (
            <section className="video-playlist">
                <div className="video-playlist__preview-container">
                    <img src={this.props.thumbnail} className="video-playlist__preview-content"></img>
                </div>
                <div className="video-playlist__title-authour-container">
                    <h2 className="video-playlist__title-content">{this.props.name}</h2>
                    <h3 className="video-playlist__authour-content">{this.props.authour}</h3>
                </div>
            </section>
        )
        
    }

}

export default VideoPlaylist