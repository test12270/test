import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="wrapper">
      <div className="container">
        
        <div className="contentWrapper">
          <div className="copyContainer">
            <div className="title">
              The Power　　　　　　　　　　　　　　　　　　　　<br/>
              comes from<br/>
              Communications.
            </div>
            <div className="description">
            The Network is Live<br/>
            Number of received tokens
            </div>
            {/* 👆 Opensea 홈페이지와 같은 문구 */}
            <div className="ctaContainer">
              
                <div className="Counter">4600++</div>
              
              

              {/* 👆 버튼 CSS */}
            </div>
          </div>
          <div>
            <img
              className="cardContainer"
              src="img/bitcoin.png"
              width="450"
              height="550"
              alt=""
              // 👆 메인 페이지에 판매중인 이미지 띄우기
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;