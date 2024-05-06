import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import { UserProvider } from "./Components/Context/UserContext.jsx";
import Userpage from "./Components/Userpage.jsx";
import NewPost from "./Components/NewPost.jsx";
import Posts from "./Components/Posts.jsx";
import "./Components/Posts.css";
import UserProfile from "./Components/UserProfile.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route>
            <Route path="/users" element={<Userpage />} />
            <Route path="/users" element={<UserProfile />} />
          </Route>
        </Routes>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  );
}
