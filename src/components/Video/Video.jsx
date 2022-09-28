import React from "react";
import "./Videos.scss"

export default function VideoClip(props) {
  return (
    <section className="video">
    <div className="video__main">
        <img
          className="Video__video"
        src={props.MainProfileVid}
        alt={`${props.title}`}
      />
      </div>
      <div className="video__detail">
        <div className="video__title-wrapper">
          <h1 className="video__title">{ props.title }</h1>
        </div>
        <div className="video__channel-wrapper">
          <p className="video__channel">By { props.channel }</p>
        </div>
      </div>
    </section>
  );
}