# 04-props

## #01. 프로젝트 생성

```shell
yarn create react-app 04-props
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
   import { Route, Link, Switch } from "react-router-dom";
   ```

## 3) 프로젝트 실행

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

```shell
yarn start
```

--------------------

## 02. 컴포넌트 종류

### 1) 클래스 컴포넌트

React 오리지널 컴포넌트

지금까지의 예제들 처럼 함수 형태로 정의하는 것이 아닌 class 형태로 정의하는 컴포넌트.

함수형 컴포넌트보다 구문이 복잡하고 길다.

함수형 컴포넌트보다 구문이 좀 더 명확하다.

클래스 안에 통칭 LifeCycle이라는 미리 정해진 함수들을 통해 화면의 갱신 시점이나 변수값의 변경 시점에 화면을 어떻게 처리할지 정의할 수 있다.

### 2) 함수형 컴포넌트 (권장)

클래스 컴포넌트보다 구문이 간결하지만 그만큼 더 난해할 수 있다.

리액트 버전 16이후에 LifeCycle을 처리할 수 있는 hook이라는 기능이 도입되면서
React에서 공식적으로 권장하는 컴포넌트 작성 방법
