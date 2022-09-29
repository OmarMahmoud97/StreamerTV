import "./videoList.scss"
import React from 'react'
import sideDetails from "../../Data/video-details.json"
// import MainProfileVid from "../../Data/videos.json";
import VideoItem from "../VideoListItem/VideoListItem"



export default function VideoList(props) {

const filteredVideos = sideDetails.filter(
    (video) => video.id !== props.currentVideoId
  );
return (
  <div className="List">
    <ul className="List__wrapper">
      {filteredVideos.map((props) => {          
          return (
            <VideoItem
              key={props.id}
              image={props.image}
              sideVideoClickHandler={props.VideoListItemClickHandler}
              channel={props.channel}
              title={props.title}
            />
        );
        })}
      </ul>
 </div> 
);
 }