import { Link, NavLink } from "react-router-dom";
import "../css/style.css";
import logo from "../images/todo.png";
import logoSmall from "../images/todo.png";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navbar">
      <Link className="logo-icon" to="/">
        <img src={logoSmall} alt="Home" />
      </Link>
      <div className={isActive ? "responsive" : "navigations"}>
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
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-contact">
        <Link to="/contact">Contact us!</Link>
      </div>
      <HiMenu
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="side-draw"
      />
    </div>
  );
}
