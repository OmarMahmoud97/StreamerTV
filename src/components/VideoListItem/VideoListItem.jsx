import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./VideoListItem.scss";

export default function VideoListItem(props) {
  const { width } = useWindowDimensions();

  // A variable which we'll set later (trucated or not)
  let videoTitle = "";

  // Truncate the string provided if it's long
  const truncate = (string) => {
    if (string.length > 25) {
      return string.substring(0, 25) + "...";
    }

    // if it's <= 25, just return the string without truncation (delete me)
    return string;
  };

  // If we're on mobile, use the truncate fn
  if (width < 768) {
    videoTitle = truncate(props.title);
  } else {
    // otherwise, just use the un-truncated title
    videoTitle = props.title;
  }

  return (
    <li
      className="list__item"
      onClick={() => {
        props.sideVideoClickHandler(props.id);
      }}
    >
      <div className="list__image-wrapper">
        <img className="list__image" src={props.image} alt={props.title} />
      </div>
      <div className="list__text">
        <p className="list__title">{videoTitle}</p>
        <p className="list__name">{props.channel}</p>
      </div>
    </li>
  );
}
