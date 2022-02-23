import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

// Route가 적용된 페이지는 props안에 history 객체가 포함되어 있다.
// --> 화면 이동 처리 기능 제공.
const DepartmentAdd = () => {
  // form에서 전송 이벤트가 발생할때 호출될 이벤트 핸들러
  const onDepartmentSave = async (e) => {
    // 페이지 강제 이동을 차단
    e.preventDefault();

    // 리엑트 라우터 돔에서 useNavigate 훅을 가져온다.
    // 페이지 이동 처리를 수행하는 객체를 반환받는다. window.location은 쓰면 xxxx
    const navigate = useNavigate();

    console.log(navigate);

    // <form> 안에 있는 입력 요소의 값 추출
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log("학과명: %s, 위치: %s", dname, loc);

    // Ajax 처리를 위한 비동기 즉시 실행함수 정의

    try {
      // POST 방식으로 전송할 파라미터 정의
    //   const form = new FormData();
    //   form.append("dname", dname);
    //   form.append("loc", loc);

      const response = await axios.post(
        "http://itpaper.co.kr/demo/react/api/dept_write.php",{
            'dname': dname,
            'loc': loc
        }
      );

      console.debug("Ajax 연동 성공");
      console.debug(response.data);
      console.groupEnd();

      // 목록페이지로 이동
      navigate.push("/department_list");
    } catch (e) {
      console.error(e);
      alert("데이터 저장에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>학과추가</h2>

      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname">학과명</label>
          <input type="text" name="dname" id="dname" />
        </div>

        <div>
          <label htmlFor="loc">학과위치</label>
          <input type="text" name="loc" id="loc" />
        </div>

        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default DepartmentAdd;
