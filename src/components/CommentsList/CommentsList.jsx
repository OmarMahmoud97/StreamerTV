import CommentsListItem from "../CommentListItem/CommentListItem";
import "./CommentsList.scss";

export default function CommentsList({ currentVideo }) {
  return (
    <ul className="comment">
      {currentVideo.comments.map((comment) => {
        return <CommentsListItem key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}
