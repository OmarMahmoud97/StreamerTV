import React from "react"
import "./VideoInfo.scss"

export default function VideoInfo(props) {
  return (
    <section className="video__details">
      <div className="video__views-wrapper">
        <p className="video__views">{props.views}</p>
      </div>
      <div className="video__date-wrapper">
        <p className="video__date">{props.timestamp}</p>
      </div>
      <div className="video__likes-wrapper">
        <p className="video__likes">{props.likes} </p>
      </div>
      <div className="video__description-wrapper">
        <p className="video__description">{props.description}</p>
      </div>
    </section>
);
}
