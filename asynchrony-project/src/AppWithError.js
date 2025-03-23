// AppWithError.js - Modified version of App.js to simulate errors
import React, { useState, useEffect } from 'react';

// Components
import PostList from './components/PostList';
import ErrorDisplay from './components/ErrorDisplay';
import LoadingIndicator from './components/LoadingIndicator';

function AppWithError() {
  // State management using hooks
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to perform the data fetching when the component mounts
  useEffect(() => {
    // Asynchronous function to fetch posts
    const fetchPosts = async () => {
      try {
        // Begin loading state
        setIsLoading(true);
        
        // Fetch data from an incorrect URL to simulate an error
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
        
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          // If not successful, throw an error with the status
          throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        
        // Update state with the fetched posts
        setPosts(data);
        
        // Clear any existing errors since the fetch was successful
        setError(null);
      } catch (err) {
        // Update error state with the caught error message
        setError(err.message || 'An unexpected error occurred');
        
        // Clear posts in case there was previous data
        setPosts([]);
      } finally {
        // End loading state regardless of success or failure
        setIsLoading(false);
      }
    };

    // Call the fetch function
    fetchPosts();
    
    // The empty dependency array ensures this effect runs only once when the component mounts
  }, []);

  return (
    <div className="app">
      <h1>Blog Posts (Error Simulation)</h1>
      
      {/* Conditional rendering based on application state */}
      {isLoading && <LoadingIndicator />}
      
      {!isLoading && error && <ErrorDisplay message={error} />}
      
      {!isLoading && !error && posts.length > 0 && <PostList posts={posts} />}
      
      {!isLoading && !error && posts.length === 0 && (
        <p>No posts found. The API returned an empty list.</p>
      )}
    </div>
  );
}

export default AppWithError;