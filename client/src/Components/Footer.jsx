import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "green", padding: "20px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ marginRight: "10px" }}>Created by Hannah Manieson</p>
        <a href="https://github.com/HannahRuby" style={{ marginRight: "10px" }}>
          GITHUB
        </a>
        |
        <a href="https://www.linkedin.com/in/hannah-manieson-01097615b">
          LINKEDIN
        </a>
      </nav>
    </footer>
  );
}
