import { useState } from "react";

import VideoDetails from "./assets/Data/video-details.json";

import Navbar from "./components/Header/NavBar";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import VideoClip from "./components/Video/Video";
import CommentsList from "./components/CommentsList/CommentsList";
import VideoList from "./components/VideoList/videoList";
import VideoInfo from "./components/VideoInfo/VideoInfo";

import "./styles/ScssStyles/App.scss";

export function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoDetails[0]);

  const sideVideoClickHandler = (videoId) => {
    const updatedVideo = VideoDetails.find((video) => video.id === videoId);

    setCurrentVideo(updatedVideo);
  };

  return (
    <>
      <Navbar />
      <VideoClip mainProfileVid={currentVideo.image} />

      <div className="main">
        <div className="main__text-container ">
          <VideoInfo
            title={currentVideo.title}
            channel={currentVideo.channel}
            views={currentVideo.views}
            timestamp={currentVideo.timestamp}
            likes={currentVideo.likes}
            description={currentVideo.description}
          />
          <CommentsForm comment={currentVideo.comments} />

          <CommentsList
            key={currentVideo.id}
            currentVideo={currentVideo}
            name={currentVideo.name}
            timestamp={currentVideo.timestamp}
            comment={currentVideo.comment}
          />
        </div>
        <div className="main__list-container">
          <VideoList
            sideVideoClickHandler={sideVideoClickHandler}
            currentVideoId={currentVideo.id}
          />
        </div>
      </div>
    </>
  );
}
