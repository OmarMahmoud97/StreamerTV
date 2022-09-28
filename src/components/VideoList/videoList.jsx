import "./videoList.scss"
import React from 'react'
import sideDetails from "../../Data/video-details.json"
// import MainProfileVid from "../../Data/videos.json";
import VideoItem from "../VideoListItem/VideoListItem"



export default function VideoList(props) {

const filteredVideos = sideDetails.filter(
    (video) => video.id !== props.currentVideoId
  );
  console.log(filteredVideos)
return (
  <div className="List">
    <ul className="List__wrapper">
      {filteredVideos.map((video) => {          
          return (
            <VideoItem
              key={video.id}
              video={video.video}
              sideVideoClickHandler={props.VideoListItemClickHandler}
            />
        );
        })}
      </ul>
 </div> 
);
 }