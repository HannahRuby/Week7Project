import React from "react";
import { Link, json } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NewPost.css";

export default function NewPost() {
  const [form, setForm] = useState({
    // full_name: "",
    // comment: "",
    // industry: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://week7project-wdtk.onrender.com", {
      method: "POST",
      body: JSON.stringify({ form }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    location.reload();
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add a comment</h2>
        <div className="form-group">
          <label className="name">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>
            Comment
            <textarea
              name="comment"
              placeholder="Your Comment"
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="form-group">
          <label>
            Industry
            <input
              name="industry"
              placeholder="Your Industry"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <button className="submit btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
