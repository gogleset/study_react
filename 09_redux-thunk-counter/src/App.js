import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Routes } from 'react-router-dom';

import UseReduxHookCounter from './pages/UseReduxHookCount';

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
            <h1>React Redux Thunk</h1>
            <MenuLink to='/use_redux_hook_counter'>UseReduxHookCounter</MenuLink>
            <Routes>
                <Route path='/use_redux_hook_counter' element={<UseReduxHookCounter></UseReduxHookCounter>} />
            </Routes>
        </div>
    );
};

export default App;