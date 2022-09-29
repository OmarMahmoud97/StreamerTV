import React from "react"
import "./VideoInfo.scss"
import viewsImg from "../../assets/icons/views.svg"
import likesImg from "../../assets/icons/likes.svg"

export default function VideoInfo(props) {

const formatDate = (timestamp) => {
  const formatedDate = new Date(Date.now(timestamp)).toLocaleString("en-US",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
  return formatedDate;
};
  
  return (
    <section className="video__details">
      <div className="video__details-container">
      <div className="video__wrapper">

        <div className="video__details-items">
      <div className="video__name-wrapper">
        <p className="video__name">By {props.channel}</p>
          </div>
          <div className="video__date-wrapper">
        <p className="video__date">{formatDate(props.timestamp)}</p>
          </div>
          </div>  
<div className="video__details-items">
          <div className="video__views-wrapper">
            <img src={viewsImg} alt="views icon" className="videos__icon" />
            <p className="video__views">{props.views}</p>
      </div>
          <div className="video__likes-wrapper">
            <img src={likesImg} alt="likes icon" className="videos__icon" />
        <p className="video__likes">{props.likes} </p>
        </div>
</div>
        </div>
      <div className="video__description-wrapper">
        <p className="video__description">{props.description}</p>
        </div>
        </div>
    </section>
);
}
