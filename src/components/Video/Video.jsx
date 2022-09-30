import React from "react";
import "./Video.scss"

export default function VideoClip(props) {
  return (
    <section className="video">
    <div className="video__main">
        <video
          className="video__video"
        controls poster={props.mainProfileVid}
        alt={`${props.title}`}
      />
      </div>
    </section>
  );
}