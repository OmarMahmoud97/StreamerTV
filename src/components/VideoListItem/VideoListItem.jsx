import React from "react";
import "./VideoListItem.scss";


export default function VideoItem(props) {
  return (

    <li className="list__item"
        onClick={() => {
         props.VideoListItemClickHandler(props.video.id);

      }}>
      <div className="list__image-wrapper">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="list__text">
        <p className="list__title">{props.title}</p>
        <p className="list__name">{props.channel}</p>
      </div>
  </li>
); }