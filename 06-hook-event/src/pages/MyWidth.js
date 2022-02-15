import React from 'react';
// 상태값을 정리하고 갱신하는것까지 정의한 모듈화
import useMyWidth from '../hooks/MyHook';


const MyWidth = () => {
    const myWidth = useMyWidth();
    return (
        <div>
            <h2>MyState</h2>
            <h3>windowWidth: {myWidth}</h3>
        </div>
    );
};

export default MyWidth;
