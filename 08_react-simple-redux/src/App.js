import React from "react";
import styled from "styled-components";
import { Route, NavLink, Routes } from "react-router-dom";

import NoReduxCounter from "./pages/NoReduxCounter";
import UseReduxCounter from "./pages/UseReduxCounter";
import UseReduxHookCounter from "./pages/UseReduxHookCounter";

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
      <h1>React Redux Counter</h1>

      <MenuLink to="/no_redux_counter">NoReduxCounter</MenuLink>
      <MenuLink to="/use_redux_counter">UseReduxCounter</MenuLink>
      <MenuLink to="/use_redux_hook_counter">UseReduxHookCounter</MenuLink>

      <Routes>
        <Route path="/no_redux_counter" element={<NoReduxCounter></NoReduxCounter>} />
        <Route path="/use_redux_counter" element={<UseReduxCounter></UseReduxCounter>} />
        <Route path="/use_redux_hook_counter" element={<UseReduxHookCounter></UseReduxHookCounter>} />
      </Routes>
    </div>
  );
};

export default App;
