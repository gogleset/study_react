import React from 'react';

// 외부 css파일 참조 -->  참조변수 이름을 지정하지 않는다.
// CSS 를 이런식으로 작성하면 우리가 사용하는 클래스 네임이 노출되기 쉽다.
import '../assets/css/mystyle.css';

/**
 * 외부 CSS 파일을 참조하는 컴포넌트
 */
const CssClass = () => {
    return (
        <div>
            <h2>CssClass</h2>
            <div className='my-css-box' />
        </div>
    );
};

export default CssClass;