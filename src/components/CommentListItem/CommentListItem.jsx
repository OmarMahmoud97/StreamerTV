import { formatDate } from "../../helpers/date";

export default function CommentsListItem({ comment }) {
  return (
    <article className="comment__article">
      <div className="comment__wrapper">
        <div className="comment__avatar">
          <div className="comment__avatar-img"></div>
        </div>
        <div className="comment__container">
          <div className="comment__data">
            <div className="comment__name">
              <p>{comment.name}</p>
            </div>
            <div className="comment__date">
              <p>{formatDate(comment.timestamp)}</p>
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
