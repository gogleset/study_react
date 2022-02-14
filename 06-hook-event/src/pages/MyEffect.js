import React from 'react';

import sea from '../assets/img/sea.jpg';

const MyEffect = () => {
    // 이미지의 밝기를 위한 상태값
    const [myBirghtness, setBirghtness] = React.useState(100);

    // 브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);

    // 사용자 정의 함수.
    const onMyResize = () => setMyWidth(window.innerWidth);

    /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨  */
    React.useEffect(() => {
        console.log('[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능', new Date());
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize);
    }, []);

    /** 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 매번 실행됨 */
    React.useEffect(() => {
        console.log('[MyEffect2] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨', new Date());
    });

    /** 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props값이 변경될 때만 실행됨 */
    React.useEffect(() => {
        console.log('[MyEffect4] %s ::: myBirghtness값이 변경됨', new Date());
    }, [myBirghtness]);

    /** state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨 */
    React.useEffect(() => {
        return () => {
            console.log('[MyEffect3] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능', new Date());
        };
    });

    return (
        <div>
            <h2>MyEffect</h2>

            <h3>Window Width: {myWidth}</h3>

            <div>
                <input
                    type='range'
                    min='0'
                    max='200'
                    step='1'
                    value={myBirghtness}
                    onChange={(e) => {
                        setBirghtness(e.currentTarget.value);
                    }}
                />
            </div>

            <img
                alt='Hello React'
                src={sea}
                width='480'
                style={{
                    filter: 'brightness(' + myBirghtness + '%)',
                }}
            />
        </div>
    );
};

export default MyEffect;
