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
    console.log("hello");
    const updatedVideo = VideoDetails.find((video) => video.id === videoId);
    console.log(updatedVideo);
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
        views={currentVideo.views}
        timestamp={currentVideo.timestamp}
        likes={currentVideo.likes}
        description={currentVideo.description}
      />
      <CommentsForm />
      <CommentsList currentVideo={currentVideo} />
      <VideoList
        sideVideoClickHandler={sideVideoClickHandler}
        currentVideoId={currentVideo.id}
      />
    </>
  );
}
