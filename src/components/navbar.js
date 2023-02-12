import { Link, NavLink } from "react-router-dom";
import "../css/style.css";
import logo from "../images/todo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navigations">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Home" />
            </Link>
          </li>
          {/* <li className="nav-end-two">
            <NavLink to="/list">List</NavLink>
          </li> */}
          <li className="nav-end-two">
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-contact">
        <Link to="/contact">Contact us!</Link>
      </div>
    </div>
  );
}
