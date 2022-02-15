import React from 'react';

const MyCallback = () => {

    React.useEffect(() => console.clear(), []);
    
    const [myText, setMyText] = React.useState('Hello React');

    // 컴포넌트가 최초 렌더링될 때 1회만 이벤트 핸들러 함수를 정의하고 이후 부터는 계속적으로 재사용된다.
    // 만약 두 번째 파라미터인 배열에 특정 state값을 지정할 경우 해당 값이 수정될 때만 이벤트가 정의된다.
    // --> 이벤트 핸들러의 중복 정의를 방지해서 성능 향상을 꾀함.
    // 일반 이벤트 핸들러는 매번 컴포넌트가 실행될때마다 중복선언을 하여 사이트의 성능에 영향을 미친다.
    const onInputChange = React.useCallback( (e) => {
        setMyText(e.currentTarget.value);
    }, []);

    return (
        <div>
            <h2>MyCallback</h2>
            <h3>{myText}</h3>
            <input type="text" placeholder="input..." onChange={onInputChange} />
        </div>
    );
};

export default MyCallback;