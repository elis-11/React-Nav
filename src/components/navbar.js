import { Link } from "react-router-dom";
import "../scss/navbar.scss";

function Navbar() {
  return (
    <navbar>
      <ul className="navbar">
        <li>
          <Link className="navbar-link" to="/">
            <h1>MP-Design</h1>
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
