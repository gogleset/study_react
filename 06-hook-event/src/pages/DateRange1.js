import React from 'react';
import day from 'dayjs'; // for 날짜 처리

/**
 * useState를 사용하여 날짜 범위 선택 기능 구현
 */
const DateRange1 = () => {
    /**
     * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
     * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언.
     */
    // const [startDate, setStartDate] = React.useState(...);
    // const [endDate, setEndDate] = React.useState(...);

    /**
     * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
     * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언.
     */
    const [myDate, setMyDate] = React.useState({
        // 날짜 형식 참고: https://dayjs.com/docs/#/displaying/
        startDate: day().format('YYYY-MM-DD'),
        endDate: day().format('YYYY-MM-DD'),
    });

    return (
        <div>
            <h2>DateRange1</h2>

            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>

            <p>
                <button
                    type='button'
                    onClick={(e) => {
                        // 날짜 계산 참고: https://dayjs.com/docs/#/manipulating/add/
                        // myDate의 값을 모두 가지고오고, startDate만 덮어써라
                        setMyDate({ ...myDate, startDate: day().add(-7, 'd').format('YYYY-MM-DD') });
                    }}>
                    7일
                </button>

                <button
                    type='button'
                    onClick={(e) => {
                        setMyDate({ ...myDate, startDate: day().add(-15, 'd').format('YYYY-MM-DD') });
                    }}>
                    15일
                </button>

                <button
                    type='button'
                    onClick={(e) => {
                        setMyDate({ ...myDate, startDate: day().add(-1, 'M').format('YYYY-MM-DD') });
                    }}>
                    1개월
                </button>

                <button
                    type='button'
                    onClick={(e) => {
                        
                        setMyDate({ ...myDate, startDate: day().add(-3, 'M').format('YYYY-MM-DD') });
                    }}>
                    3개월
                </button>

                <button
                    type='button'
                    onClick={(e) => {
                        setMyDate({ ...myDate, startDate: day().add(-6, 'M').format('YYYY-MM-DD') });
                    }}>
                    6개월
                </button>
            </p>
        </div>
    );
};

export default DateRange1;
