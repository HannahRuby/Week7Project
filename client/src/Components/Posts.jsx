import React from "react";
import { useState, useEffect } from "react";
import "./Posts.css";

export default function Post() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
    const response = await fetch("https://week7project-wdtk.onrender.com");
    const data = await response.json();
    setUsers(data);
    console.log("data");
  }

  return (
    <div>
      <h1>User Post</h1>
      <h2>Posts:</h2>
      {users.map((user, index) => (
        <div key={user.id} className="individual-detail-box">
          <p>Name: {user.full_name}</p>
          <p>Industry: {user.industry}</p>
          <p>Post: {user.post}</p>
        </div>
      ))}
    </div>
  );
}
