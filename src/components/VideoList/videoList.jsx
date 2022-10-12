import "./VideoList.scss";
import React from "react";
import VideoItem from "../VideoListItem/VideoListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/UtilsApi";

export default function VideoList(props) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}videos/`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  const filteredVideos = videoList.filter(
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
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
