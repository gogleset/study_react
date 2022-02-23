import React, { useEffect } from "react";
import axios from "axios";

const DepartmentList = () => {
  /** 화면에 표시할 상태값(AJAX 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의 */
  const [department, setDepartment] = React.useState([]);

  // 페이지가 열림과 동시에 동작하는 hook 정의
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://itpaper.co.kr/demo/react/api/dept_list.php");

        console.debug("Ajax 연동 성공");
        console.debug(response.data);
        console.groupEnd();

        // 상태값에 Ajax 연동 결과 갱신
        setDepartment(response.data.item);
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }
    })();
  }, []);

  // /** 검색 버튼에 대한 클릭 이벤트 */
  // const onButtonClick = (e) => {
  //     (async () => {
  //         try {
  //             const response = await axios.get('http://itpaper.co.kr/demo/react/api/dept_list.php', {
  //                 params: {
  //                     keyword: myKeywordInput.current.value,
  //                 },
  //             });

  //             console.debug('Ajax 연동 성공');
  //             console.debug(response.data);
  //             console.groupEnd();

  //             // 상태값에 Ajax 연동 결과 갱신
  //             setDepartment(response.data.item);
  //         } catch (e) {
  //             console.error(e);
  //             alert("Ajax 연동 실패");
  //         }
  //     })();
  // };

  /** 삭제하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러 */
  const onDeleteClick = async e => {
    //   클릭된 자기 자신을 추린다. 
    const current = e.currentTarget;
    //  클릭된 자신에게 숨어있는 data-id 값을 추출

    const id = current.dataset.id
    alert(id);

    try {
        // fakeapi서버로 바꿔야함
        const response = await axios.delete(
          "http://itpaper.co.kr/demo/react/api/dept_list.php");

        console.debug("Ajax 연동 성공");
        console.debug(response.data);
        console.groupEnd();
            department.some((v,i) => {
                if(v.id == id){
                    department.splice(i, 1);
                    return true;
                }
            })
        // 상태값에 Ajax 연동 결과 갱신
        setDepartment(response.data.item);
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }
  };

//   /** 페이지 열림과 동시에 실행되는 부분 */
//   useEffect(() => {
//     onButtonClick();
//   }, []);

  return (
    <div>
      <h2>학과목록</h2>

      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {department.length > 0 ? (
            department.map((item, index) => {
              return (
                <tr key={item.deptno}>
                  <td>{item.deptno}</td>
                  <td>{item.dname}</td>
                  <td>{item.loc}</td>
                  <td>
                      <button type="button" data-id={item.deptno} onClick={onDeleteClick}>삭제하기</button>
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
    </div>
  );
};

export default DepartmentList;
