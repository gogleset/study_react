import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

// Route가 적용된 페이지는 props안에 history 객체가 포함되어 있다.
// --> 화면 이동 처리 기능 제공.
const ProfessorAdd = () => {
  const navigate = useNavigate();

  // form에서 전송 이벤트가 발생할때 호출될 이벤트 핸들러
  const onprofessorSave = async (e) => {
    // 페이지 강제 이동을 차단
    e.preventDefault();

    // 리엑트 라우터 돔에서 useNavigate 훅을 가져온다.
    // 페이지 이동 처리를 수행하는 객체를 반환받는다. window.location은 쓰면 xxxx

    console.log(navigate);

    // <form> 안에 있는 입력 요소의 값 추출
    const name = e.currentTarget.name.value;
    const userid = e.currentTarget.userid.value;
    const position = e.currentTarget.position.value;
    const sal = e.currentTarget.sal.value;
    const hiredate = e.currentTarget.hiredate.value;
    const comm = e.currentTarget.comm.value;
    const deptno = e.currentTarget.deptno.value;

    console.log("학과명: %s, 위치: %s", name, userid);

    // Ajax 처리를 위한 비동기 즉시 실행함수 정의

    try {
      // POST 방식으로 전송할 파라미터 정의
      //   const form = new FormData();
      //   form.append("dname", dname);
      //   form.append("loc", loc);

      const response = await axios.post("http://localhost:3001/professor", {
        name: name,
        userid: userid,
        position: position,
        sal: sal,
        hiredate: hiredate,
        comm: comm,
        deptno: deptno
      });

      console.debug("Ajax 연동 성공");
      console.debug(response.data);
      console.groupEnd();

      // 목록페이지로 이동
      navigate("/professor_list");
    } catch (e) {
      console.error(e);
      alert("데이터 저장에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>교수추가</h2>

      <form onSubmit={onprofessorSave}>
        <div>
          <label htmlFor="name">교수명</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="userid">아이디</label>
          <input type="text" name="userid" id="userid" />
        </div>

        <div>
          <label htmlFor="position">직급</label>
          <input type="text" name="position" id="position" />
        </div>

        <div>
          <label htmlFor="sal">급여</label>
          <input type="text" name="sal" id="sal" />
        </div>

        <div>
          <label htmlFor="hiredate">입사일</label>
          <input type="text" name="hiredate" id="hiredate" />
        </div>

        <div>
          <label htmlFor="comm">직급 수당</label>
          <input type="text" name="comm" id="comm" />
        </div>
        <div>
          <label htmlFor="deptno">학과번호</label>
          <input type="text" name="deptno" id="deptno" />
        </div>

        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default ProfessorAdd;
