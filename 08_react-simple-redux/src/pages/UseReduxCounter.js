import React from 'react';
// 컴포넌트와 액션함수를 연결하는 기능
import { connect } from 'react-redux';
// 리듀서에 정의한 액션함수들을 참조.
import { plusAction, minusAction } from '../reducers/CounterReducer';

/**
 * 전체 App을 리덕스에 구독시키면 
 * 컴포넌트의 props에 reducer가 정의하고 있는 action함수 및 state값이 포함되어 넘어온다.
 * props = {number: 0, color: "#000", plusAction: ƒ, minusAction: ƒ}
 * 컴포넌트는 전역변수화 된 상태값을 쓰겠다는 것
 */
const UseReduxCounter = (props) => {
    const { number, color, plusAction, minusAction } = props;

    return (
        <div>
            <h2>UseReduxCounter</h2>
            <h3 style={{color: color}}>{number}</h3>
            <div>
                <button onClick={(e) => { plusAction(10); }}>+10</button>
                <button onClick={(e) => { minusAction(2); }}>-2</button>
            </div>
        </div>
    );
};

/** 스토어에 상태값과 action을 전달하는 함수를 연결하여 디스패치 하는 처리를 구현함. */
/**
const getState = (state) => ({
    number: state.counterReducer.number,
    color: state.counterReducer.color
});
const actions = { plusAction, minusAction };
// 스토어에 연결하기위해 connect() 함수 호출 --> 리턴되는 객체는 함수
const dispatch = connect(getState, actions);
// 스토어에 연결된 함수를 통해 이 컴포넌트 자체를 디스패치 한 결과 형태로 내보낸다.
export default dispatch(UseReduxCounter);
/*/
// 리듀서에서 정의한 상태값과 구조가 동일해야한다.
export default connect((state) => ({
    number: state.counterReducer.number,
    color: state.counterReducer.color
}), { plusAction, minusAction })(UseReduxCounter);
/**/