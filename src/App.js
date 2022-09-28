import Navbar from "./components/Header/NavBar";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import VideoClip from "./components/Video/Video";
import VideoDetails from "./Data/video-details.json";
import CommentsList from "./components/CommentsList/CommentsList";
import MainProfileVid from "./Data/videos.json";
import { useState } from "react";

export function App() {
  const [currentVideo, setCurrentVideo] = useState(MainProfileVid[0]);

  // let { name, comment, likes, timestamp } = VideoDetails;
  console.log(VideoDetails);
  return (
    <>
      <Navbar />
      <VideoClip
        mainProfileVid={currentVideo.image}
        title={currentVideo.title}
        channel={currentVideo.channel}
      />

      <CommentsForm />
      <CommentsList />
    </>
  );
}
