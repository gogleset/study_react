import React from "react";

import MySubComponent from "./MySubcomponent";

/** 함수형 컴포넌트 정의 */
function MyComponent2() {
  return (
    <div>
      <h2>Virtual DOM / MyComponent2 함수입니다.</h2>
      <p>This is React Component</p>
      <MySubComponent />
      <MySubComponent />
      <MySubComponent />
      <MySubComponent />
    </div>
  );
}

export default MyComponent2;
