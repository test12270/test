import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import PostList from "../pages/PostList";
import "./Nav.css";

function Nav() {
  return (
    <div className="wrapper">
      <Link to="/">
        <div className="logoContainer">
          <img
            src="img/bitcoin.png"
            width="35"
            height="35"
            alt="asd"
            // ๐ ๋ฉ์ธ ํ์ด์ง์ ํ๋งค์ค์ธ ์ด๋ฏธ์ง ๋์ฐ๊ธฐ
          />

          <div className="logoText">SangbusangJo</div>
        </div>
      </Link>

      <div className="headerItems">
        <Link to="/login" component={Login}>
          <div className="headerItem">Login</div>
        </Link>
        <Link to="postlist">
          <div>
            <a className="headerItem">Board</a>
          </div>
        </Link>

        <div className="none"></div>
      </div>
    </div>
  );
}

export default Nav;
