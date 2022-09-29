import "./CommentsList.scss"
import VideoDetails from "../../Data/video-details.json"

import React from 'react'

export default function CommentsList() {

const formatDate = (timestamp) => {
  const formatedDate = new Date(timestamp).toDateString("en-",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
  return formatedDate;
};

const comments = VideoDetails[0].comments

  console.log(comments)
  return (
<ul className="comment" >
      {comments.map(comment => {
        return <div className="comment__item">


<article className="comment-article" >
        <div className="comment__wrapper">
          <div className="comment__avatar">
            <div className="comment__avatar-img">
            </div>
          </div>
          <div className="comment__container">
            <div className="comment__data">
              <div className="comment__name"><p>{ comment.name }</p>
            </div>
              <div className="comment__date"><p>{formatDate(comment.timestamp)  }</p>
            </div>
            </div>
            <div className="comment__comment"><p>{ comment.comment }</p>
            </div>
          </div>
        </div>
      </article>   

        </div>
      })}
</ul>
   
  )
}
