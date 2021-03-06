import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const MenuLink = styled(NavLink)`
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      color: #fff;
    }
  }
`;

const Top = () => {
  return (
    <div>
      <h1>코로나 현황</h1>
      <hr />

      <nav>
        <MenuLink to={`/korea_state`}>국내 발생 현황</MenuLink>
        <MenuLink to={`/sido_state`}>시도별 발생 현황</MenuLink>
      </nav>
    </div>
  );
};

export default Top;
