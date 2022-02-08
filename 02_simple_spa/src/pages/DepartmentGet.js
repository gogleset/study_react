import React from 'react';

// QueryString 값을 식별할 수 있는 패키지 참조
// --> 설치필요 "yarn add qs"
import qs from 'qs';

import { useLocation } from 'react-router-dom';

/**
 * HTTP GET 파라미터를 전달받는 페이지 
 * 
 */
const DepartmentGet = () => {
    // 잡다한 콘솔 출력 삭제

    const location = useLocation();
    console.group("useLocation() 값 확인");
    console.log(location);
    console.groupEnd()

    // QueryString을 JSON 형태로 변환
    const {search} = useLocation();
    const query = qs.parse(search, {
        ignoreQueryPrefix: true //맨앞의 "?" 제거옵션
    });

    console.group("QueryString 확인");
    console.debug(query);
    console.groupEnd()
    
    console.group("파라미터 결과 확인");
    console.debug(`요청된 파라미터 결과 값=${query.deptno}`, typeof query.deptno);
    console.debug(`요청할 메시지 내용=${query.msg}`, typeof query.msg);
    console.groupEnd()
    
    /** 한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비 */
    // --> 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 한다. ==> Ajax
    const departmentList = {
        item: [
            { deptno: 101, dname: '컴퓨터공학과', loc: '1호관' },
            { deptno: 102, dname: '멀티미디어학과', loc: '2호관' }
        ]
    };

    /** 전달된 파라미터에 따라 화면에 출력할 내용 조회하기 */
    // 미리 준비된 JSON 객체에서 요청정보(query.deptno)와 동일한 deptno값을 갖는 객체를 조회
    const deptno = parseInt(query.deptno);

    // 조회결과가 저장될 객체
    let departmentItem = null;

    // 미리 준비한 JSON에서 deptno값이 일치하는 정보를 조회
    departmentList.item.some((v, i) => {
        if (v.deptno === deptno) {
            departmentItem = v;
            return true;
        }
        return false;
    });

    /** 조회 결과가 없는 경우 */
    if (!departmentItem) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }

    /** 정상 화면 출력 */
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.deptno}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
};

export default DepartmentGet;