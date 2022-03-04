import React from 'react';
import { Routes, Route } from "react-router-dom";
import Meta from './components/Meta';
import NewsPage from './pages/NewsPage.js';
import style from './assets/scss/style.module.scss';


const App = () => {
  return (
    <div className={style.container}>
      <Meta/>

      <Routes>
        <Route path='/' element={<NewsPage></NewsPage>} />
        <Route path='/:category' element={<NewsPage></NewsPage>} />
      </Routes>
    </div>
  );
};

export default App;
