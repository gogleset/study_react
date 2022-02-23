import React from "react";

import styled from "styled-components";
import { Route, NavLink, Routes } from "react-router-dom";

import DepartmentAdd from "./pages/DepartmentAdd";
import DepartmentList from "./pages/DepartmentList";
import StudentAdd from "./pages/StudentAdd";
import StudentList from "./pages/StudentList";

import ProfessorList from "./pages/ProfessorList";
import ProfessorAdd from "./pages/ProfessorAdd";

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
        <MenuLink to="/department_list">학과관리</MenuLink>
        <MenuLink to="/professor_list">교수관리</MenuLink>
        <MenuLink to="/student_list">학생관리</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route
          path="/"
          exact={true}
          element={<DepartmentList></DepartmentList>}
        />
        <Route
          path="/department_list"
          element={<DepartmentList></DepartmentList>}
        />
        <Route
          path="/department_add"
          element={<DepartmentAdd></DepartmentAdd>}
        />
        <Route path="/student_add" element={<StudentAdd></StudentAdd>}></Route>
        <Route
          path="/student_list"
          element={<StudentList></StudentList>}
        ></Route>
        <Route
          path="/professor_list"
          element={<ProfessorList></ProfessorList>}
        ></Route>
        <Route
          path="/professor_add"
          element={<ProfessorAdd></ProfessorAdd>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
