import React from 'react';
import { getUserDetails } from '../services/api';

function PostList({ posts, setSelectedPost }) {
  async function handleClick(post) {
    const data = await getUserDetails(post.userId);
    const postWithCommentsAndUser = { ...post, comments: [], user: data };
    setSelectedPost(postWithCommentsAndUser);
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleClick(post)}>Ver comentários</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
