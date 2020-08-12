import React from "react";
import "./contentView.css";
import { Link } from "react-router-dom";

function ContentView({ backgroundColor, backgroundImage }) {
  return (
    <div className="content">
      <Link
        to={{
          pathname: "/content-detail"
        }}
      >
        <div className="content__data">
          <p>제 배경색은 {backgroundColor} 입니다.</p>
          <p>제 배경 이미지는 {backgroundImage} 입니다.</p>
        </div>
      </Link>
    </div>
  );
}

export default ContentView;
