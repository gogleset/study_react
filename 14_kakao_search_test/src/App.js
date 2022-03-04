import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import qs from "qs";

import Meta from "./components/Meta";
import Top from "./components/Top";

import BookPage from "./pages/BookPage";

import style from "./assets/scss/style.module.scss";

const App = () => {
  //  Top.js 에서 클릭된 링크에 의해 전달되는 QueryString을 추출한다.
  const { search } = useLocation();
  console.log(search);

  // 추출된 QueryString을 JSON 객체로 파싱하고 key가 query인 값만 추출한다.
  const { query } = qs.parse(search, { ignoreQueryPrefix: true });
  console.log(query);

  const { sort } = qs.parse(search, { ignoreQueryPrefix: true });
  console.log(sort);
  return (
    <div className={style.container}>
      <Meta />

      <Top />

      <Routes>
        <Route path="/book" element={<BookPage query={query} sort={sort}/>} />
      </Routes>
    </div>
  );
};

export default App;
