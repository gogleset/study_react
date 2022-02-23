import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Routes } from 'react-router-dom';

import ReduxToolkitCounter from './pages/ReduxToolkitCounter';
import ReducxToolkitDepartment from './pages/ReduxToolkitDepartment'
import ReducxToolkitStudent from './pages/ReduxToolkitStudent'
import ReducxToolkitProfessor from './pages/ReduxToolkitProfessor'

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
        content: '|';
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
            <h1>React Toolkit</h1>
            <MenuLink to='/reduxToolkitCounter'>ReduxToolkitCounter</MenuLink>
            <MenuLink to='/reduxToolkitDepartment'>ReducxToolkitDepartment</MenuLink>
            <MenuLink to='/reduxToolkitStudent'>ReducxToolkitStudent</MenuLink>
            <MenuLink to='/reducxToolkitProfessor'>ReducxToolkitProfessor</MenuLink>
            <Routes>
                <Route path='/reduxToolkitCounter' element={<ReduxToolkitCounter></ReduxToolkitCounter>} />
                <Route path='/reduxToolkitDepartment' element={<ReducxToolkitDepartment></ReducxToolkitDepartment>} />
                <Route path='/reduxToolkitStudent' element={<ReducxToolkitStudent></ReducxToolkitStudent>} />
                <Route path='/reducxToolkitProfessor' element={<ReducxToolkitProfessor></ReducxToolkitProfessor>} />
            </Routes>
        </div>
    );
};

export default App;