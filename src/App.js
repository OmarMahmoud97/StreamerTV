import Navbar from "./components/Header/NavBar";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import VideoClip from "./components/Video/Video";
import VideoDetails from "./Data/video-details.json";
import CommentsList from "./components/CommentsList/CommentsList";
import MainProfileVid from "./Data/videos.json";
import { useState } from "react";
import VideoList from "./components/VideoList/videoList";
import VideoInfo from "./components/VideoInfo/VideoInfo";

export function App() {
  const [currentVideo, setCurrentVideo] = useState(MainProfileVid[0]);

  const sideVideoClickHandler = (videoId) => {
    const updatedVideo = VideoDetails.find((video) => video.id === videoId);

    setCurrentVideo(updatedVideo);
  };
  return (
    <>
      <Navbar />
      <VideoClip
        mainProfileVid={currentVideo.image}
        title={currentVideo.title}
        channel={currentVideo.channel}
      />
      <VideoInfo
        channel={currentVideo.channel}
        views={currentVideo.views}
        timestamp={currentVideo.timestamp}
        likes={currentVideo.likes}
        description={currentVideo.description}
      />
      <CommentsForm />
      <CommentsList
        currentVideo={currentVideo}
        name={currentVideo.name}
        timestamp={currentVideo.timestamp}
        comment={currentVideo.comment}
      />
      <VideoList
        sideVideoClickHandler={sideVideoClickHandler}
        currentVideoId={currentVideo.id}
      />
    </>
  );
}
