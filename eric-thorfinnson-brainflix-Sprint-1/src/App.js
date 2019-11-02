import React from 'react';
import './App.scss';
import './styles/mixinsVars.scss';
import Header from './components/header.js'
import VideoDisplay from './components/videoDisplay/videoDisplay.js'
import VideoInfo from './components/videoInfo/videoInfo.js';
import CommentInput from './components/commentInput/commentInput.js';
import CommentDisplay from './components/commentDisplay/commentDisplay.js';
import VideoPlaylist from './components/videoPlaylist/videoPlaylist.js'

import videoThumbnail0 from '../src/assets/Images/video-list-0.jpg'
import videoThumbnail1 from '../src/assets/Images/video-list-1.jpg'
import videoThumbnail2 from '../src/assets/Images/video-list-2.jpg'
import videoThumbnail3 from '../src/assets/Images/video-list-3.jpg'
import videoThumbnail4 from '../src/assets/Images/video-list-4.jpg'
import videoThumbnail5 from '../src/assets/Images/video-list-5.jpg'
import videoThumbnail6 from '../src/assets/Images/video-list-6.jpg'
import videoThumbnail7 from '../src/assets/Images/video-list-7.jpg'
import videoThumbnail8 from '../src/assets/Images/video-list-8.jpg'

const Button = (props) => {

  const logMsg = (event, msg) => {
    console.log(event, msg)
  }
  return (
    <button onClick=
    
    {e=>{logMsg(e,props.clickMsg)}} className="flotita">
      {props.text}
    </button>
  );
}


class App extends React.Component {  
  
  commentsArr = [
    {
    name:"Michael Spaghetti",
    date:'12/18/2018',
    comment:"The most Gnar I've ever seen bruh"
  },{
    name:"Molten Bread",
    date:'12/20/2018',
    comment:"An acceptable amount of gnar"
  },{
    name:"Thunder Fud",
    date:'11/20/2018',
    comment:"This is my Birthday"
  }
  ]

  videoThumbnailArr = [
    {
      thumbnail:videoThumbnail0,
      name:"Become a great Guy",
      authour:"Billy's Bills"
    },
    {
      thumbnail:videoThumbnail1,
      name:"Become a Jeff",
      authour:"Bob has only Friends"
    },
    {
      thumbnail: videoThumbnail2,
      name:"Embrace your inner Garbage",
      authour:"Felt Tipped Todd"
    },
    {
      thumbnail:videoThumbnail3,
      name:"1000 fun breads",
      authour:"Backflip Jim"
    },
    {
      thumbnail:videoThumbnail4,
      name:"Get a new family!",
      authour:"Trenth"
    },
    {
      thumbnail:videoThumbnail5,
      name:"My husband fly plane!",
      authour:"Parbara Willis"
    },
    {
      thumbnail:videoThumbnail6,
      name:"Fresh beans, the sequel",
      authour:"MillitillyTop123"
    },
    {
      thumbnail:videoThumbnail7,
      name:"Biscuits and Backflips",
      authour:"LittleBigHamcake453"
    },
    {
      thumbnail:videoThumbnail8,
      name:"Melty Butter Buddies",
      authour:"Spud Williams"
    },
  ]

  state={
    videoThumbnailArr:this.videoThumbnailArr,
    commentsArr:this.commentsArr
  }

  commentMaker(arr){
    let jsx = [];
    arr.forEach(function(commObj) {
      jsx.push(<CommentDisplay key={commObj.name+commObj.date} name={commObj.name} date={commObj.date} comment={commObj.comment}/>);
    });
    return jsx;
  }

  videoPlaylistMaker(arr){
    let jsx = [];
    arr.forEach(function(vidPlayObj) {
      if (vidPlayObj.thumbnail !== videoThumbnail0){
      jsx.push(<VideoPlaylist key={vidPlayObj.name+vidPlayObj.authour} name={vidPlayObj.name} authour={vidPlayObj.authour} thumbnail={vidPlayObj.thumbnail}/>)
      }
    ;
    });
    
    return jsx;
  }
  a
  render(){
  return (
      <div className="App">
        < Header />
        < VideoDisplay />
        <div className="App__all-below-video-container">
          <div className="App__info-content-container">
            < VideoInfo />
            <CommentInput />
            {this.commentMaker(this.state.commentsArr)}
          </div>
            <div className="App__playlist-container">
              <div className="video-playlist-header-container">
                <h2 className="video-playlist-header-content">Next Video</h2>
              </div>
              {this.videoPlaylistMaker(this.state.videoThumbnailArr)}  
            </div>
          </div>
        </div>
 
      );

  }
}

export default App;
