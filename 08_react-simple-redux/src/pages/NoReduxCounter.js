import React from 'react';
// 리덕스 없이 상태값을 관리하는 카운터 예제

const NoReduxCounter = (props) => {

    // 상태값
    const [number, setNumber] = React.useState(0);
    const [color, setColor] = React.useState('#000');

    // 이벤트 처리 함수
    const onPlusClick = (payload) => {
        const currentNumber = number + payload;
        const currentColor = currentNumber > 0 ? '#2f77eb' : '#f60';
        setNumber(currentNumber);
        setColor(currentColor);
    };

    const onMinusClick = (payload) => {
        const currentNumber = number - payload;
        const currentColor = currentNumber > 0 ? '#2f77eb' : '#f60';
        setNumber(currentNumber);
        setColor(currentColor);
    };

    return (
        <div>
            <h2>NoReduxCounter</h2>
            <h3 style={{color: color}}>{number}</h3>
            <div>
                <button onClick={(e) => onPlusClick(5)}>+5</button>
                <button onClick={(e) => onMinusClick(1)}>-1</button>
            </div>
        </div>
    );
};

export default NoReduxCounter;