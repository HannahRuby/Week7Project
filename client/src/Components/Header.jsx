import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Profoundly</h1>
      <nav>
        <img src="./public/assets /img1.webp"></img>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>|
        <Link to="/users">Users</Link>| <Link to="/Posts">Posts</Link>|
        <Link to="/newPost">Add a Post</Link>|
      </nav>
    </header>
  );
}
