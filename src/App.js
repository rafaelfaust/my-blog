import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import { getPosts } from './services/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="App">
      {selectedPost ? (
        <PostDetails post={selectedPost} setSelectedPost={setSelectedPost} />
      ) : (
        <PostList posts={posts} setSelectedPost={setSelectedPost} />
      )}
    </div>
  );
}

export default App;
