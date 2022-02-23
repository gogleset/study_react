import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

// Route가 적용된 페이지는 props안에 history 객체가 포함되어 있다.
// --> 화면 이동 처리 기능 제공.
const StudentAdd = () => {
  const navigate = useNavigate();

  // form에서 전송 이벤트가 발생할때 호출될 이벤트 핸들러
  const onStudentSave = async (e) => {
    // 페이지 강제 이동을 차단
    e.preventDefault();

    // 리엑트 라우터 돔에서 useNavigate 훅을 가져온다.
    // 페이지 이동 처리를 수행하는 객체를 반환받는다. window.location은 쓰면 xxxx

    console.log(navigate);

    // <form> 안에 있는 입력 요소의 값 추출
    const name = e.currentTarget.name.value;
    const userid = e.currentTarget.userid.value;
    const grade = e.currentTarget.grade.value;
    const idnum = e.currentTarget.idnum.value;
    const birthdate = e.currentTarget.birthdate.value;
    const tel = e.currentTarget.tel.value;
    const height = e.currentTarget.height.value;
    const weight = e.currentTarget.weight.value;
    const deptno = e.currentTarget.deptno.value;
    const profno = e.currentTarget.profno.value;

    console.log("학과명: %s, 위치: %s", name, userid);

    // Ajax 처리를 위한 비동기 즉시 실행함수 정의

    try {
      // POST 방식으로 전송할 파라미터 정의
      //   const form = new FormData();
      //   form.append("dname", dname);
      //   form.append("loc", loc);

      const response = await axios.post("http://localhost:3001/student", {
        name: name,
        userid: userid,
        grade: grade,
        idnum: idnum,
        birthdate: birthdate,
        tel: tel,
        height: height,
        weight: weight,
        deptno: deptno,
        profno: profno
      });

      console.debug("Ajax 연동 성공");
      console.debug(response.data);
      console.groupEnd();

      // 목록페이지로 이동
      navigate("/student_list");
    } catch (e) {
      console.error(e);
      alert("데이터 저장에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>학생추가</h2>

      <form onSubmit={onStudentSave}>
        <div>
          <label htmlFor="name">학생명</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="userid">아이디</label>
          <input type="text" name="userid" id="userid" />
        </div>

        <div>
          <label htmlFor="grade">학년</label>
          <input type="text" name="grade" id="grade" />
        </div>

        <div>
          <label htmlFor="idnum">아이디넘버</label>
          <input type="text" name="idnum" id="idnum" />
        </div>

        <div>
          <label htmlFor="birthdate">생년월일</label>
          <input type="text" name="birthdate" id="bir   thdate" />
        </div>

        <div>
          <label htmlFor="tel">전화번호</label>
          <input type="text" name="tel" id="tel" />
        </div>

        <div>
          <label htmlFor="height">키</label>
          <input type="text" name="height" id="height" />
        </div>

        <div>
          <label htmlFor="weight">몸무게</label>
          <input type="text" name="weight" id="weight" />
        </div>

        <div>
          <label htmlFor="deptno">학과번호</label>
          <input type="text" name="deptno" id="deptno" />
        </div>

        <div>
          <label htmlFor="profno">교수번호</label>
          <input type="text" name="profno" id="profno" />
        </div>



        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default StudentAdd;
