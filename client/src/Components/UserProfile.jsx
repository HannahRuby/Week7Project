import { useParams } from "react-router-dom";
import Userpage from "./Userpage";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    async function fetchData(userId) {
      try {
        const userResponse = await fetch(`http://localhost:8080/users`);
        const userData = await userResponse.json();
        setUser(userData);

        const postsResponse = await fetch(`http://localhost:8080/users/posts`);
        const userPosts = await postsResponse.json();
        setPosts(userPosts);

        // Fetch user's comments
        const commentsResponse = await fetch(
          `http://localhost:8080/users/${userId}/comments`
        );
        const userComments = await commentsResponse.json();
        setComments(userComments);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, [userId]);

  return (
    <div>
      {/* Display user profile */}
      {user && (
        <div className="Individual-detail-box">
          <h1>{user.full_name}'s Profile</h1>
          <p>Job Title: {user.job_title}</p>
          <p>Industry: {user.industry}</p>
          <p>Bio: {user.bio}</p>
        </div>
      )}
      {posts && (
        <div>
          <h2> Posts</h2>
          {posts.map((post, index) => (
            <div key={index}>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Display user's comments */}
      {comments && (
        <div>
          <h2>{user.full_name}'s Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
