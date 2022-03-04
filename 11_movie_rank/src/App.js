import React from "react";

import { Routes, Route } from "react-router-dom";

import Meta from './components/meta'
import MovieRankPage from './pages/MovieRankpage'

import style from './assets/scss/style.module.scss';

const App = () => {
  return (
    <div className={style.container}> 
      {/* head seo 최적화 */}
      <Meta></Meta> 

    {/* 페이지 라우팅 */}
      <Routes>
        <Route path="/" element={<MovieRankPage />} />
        <Route path="/:targetDt" element={<MovieRankPage />} />
      </Routes>
    </div>
  );
};

export default App;
