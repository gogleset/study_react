# 10-react-redux-counter

## #01. 프로젝트 생성

```shell
yarn create react-app 08-simple-redux
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
yarn add redux
yarn add react-redux
yarn add redux-actions
yarn add redux-devtools-extension
```
`redux-devtools-extension`는 리덕스가 동작하는 과정을 Chrome 개발자 도구를 통해 디버깅하기 위한 개발 보조 도구.
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

## #02. 리덕스(Redux)

리액트 전역 상태 관리 라이브러리.

일반적인 컴포넌트 개발시에는 상태값(변수)을 관리하기 위해 라이프사이클이나 hooks을 사용한다.

이 경우 각각의 컴포넌트가 관리하는 변수값들이 소스파일 여기저기에 흩어져 있기 때문에 코드 유지보수에 좋지 않다.

컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있다.

즉, 여러 개의 컴포넌트가 개별적으로 관리하는 상태값들을 하나의 소스에 모아 놓고 통합 관리하는 것이 목적.

컴포넌트끼리 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값을 전달하거나 업데이트할 수 있다.


### 리덕스 기본 요소

> 각 항목에 대한 설명은 예제 소스의 주석을 참고하세요.

1. 상태값
1. 액션
1. 액션 생성 함수
1. 리듀서
1. 스토어
1. 구독
1. 디스패치

--------------------

## #03. React에서 리덕스를 활용하는 일반적인 패턴


```txt
                       ――――― 액션 디스패치 ――――▶
    [ 컴포넌트 ]                                    [ 리덕스 스토어 ]
                       ◀―――― 스토어 상태 ―――――
```

> action과 action리턴 함수가 정의된 파일을 Reducer라는 이름으로 작성

---------------------------

## #04. 리덕스 미들웨어

액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 실행되는 사전에 지정된 작업들.

미들웨어는 index.js에서 스토어를 생성하는 과정에서 적용한다.

### 1) 미들웨어로 수행하는 처리들

- 전달받은 액션을 단순히 콘솔에 기록
- 전달받은 액션 정보를 기반으로 액션을 아예 취소
- 다른 종류의 액션을 추가로 디스패치


### 2) 동작순서

```txt
  [사용자 이벤트] ――――▶ [액션] ――――▶ [미들웨어] ――――▶ [리듀서] ――――▶ [스토어]
```

### 3) 미들웨어로 동작하는 함수의 기본 구조

#### 함수를 반환하는 함수를 반환하는 함수

```js
function MyMiddleWare(store) {
    return function(next) {
        return function(action) {
            // 미들웨어 기본 구조
        }；
    }；
}；
export default MyMiddleWare
```

#### 화살표 함수로 축약한 형태

```js
const MyMiddleWare = store => next => action => {
    // 미들웨어 기본 구조
}；

export default MyMiddleWare
```

- store : 리덕스 스토어 인스턴스
- action : 디스패치된 액션
- next : 다음 작업으로 넘어가기 위한 함수.
  - next(action) 을 호출하면 다음 미들웨어로 액션을 넘겨준다.
  - 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.

미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리한다.

만약 미들웨어에서 next(action)을 사용하지 않으면 액션이 리듀서에 전달되지 않는다.


### 4) 일반적으로 많이 사용하는 오픈소스 미들웨어

- redux-logger : 브라우저 콘솔에 로그를 기록하는 기능
- redux-thunk : 비동기 작업을 위한 미들웨어 (주로 Timer, Ajax 등)
- redux-saga : 비동기 작업을 위한 미들웨어 (주로 Timer, Ajax 등)

> redux-thunk 와 redux-saga는 서로 경쟁 상태
