import React from "react";

import styled from "styled-elements";
import { Route, NavLink, Routes } from "react-router-dom";

import DepartmentAdd from "./pages/DepartmentAdd";
import DepartmentList from "./pages/DepartmentList";

/** 메뉴링크 --> 07-hook-event 예제의 App.js 파일의 내용과 동일 */
const MenuLink = styled(NavLink)`
  font-size: 20px;
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

  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const App = () => {
  return (
    <div>
      <h1>08-Simple-Ajax</h1>

      <nav>
        <MenuLink to="/department_list">학과목록</MenuLink>
        <MenuLink to="/department_add">학과추가</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route
          path={["/department_list", "/"]}
          exact={true}
          element={<DepartmentList></DepartmentList>}
        />
        <Route
          path="/department_add"
          element={<DepartmentAdd></DepartmentAdd>}
        />
      </Routes>
    </div>
  );
};

export default App;
