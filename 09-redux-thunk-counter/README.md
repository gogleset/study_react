# 11-redux-thunk-counter

## #01. 프로젝트 생성

```shell
yarn create react-app 11-redux-thunk-counter
```

### 1) 추가 패키지 설치

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

```shell
yarn add react-router-dom
yarn add qs
yarn add node-sass
yarn add styled-components
yarn add axios
yarn add react-helmet
yarn add react-bootstrap
yarn add bootstrap@3
yarn add moment
yarn add redux
yarn add react-redux
yarn add redux-actions
yarn add redux-devtools-extension
yarn add redux-logger
yarn add redux-thunk
```

### 2) 프로젝트 생성 후 기초작업

1. **src폴더** 하위에서 App.css와 index.css, logo.svg 삭제
1. **App.js** 파일에서 App.css와 logo.svg에 대한 참조(import) 구문 제거
1. **index.js** 파일에서 index.css에 대한 참조(import) 구문 제거
1. index.js 파일에서 다음의 구문 추가
    ```js
    import { BrowserRouter } from 'react-router-dom';
    ```
1. index.js 파일에서 `<App />`을 `<BrowserRouter><App /></BrowserRouter>`로 변경
1. App.js 파일에 다음을 추가
   ```js
   import { Route, NavLink, Switch } from "react-router-dom";
   ```
   혹은
   ```js
   import { Route, Link, Switch } from "react-router-dom";
   ```

## 3) 프로젝트 실행

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

```shell
yarn start
```

--------------------

## #02. 리덕스 적용하기

### 1) 기능별 모듈(Reducer)을 결합할 준비

#### /src/reducers/index.js

폴더와 파일을 직접 생성한다.

```js
import { combineReducers } from 'redux';

export default combineReducers({
    // 앞으로 추가될 모듈들이 이 위치에서 리덕스에 추가된다.
});
```

### 2) 리덕스 스토어 구성하기

#### /src/index.js

##### a) 리덕스를 위한 참조 추가

```js
/** 리덕스를 위한 참조 추가 */
// 리덕스에서 스토어 생성 함수와 미들웨어 처리 함수 가져오기
import { createStore, applyMiddleware } from 'redux';

// 전체 App을 리덕스에 구독시키기 위해 위해 Provder라는 객체를 가져온다.
import { Provider } from 'react-redux';

// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수(선택사항)
import { composeWithDevTools } from 'redux-devtools-extension';

/** 미들웨어를 위한 참조 추가 */
// 미들웨어 불러오기
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/** 리덕스 스토어에 등록시킬 모듈들 일괄 참조 */
// reducers 폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import rootReducer from './reducers';
```

##### b) 리덕스 스토어 생성
```js
/** 리덕스 스토어 생성 */
// 로그를 생성하는 미들웨어 객체 만들기 --> 다른 미들웨어들보다 우선적으로 적용하는 것이 좋다.
const logger = createLogger();

// --> 미들웨어와 크롬 개발자 도구 연동을 적용한 스토어 생성 (개발용 코드, 완성 후 기본코드로 전환 필요)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));
```

##### c) 렌더링 처리

렌더링 처리를 `<Provider store={store}>` 태그로 감싼다.
```js
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
```
