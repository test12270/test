import React from "react";
import { Link } from "react-router-dom";
import Login from './Login';
import Post from "./Post";

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
            alt=""
            // 👆 메인 페이지에 판매중인 이미지 띄우기
          />
          
          <div className="logoText">SangbusangJo</div>
          
        </div>
      </Link>
      
      <div className="headerItems">
        <Link to="/login" component={Login}>
          <div className="headerItem">Login</div>
        </Link>
<Link to="/post" element={<Post />}>
        <div>
          <a className="headerItem">
            Post
          </a>
        </div>
        </Link>
       

        

        <div className="none">
          
          
        </div>

       
      </div>
    </div>
  );
}

export default Nav;