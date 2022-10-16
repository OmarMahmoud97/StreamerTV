import { API_URL } from "../../utils/UtilsApi";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import uploadIcon from "../../assets/icons/publish.svg";
import bikeImg from "../../assets/images/Upload-video-preview.jpg";
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
      image: "http://localhost:8080/images/Upload-video-preview.jpg",
      timestamp: Date.now(),
      video: "https://project-2-api.herokuapp.com/stream",
      comments: [
        {
          id: "c93c16f0-4795-45d1-b0da-21696d54f25a",
          name: "Mike tyson",
          comment: "I like unicorns",
          likes: 6,
          timestamp: 1665653242222,
        },
        {
          id: "99938bd4-67f9-4404-ad3e-b23a6ad05717",
          name: "Ariana Grande",
          comment: "Shutup Mike",
          likes: 1,
          timestamp: 1665653242422,
        },
        {
          id: "fc2e9a8c-7daa-4e14-980d-5467ca2054ec",
          name: "Tupac",
          comment:
            "From five-star hotels to the cheapest spots – wherever you like to stay, THIS is the way to do it! I’ll take sunlight and a cozy reading corner over a pool any day of the week.",
          likes: 4,
          timestamp: 1665653242222,
        },
      ],
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
          <div className="upload__footer-wrapper">
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
        </div>
      </section>
    </>
  );
}
