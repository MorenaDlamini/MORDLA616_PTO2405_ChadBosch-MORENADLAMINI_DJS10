import React from 'react';
import Post from './Post';

// This component receives the posts array as a prop and renders each post
function PostList({ posts }) {
  return (
    <div className="post-list">
      {/* Map through the posts array and render a Post component for each one */}
      {posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;