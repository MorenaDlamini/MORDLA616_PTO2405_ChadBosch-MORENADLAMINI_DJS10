import React from 'react';

// This component renders an individual blog post with title and body
function Post({ title, body }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <hr />
    </div>
  );
}

export default Post;