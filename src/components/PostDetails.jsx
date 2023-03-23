import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import { getUserDetails } from '../services/api';

function PostDetails({ post, setSelectedPost }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const data = await getUserDetails(post.userId);
      setUser(data);
    }
    fetchUser();
  }, [post.userId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {user && <p>by {user.name}</p>}
      <button onClick={() => setSelectedPost(null)}>Voltar para a lista</button>
      <h3>Comentários</h3>
      <CommentList comments={post.comments} />
    </div>
  );
}

export default PostDetails;
