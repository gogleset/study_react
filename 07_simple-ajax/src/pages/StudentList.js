import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { cloneDeep } from "lodash";

const StudentList = () => {
  /** 화면에 표시할 상태값(AJAX 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의 */
  const [student, setstudent] = React.useState([]);

  const myKeywordInput = React.useRef();

  // 페이지가 열림과 동시에 동작하는 hook 정의
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/student");

        console.debug("Ajax 연동 성공");
        console.debug(response.data);
        console.groupEnd();

        // 상태값에 Ajax 연동 결과 갱신
        setstudent(response.data);
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }
    })();
  }, []);

  // /** 검색 버튼에 대한 클릭 이벤트 */
  const onButtonClick = (e) => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/student",
          {
            params: {
              name: myKeywordInput.current.value,
            },
          }
        );

        console.debug("Ajax 연동 성공");
        console.debug(response.data);
        console.groupEnd();

        // 상태값에 Ajax 연동 결과 갱신
        setstudent(response.data);
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }
    })();
  };

  /** 삭제하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러 */
  const onDeleteClick = async (e) => {
    //   클릭된 자기 자신을 추린다.
    const current = e.currentTarget;
    //  클릭된 자신에게 숨어있는 data-id 값을 추출
    const id = parseInt(current.dataset.id);
    alert(id);

    try {
      // fakeapi서버로 바꿔야함
      const response = await axios.delete(
        `http://localhost:3001/student/${id}`
      );

      console.debug("Ajax 연동 성공");
      console.debug(response.data);
      console.groupEnd();
    } catch (e) {
      console.error(e);
      alert("Ajax 연동 실패");
    }

    // 삭제가 완료되었다면 화면 갱신을 위해 status값도 갱신한다.
    // -> 상태값이 객체인 경우 깊은 복사 후 갱신해야 한다.
    const studentCopy = cloneDeep(student);

    // 탐색을 수행하다가 콜백에서 true를 리턴하면 탐색을 중단하는 함수 사용
    studentCopy.some((v, i) => {
        if(v.id === id){
            // 복사된 배열에서 삭제버튼과 일치하는 id값을 갖는 항목을 삭제
            studentCopy.splice(i,1);
            // 삭제된 결과를 상태값으로 갱신.
            setstudent(studentCopy);
            // 반복 중단을 위해서 true 리턴
            return true;
        }
        return false;
    });
  };

  return (
    <div>
      <h2>학생목록</h2>

      <form>
          <input type="text" name="keyword" ref={myKeywordInput} />
          <button type="button" onClick={onButtonClick}>
              검색
          </button>
      </form>

      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>학생번호</th>
            <th>이름</th>
            <th>userId</th>
            <th>학년</th>
            <th>idnum</th>
            <th>생년월일</th>
            <th>전화번호</th>
            <th>키</th>
            <th>몸무게</th>
            <th>학과번호</th>
            <th>교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.length > 0 ? (
            student.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.userid}</td>
                  <td>{item.grade}</td>
                  <td>{item.idnum}</td>
                  <td>{item.birthdate}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                  <td>{item.deptno}</td>
                  <td>{item.profno}</td>
                  <td>
                    <button
                      type="button"
                      data-id={item.id}
                      onClick={onDeleteClick}
                    >
                      삭제하기
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" align="center">
                검색결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <hr></hr>
      <Link to="/student_add">학생추가</Link>
    </div>
  );
};

export default StudentList;
