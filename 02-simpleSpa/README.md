# 02-simple-spa

## #01. 프로젝트 생성 및 초기화

> 프로젝트 이름은 영어 소문자만 사용 가능함.

```shell
yarn create react-app 02-simple-spa
```

### 1) 추가 패키지 설치

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

```shell
yarn add react-router-dom
yarn add qs
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
   import { Route, Link, Routes } from "react-router-dom";
   ```

### 2) 프로젝트 실행

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

```shell
yarn start
```


-------------------------------------------

## #02. Single Page Application (=SPA)

하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식.

js 파일로 웹 페이지 화면을 변경하는 형태로 구현된다.

### 1) Router

분배하는 기능을 수행하는 소프트웨어나 하드웨어

대표적인 라우터로는 아이피공유기가 있다.

React의 Router는 URL에 의해 컴포넌트를 분배하는 기능을 한다.

HTML5에서 Javascript에 추가된 기능중 history객체를 통해 URL을 변조하는 기능이 있다.

리액트의 Router는 이 기능을 활용하여 현재 페이지의 URL을 다양하게 변조하여 거기에 각각의 컴포넌트를 분배한다.

### 2) SPA개발의 장점

페이지 이동 없이 JS에 의해 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 실행 속도가 빠르다.

### 3) SPA개발의 단점

JS코드가 비대해 질 수 있다. 코드 스플리팅 기법으로 해결가능(코드 분할 작성)

하나의 HTML이므로 SEO에 취약하다 (서버사이드 렌더링으로 해결 가능)

서버사이드 랜더링 = React + Node / React + PHP / React + Java(Spring)


> 이후 내용은 수업시간에 소스코드와 주석을 통해 설명합니다.