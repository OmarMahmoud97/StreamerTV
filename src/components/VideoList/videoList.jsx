import "./videoList.scss";
import React from "react";
import sideDetails from "../..//assets/Data/video-details.json";
import VideoItem from "../VideoListItem/VideoListItem";

export default function VideoList(props) {
  const filteredVideos = sideDetails.filter(
    (video) => video.id !== props.currentVideoId
  );
  return (
    <div className="list">
      <div className="list__container">
        <div className="list__header-wrapper">
          <p className="list__header">NEXT VIDEOS</p>
        </div>
        <ul className="list__wrapper">
          {filteredVideos.map((video) => {
            return (
              <VideoItem
                key={video.id}
                id={video.id}
                image={video.image}
                channel={video.channel}
                title={video.title}
                // sideVideoClickHandler={props.sideVideoClickHandler}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
