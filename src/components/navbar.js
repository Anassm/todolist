import { Link, NavLink } from "react-router-dom";
import "../css/style.css";
import logo from "../images/todo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = () => {
    setIsActive((current) => !current);
  };

  const ToggleIcon = isActive ? HiX : HiMenu;

  return (
    <div className="navbar">
      <div className="navigations">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Home" width="" height="" />
            </Link>
          </li>
          {/* <li className="nav-end-two">
            <NavLink to="/list">List</NavLink>
          </li> */}
          <li className="nav-end-two">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <ToggleIcon onClick={isActiveHandler} className="side-draw" />
      </div>

      <div className="nav-contact">
        <Link to="/contact">Contact us!</Link>
      </div>
      <div className={isActive ? "responsive" : "hide"}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-contact-responsive">
              Contact us!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
