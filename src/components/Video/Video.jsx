import React from "react";
import "./Video.scss"

export default function VideoClip(props) {
  return (
    <section className="video">
    <div className="video__main">
        <img
          className="video__video"
        src={props.mainProfileVid}
        alt={`${props.title}`}
      />
      </div>
      <div className="video__detail">
        <div className="video__title-wrapper">
          <h1 className="video__title">{ props.title }</h1>
        </div>
      </div>
    </section>
  );
}