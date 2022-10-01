import "./CommentsForm.scss";
import commentsImg from "../../assets/icons/add_comment.svg";
import AvatarImg from "../../assets/images/Mohan-muruge.jpg";

import { useState } from "react";

export default function CommentsForm() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {comments.map((text) => (
        <div>{text}</div>
      ))}
      <div className="form__container">
        <div className="form__num-wrapper">
          <p className="form__num"> 3 Comments</p>
        </div>
        <div className="form__wrapper">
          <div className="form__avatar-wrapper">
            <img
              className="form__avatar"
              src={AvatarImg}
              alt="image of mohan"
            />
          </div>
          <div className="form__input-wrapper">
            <div className="form__input-box">
              <div className="form__input-container">
                <label className="form__label" htmlFor="comment">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="form__input"
                  type="text"
                  name="Comment"
                  id="comment"
                  placeholder="Add a new comment"
                  required
                  value={comment}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="form__btn-wrapper">
              <div className="form__btn">
                <button
                  onClick={onClickHandler}
                  type="submit"
                  href="google.com"
                  className="form__btn-anchor"
                >
                  <img
                    className="form__btn-img"
                    src={commentsImg}
                    alt="comments img"
                  />
                  <p className="form__btn-text">COMMENT</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
