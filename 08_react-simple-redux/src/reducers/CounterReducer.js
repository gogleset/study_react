// 카운터 컴포넌트에서 사용할 상태값들을 관리하기 위한 리듀서.
// 보통 리듀서는 상태값 하나당 리듀서 하나로 대응된다.
// 하나의 변수마다 리듀서를 구성하기에는 개발 효율이 떨어지기 때문에 대부분의 경우 상태값은 객체(json) 형태로 연관된 변수들을 포함하게 된다.

import { createAction, handleActions } from "redux-actions";

/**
 * 1) 상태값 - 단순한 json 객체.
 * 컴포넌트에서 다루고자 하는 데이터들을 포함한다.
 * ----------------------------------------react
 * * 실제로는 ajax 연동을 위한 REstfl api 하나당 reducer 하나로 대응된다
 * 상태값은 Ajax를 통해 받아온 JSON 데이터가 될 것이다.
 */
const initialState = {
  number: 0,
  color: "#000",
};

/**
 * 2) 액션 - 컴포넌트가 겪는 상황을 구분하는 문자열 값
 * 여기서는 +, - 버튼이 눌러졌을 때를 의미하는 문자열로 사용함
 * "파일이름/상황이름" 값을 지정하면 다른 리듀서와 Action값이 충돌하는 것을 방지할 수 있다.
 * ----------------------------------------react
 * 실제로는 ajax 연동을 위한 CRUD 상황에 따라 action값이 정의되어야 한다.
 */
const ACT_PLUS = "Counter/PLUS";
const ACT_MINUS = "Counter/MINUS";

/**
 * 3) 액션 생성 함수 - 액션 객체를 만들어서 리턴한다.
 * 컴포넌트에 대한 액션 값의 수 만큼 정의하되 필요하다면 파라미터를 자유롭게 정의할 수 있다.
 * 액션함수들은 HTML 요소의 이벤트가 발생한 경우 호출할 수 있도록 구현한다.
 * ex) function foo() { ... 이 안에서 액션함수 호출 ... }
       <button onclick="plusAction(5)" />
 * 액션함수를 호출하는데 사용되는 특별한 방법이 존재함.
 *----------------------------------------react
 * 리액트에서는 `createAction()` 함수를 활용하여 함수 정의를 자동화한다.
 * 리액트에서는 액션함수의 파라미터를 함수 호출시 결정한다.
 * 액션 함수가 리턴하는 JSON객체는 아래와 같은 형태이다.
 * --> {  type: "ACTION값", payload: "액션함수가 전달받은 파라미터" }
 */
export const plusAction = createAction(ACT_PLUS);
export const minusAction = createAction(ACT_MINUS);

/**
 * 4) 리듀서
 * "액션값이 OO일 때, 상태값을 XX로 변경한다"라는 명령을 수행하는 함수
 * 개발자가 직접 호출하지 않고 리덕스에 의해 호출된다
 * 최초 호출될 경우 state값을 위에서 미리 정의한 상태값으로 사용하도록 기본값을 정의해 놓는다.
 * -> action값이 OO일 때 파라미터로 전달되는 state값을 조작한 뒤
 *    동일한 구조의 json 객체를 반환하도록 정의해야 한다.
 *--------------------------------------------
 * 순정 리덕스는 action값에 대한 switch문을 구성하지만
 * 리액트는 handleActions() 함수를 통해
 * JSON 객체의 메서드가 action값에 따라 호출된다.
 * 이 때, 메서드 이름은 action 값이 활용된다.
 */
const myCountReducer = {
  // 컴포넌트에서 plusAction()함수를 dispatch 하면 호출된다.

  // 실제 호출되는 함수
  // JSON의 키를 배열로 묶으면 그 선언된 변수 값을 키로 삼는다.
  [ACT_PLUS]: function (state, action) {
    // plusAction(100); 이라고 디스패치 한 경우
    // --> action.payload라는 값이 100이 된다.

    // plusAction({a: 1, b, 2}) 이라고 디스패치 한 경우
    // --> action.payload.a, action.payload.b 로 접근한다.

    // state는 현재 출력되고 있는 상태값
    // action.payload는 상태값에
    const numberValue = state.number + action.payload;
    let colorValue = "#000";

    if (numberValue > 0) {
      colorValue = "#2f77eb";
    } else if (numberValue < 0) {
      colorValue = "#f60";
    }
    // 여기서 리턴하는 내용이 새로운 상태값이 된다.
    return { number: numberValue, color: colorValue };
  },
  // 컴포넌트에서 minusAction()함수를 dispatch 하면 호출된다.
  [ACT_MINUS]: function (state, action) {
    const numberValue = state.number - action.payload;
    let colorValue = "#000";

    if (numberValue > 0) {
      colorValue = "#2f77eb";
    } else if (numberValue < 0) {
      colorValue = "#f60";
    }

    return { number: numberValue, color: colorValue };
  },
};

/**
 * 5) 스토어 생성
 * 스토어로 생성하기 위해 리듀서와 상태값을 묶어서 내보낸다.
 * 이 객체를 /index.js가 import하여 스토어로 생성한다.
 */
const MyCounterReducer = handleActions(myCountReducer, initialState);

// 생성된 스토어를 내보낸다.
export default MyCounterReducer;
