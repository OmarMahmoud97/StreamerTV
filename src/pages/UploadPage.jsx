import { API_URL } from "../utils/UtilsApi";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import uploadIcon from "../assets/icons/publish.svg";
import bikeImg from "../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import axios from "axios";
const { v4: uuid } = require("uuid");

export default function VideoInfo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newVideo = {
      id: uuid(),
      title: title,
      channel: "Omar Mahmoud",
      views: "19 Million",
      likes: "7",
      duration: "8:00",
      description: description,
      image: "Upload-video-preview.jpg",
      timestamp: Date.now(),
      video: "https://project-2-api.herokuapp.com/stream",
      comments: [],
    };

    axios.post(`${API_URL}videos/`, newVideo);
    alertMessage();
  }

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function alertMessage() {
    alert("Upload successful, please click to be sent to your video!");
  }
  return (
    <>
      <section className="upload">
        <h1 className="upload__header"> Upload Video</h1>
        <div className="upload__content">
          <div className="upload__img-wrapper">
            <div className="upload__thumbnail">
              <h2 className="upload__subheader">VIDEO THUMBNAIL</h2>
              <div className="upload__image-container">
                <img
                  src={bikeImg}
                  className="upload__image"
                  alt="upload-thumbnail"
                />
              </div>
            </div>
          </div>

          <div className="upload__form-wrapper">
            <div className="upload__details">
              <h2 className="upload__subheader">TITLE YOUR VIDEO</h2>
              <div className="upload__form-container">
                <input
                  type="text"
                  className="upload__form-input"
                  placeholder="Add a title to your video"
                  onChange={handleChangeTitle}
                  value={title}
                />
              </div>
              <h2 className="upload__subheader">ADD A VIDEO DESCRIPTION</h2>
              <div className="upload__form-container">
                <input
                  type="text"
                  className="upload__description"
                  placeholder="Add a description to your video"
                  onChange={handleChangeDescription}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="upload__footer">
          <Link
            className="upload__button-label upload__button-label--mobile"
            to="/"
          >
            <h4 className="upload__cancel-left">CANCEL</h4>
          </Link>
          <Link
            className="upload__button-label upload__button-label--publish"
            to="/"
          >
            <button className="upload__button" onClick={handleSubmit}>
              <img
                className="upload__button-icon"
                src={uploadIcon}
                alt="upload icon"
              />
              <h4 className="upload__publish">PUBLISH</h4>
            </button>
          </Link>
          <Link className="upload__button-label " to="/">
            <h4 className="upload__cancel-right ">CANCEL</h4>
          </Link>
        </div>
      </section>
    </>
  );
}
