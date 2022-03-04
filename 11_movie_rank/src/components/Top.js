import React from 'react';

import { useNavigate } from 'react-router-dom';

// 페이지 이동 기능 사용하기 --> 컴포넌트의 Prop에 포함되어 전달되는 history객체 선언
const Top = ({targetDt}) => {
    const navigate = useNavigate();

    // 날짜의 선택값이 변경된 경우 호출될 이벤트 핸들러
    const onDateChange = e => {
        e.preventDefault();
        navigate('/' + e.currentTarget.value);
    }
    return (
        <header>
            <h1>영화 진흥 위원회</h1>
            <hr></hr>
            <form>
                <input type='date' className = 'form-control' placeholder="날짜 선택" defaultValue = {targetDt} onChange={onDateChange} />
            </form>
            <hr/>
        </header>
    );
};

export default Top;