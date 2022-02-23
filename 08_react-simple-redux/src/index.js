import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

/** 리덕스를 위한 참조 추가 */
// 리덕스에서 스토어 생성 함수 가져오기
// 미들웨어 처리 함수 가져오기
import { createStore, applyMiddleware } from 'redux';
// 전체 App을 리덕스에 구독시키기 위해 위해 Provder라는 객체를 가져온다.
import { Provider } from 'react-redux';
// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import { composeWithDevTools } from 'redux-devtools-extension';
// reducers폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
// 1) 실제 파일이름으로 인식
// 2) 파일이 없을 경우 폴더 이름으로 인식하고 그 폴더 안의 index.js를 갖는다.
import rootReducer from './reducers';

// 미들웨어 불러오기
import Logger from './middlewares/Logger';

/** 스토어 생성 */
// --> 스토어 생성 기본 코드(서비스용)
// const store = createStore(rootReducer);
// --> 크롬 개발자도구와 연계하기 위한 스토어 생성 기본 코드(개발용)
//const store = createStore(rootReducer, composeWithDevTools());

/** 스토어 생성 (미들웨어 적용) */
// --> 미들웨어를 적용한 상태의 스토어 생성 코드 (기본)
// const store = createStore(rootReducer, applyMiddleware(Logger));
// --> 미들웨어와 크롬 개발자 도구 연동을 적용한 스토어 생성 (개발용) 개발하는동안만 쓰기
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Logger)));

// 스토어 구독 처리 추가
ReactDOM.render(
    <React.StrictMode>
        {/* 리덕스 구독 */}
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();