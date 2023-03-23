import React from 'react';

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
