import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function VideoListItem(props) {
  const { width } = useWindowDimensions();

  let videoTitle = "";

  const truncate = (string) => {
    if (string.length > 25) {
      return string.substring(0, 25) + "...";
    }
    return string;
  };

  if (width < 768) {
    videoTitle = truncate(props.title);
  } else {
    videoTitle = props.title;
  }

  return (
    <Link to={`/videos/${props.id}`}>
      <li
        className="list__item"
        // onClick={() => {
        //   props.sideVideoClickHandler(props.id);
        // }}
      >
        <div className="list__image-wrapper">
          <img className="list__image" src={props.image} alt={props.title} />
        </div>
        <div className="list__text">
          <p className="list__title">{videoTitle}</p>
          <p className="list__name">{props.channel}</p>
        </div>
      </li>
    </Link>
  );
}
