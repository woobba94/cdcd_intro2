import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import userImage from "../../image/userImage.png";
import styled from "styled-components";
import "./navi.css";
const navi = () => {
  return (
    <div className="navigation">
      <div className="naviContents">
        <Link to="/">
          <Logo src={logo} alt="" />
        </Link>
        <Link to="/">
          <StyledMenu>코딩코딩이란?</StyledMenu>
        </Link>
        <Link to="/perpose">
          <StyledMenu>목표</StyledMenu>
        </Link>
        <SearchBox />
        <SearchButton>검색</SearchButton>
        <UserImage src={userImage} alt="" />
      </div>
    </div>
  );
};
const Logo = styled.img`
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  margin-left: 20%;
  margin-right: 20%;
`;
const UserImage = styled.img`
  width: 1.5em;
  vertical-align: middle;
  margin-right: 10%;
`;
const StyledMenu = styled.span`
  margin-left: 20px;
  margin-right: 20px;
`;
const SearchButton = styled.button`
  margin-right: auto;
`;

const SearchBox = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: red;
  background: papayawhip;
  border: 2px;
  border-radius: 1px;
  margin-left: 10%;
`;
export default navi;
