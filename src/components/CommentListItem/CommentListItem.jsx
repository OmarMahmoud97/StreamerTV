import { formatDate } from "../../helpers/date";
import moment from "moment";

export default function CommentsListItem({ comment }) {
  const formattedDate = moment(comment.timestamp).startOf("minutes").fromNow();

  return (
    <article className="comment__article ">
      <div className="comment__wrapper comment__wrapper--first">
        <div className="comment__avatar">
          <div className="comment__avatar-img"></div>
        </div>
        <div className="comment__container">
          <div className="comment__data">
            <div className="comment__name">
              <p>{comment.name}</p>
            </div>
            <div className="comment__date">
              <p>{formattedDate}</p>
            </div>
          </div>
          <div className="comment__comment">
            <p>{comment.comment}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
