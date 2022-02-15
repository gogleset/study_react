import React from "react";

import sea from '../assets/img/sea.jpg';

const MyEffect = () => {
  // 이미지 밝기를 위한 상태값

  const [myBrightness, setBrightness] = React.useState(100);

  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = React.useState(window.innerWidth);

  // 사용자 정의 함수
  const onMyResize = () => setMyWidth(window.innerWidth);

  /**
   * 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨
   * 브라우저에 이벤트가 발생할 때 주로 사용한다.
   */
  React.useEffect(() => {
    console.log(
      "[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능",
      new Date()
    );
    window.addEventListener("resize", onMyResize);
    return () => window.removeEventListener("resize", onMyResize);
  }, []);

  /**
   * 실행 순서1. 이 컴포넌트가 화면에 막 등장할 때와 state, props 값이 변경될 때마다 매번 실행됨
   * 특정 값을 넣은게 아니기 때문에 전체 실행된다.
   */
  React.useEffect(() => {
    console.log(
      "[MyEffect2] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨",
      "아무것도 배열에 설정하지 않았을 경우"
    );
  });

  /**
   * 실행 순서2. 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props 값이 변경될 때만 실행됨
   * 배열을 넣어주면 특정 값만 바꾸라라는것이고, 어떠한 값을 모니터링하는 것처럼 동작하게 된다.
   */
  React.useEffect(() => {
    console.log("[MyEffect4] %s ::: myBrightness값이 변경됨", "배열에 설정하였을 경우");
  }, [myBrightness]);

  /**
   * state값이 변경되어 화면이 다시 렌더링 되거나 화면 이동 등의 이유로 컴포넌트가 사라질 때 실행됨
   * 페이지를 빠져나갈때 실행되는 구문
   */
  React.useEffect(() => {
    return () => {
      console.log(
        "[MyEffect3] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능",
        "바로 리턴할 경우"
      );
    };
  });
  return (
    <div>
      <h2>MyEffect</h2>

      <h3>Window Width: {myWidth}</h3>

      <div>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          value={myBrightness}
          onChange={(e) => {
            setBrightness(e.currentTarget.value);
          }}
        />
      </div>

      <img
        alt="Hello React"
        src={sea}
        width="480"
        style={{
          filter: "brightness(" + myBrightness + "%)",
        }}
      />
    </div>
  );
};

export default MyEffect;
