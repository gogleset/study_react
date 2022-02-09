import React from 'react';

/**
 * jsx 조건분기 (2) - 조건식과 `&&` 연산자 사용
 * 
 * {조건 && (조건이 참인 경우 출력할 내용)}
 * 
 * 조건이 거짓인 경우 표시되는 내용 없음
 */
const If2 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If2</h2>
            {/* && 연산자는 앞의 내용이 false라면 뒤의 로직은 참인지 거짓인지 판별하기도 전에 false
            를 출력하는 특성을 가지고 있다. 이건 자바스크립트의 특성이다. */}
            {isLogin === true && <p>로그인 되셨습니다.</p>}
        </div>
    );
};

export default If2;