import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-logo">
          <Link to="/">#Vanlife</Link>
        </li>
        <div className="navbar-links">
          <li className="navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link">
            <Link to="/about">About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
