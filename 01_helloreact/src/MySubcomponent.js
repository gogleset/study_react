import React from "react";


const MySubComponent = () => {
  return (
    <div>
      <h6>안녕하세요 리액트 MySubComponent 함수입니다.</h6>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </div>
  );
};

// 다른 곳에서 사용할 수 있도록 내보내기
export default MySubComponent;
