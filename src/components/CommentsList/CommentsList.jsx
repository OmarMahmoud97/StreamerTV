import "./CommentsList.scss";

import VideoDetails from "../../Data/video-details.json"

import React from 'react'

export default function CommentsList() {

const comments = VideoDetails[0].comments

  console.log(comments)
  return (
<ul>
      {comments.map(comment => {
        return <div>


<article className="comment" >
        <div className="comment__wrapper">
          <div className="comment__avatar">
            <div className="comment__avatar-img">
            </div>
          </div>
          <div className="comment__container">
            <div className="comment__data">
              <div className="comment__name"><p>{ comment.name }</p>
            </div>
              <div className="comment__date"><p>{ comment.timestamp }</p>
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