import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import "./Userpage.css";

const UserPage = () => {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const { user } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUser] = useState(null);

  useEffect(() => {
    async function fetchData(users) {
      try {
        const userResponse = await fetch(
          `https://week7project-wdtk.onrender.com/users${user.id}`
        );
        const userData = await userResponse.json();
        setUser(userData);

        const postsResponse = await fetch(
          `https://week7project-wdtk.onrender.com/users/${user.id}/posts`
        );
        const userPosts = await postsResponse.json();
        setPosts(userPosts);

        // Fetch user's comments
        const commentsResponse = await fetch(
          `http://localhost:8080/users/${user.id}/comments`
        );
        const userComments = await commentsResponse.json();
        setComments(userComments);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData(users);
  }, []);

  return (
    <>
      <nav>
        <ul>
          <Link to={"/users"}>
            User's profile
            <img
              src="./src/Components/assets /Jessica Smith.jpg"
              alt="Jessica Smith"
            />
            Jessica Smith
          </Link>
          <Link to="/userprofile">
            <img src="./src/Components/assets /Jane Doe.jpg" alt="Jane Doe" />
            Jane Doe
          </Link>
          <Link to="/userprofile">
            <img src="./src/Components/assets /John Doe.jpg" alt="John Doe" />
            John Doe
          </Link>
          <Link to="/userprofile">
            <img
              src="./src/Components/assets /Mike Brown.jpg"
              alt="Mike Brown"
            />
            Mike Brown
          </Link>
          <Link to="/userprofile">
            <img
              src="./src/Components/assets /Sarah Smith.jpg"
              alt="Sarah Smith"
            />
            Sarah Smith
          </Link>
        </ul>
      </nav>
      {/* <div>
        <h1>User Page</h1>
        {users.map((user) => (
          <UserProfile key={user.id} user.id={user.id} />
        ))}
      </div> */}
    </>
  );
};

export default UserPage;
// // export default function UserPage() {
// //   const [form, setForm] = useState({
// //     full_name: "",
// //     comment: "",
// //   });
// //   let { user, setUser } = useContext(UserContext);

// //   const UserPage =() =>

// //   function handleSubmit(event) {
// //     event.preventDefault();
// //     console.log("The form values are", formValues);
// //   }

// //   function handleChange(event) {
// //     setForm({
// //       ...form,
// //       [event.target.full_name]: event.target.value,
// //     });
// //   }
// //   const [users, setUsers] = useState([]);
// //   // users = {
// //   //   posts: ["Post 1", "Post 2"],
// //   //   comments: ["comment 1", "comment 2"],
// //   // };

// //   useEffect(() => {
// //     getUsers();
// //   }, []);
// //   async function getUsers() {
// //     const response = await fetch("http://localhost:8080/users");
// //     const data = await response.json();
// //     setUsers(data);
// //     console.log(data);
// //   }
// //   return (
// //     <div>
// //       <h1>User Page</h1>
// //       <h2>Posts:</h2>
// //       {users.map((user, index) => (
// //         <div key={index}>
// //           <p>Name: {user.full_name}</p>
// //           <p>Position: {user.job_title}</p>
// //           <p>Industry: {user.industry}</p>
// //           <p>Post: {user.post}</p>
// //         </div>
// //       ))}

// //       <form onSubmit={handleSubmit}>
// //         <h3>Add a comment</h3>
// //         <label htmlFor="name">Name</label>
// //         <input
// //           name="name"
// //           placeholder="Full Name"
// //           onChange={handleChange}
// //         ></input>

// //         <label>Comments</label>
// //         <textarea
// //           name="comment"
// //           placeholder="Your Comment"
// //           id="comment"
// //         ></textarea>
// //         <button type="submit">Submit</button>
// //       </form>

// //       {/* <h2>Comments:</h2>
// //       {posts.map((post) => (
// //         <div key={post.id}>{post}</div>
// //       ))} */}
// //     </div>
// //   );
// // }
