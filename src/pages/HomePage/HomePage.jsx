import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CommentsForm from "../../components/CommentsForm/CommentsForm";
import VideoClip from "../../components/Video/Video";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideoList from "../../components/VideoList/VideoList";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import LoadingSpinner from "../../assets/icons/Spinner-1s-200px.gif";

import { API_URL } from "../../utils/UtilsApi";
import "./HomePage.scss";

export default function HomePage() {
  const { videoId } = useParams();

  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    axios.get(`${API_URL}videos/`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  const currentVideoId = videoId || videoList[0]?.id;

  useEffect(() => {
    if (currentVideoId) {
      axios.get(`${API_URL}videos/${currentVideoId}`).then((response) => {
        setSelectedVideo(response.data);
      });
    }
  }, [currentVideoId]);

  if (!selectedVideo) {
    return <img src={LoadingSpinner} alt="Page Loading..." />;
  }

  return (
    <>
      <VideoClip mainProfileVid={selectedVideo.image} />(
      <div className="main">
        <div className="main__text-container ">
          <VideoInfo
            title={selectedVideo.title}
            channel={selectedVideo.channel}
            views={selectedVideo.views}
            timestamp={selectedVideo.timestamp}
            likes={selectedVideo.likes}
            description={selectedVideo.description}
          />
          <CommentsForm comment={selectedVideo.comments} />

          <CommentsList
            key={selectedVideo.id}
            currentVideo={selectedVideo}
            name={selectedVideo.name}
            timestamp={selectedVideo.timestamp}
            comment={selectedVideo.comment}
          />
        </div>
        <div className="main__list-container">
          <VideoList currentVideoId={selectedVideo.id} />
        </div>
      </div>
      )
    </>
  );
}
