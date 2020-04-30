import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return(
      <header>
        <h1>へっだー</h1>
        <nav>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default Header;
