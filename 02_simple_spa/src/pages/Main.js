import React from 'react';

import { Route, Link, Routes } from "react-router-dom";
import MainSub1 from './Sub1';
import MainSub2 from './Sub2';

const Main = () => {
    return (
        <div>
            <h2>여기는 Main.js 파일 입니다.</h2>
            <p>SubRoute에 대한 경로 구성은 "./" 없이 상대경로만 가능합니다.(절대경로 불가)</p>


            {/* 링크 구성 부분 */}
            <ul>
                <li><Link to="sub1">Goto Sub1</Link></li>
                <li><Link to="sub2">Goto Sub2</Link></li>
            </ul>
            {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
            <Routes>
                {/* 부모와 같은 URL을 적용받는 Sub Route는 기본값으로 실행된다. */}
                <Route path="sub1" element={<MainSub1/>} exact={true} />
                <Route path="sub2" element={<MainSub2/>}/>
            </Routes>
        </div>
    );
};

export default Main;
