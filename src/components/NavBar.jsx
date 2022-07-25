import React from "react";
import { signUpHandler } from "./Utils";
import {Link} from 'react-router-dom'

const loginBtnElHandler = () => {
  signUpHandler();
};

function NavBar(props) {
  return (
    <ul className="navbar">
      <li>Logo</li>
      <li className="navbar-list">
        <div>Home</div>
        <div>Stores</div>
        <div>Sponsorship</div>
      </li>
      <li>
        <Link to="/signup" className="link">
          <button className="btn login" onClick={loginBtnElHandler}>
            LOGIN
          </button>
        </Link>
        <div className="more-btn">...</div>
      </li>
    </ul>
  );
}

export default NavBar;
