import { Link } from "react-router-dom";
import "./UploadPage.scss";
import uploadIcon from "../assets/icons/publish.svg";
import bikeImg from "../assets/images/Upload-video-preview.jpg";

export default function VideoInfo() {
  return (
    <>
      <section className="upload">
        <h1 className="upload__header"> Upload Video</h1>
        <div className="upload__content">
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
          <div className="upload__details">
            <h2 className="upload__subheader">TITLE YOUR VIDEO</h2>
            <div className="upload__form-container">
              <input
                type="text"
                className="upload__form-input"
                placeholder="Add a title to your video"
              />
            </div>
            <h2 className="upload__subheader">ADD A VIDEO DESCRIPTION</h2>
            <div className="upload__form-container">
              <input
                type="text"
                className="upload__description"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <div className="upload__footer">
          <Link
            className="upload__button-label upload__button-label--mobile"
            to="/"
          >
            <h4 className="upload__cancel upload__cancel--mobile">CANCEL</h4>
          </Link>
          <Link
            className="upload__button-label upload__button-label--publish"
            to="/"
          >
            <button className="upload__button" onClick={""}>
              <img
                className="upload__button-icon"
                src={uploadIcon}
                alt="upload icon"
              />
              <h4 className="upload__publish">PUBLISH</h4>
            </button>
          </Link>
          <Link className="upload__button-label " to="/">
            <h4 className="upload__cancel ">CANCEL</h4>
          </Link>
        </div>
      </section>
    </>
  );
}
