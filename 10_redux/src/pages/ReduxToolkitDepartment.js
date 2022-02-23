import React from "react";

// 상태값을 로드하기 위한 hook과 action 함수를 dispatch 할 hook 참조
import { useSelector, useDispatch } from "react-redux";

// Slice에 정의된 액션함수를 참조
import { getList } from "../slices/DepartmentSlice";

const ReduxToolkitDepartment = () => {
  React.useEffect(() => console.clear(), []);

  //   hook을 통해 slice가 관리하는 상태값 가져오기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.department);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loding...</div>;
  }
//   성공이 아닐떄
  if (rt !== 200) {
    return (
      <div>
        <h2>
          {rt} {rtmsg}
        </h2>
        <button
          onClick={(e) => {
            dispatch(getList());
          }}
        >
          getList
        </button>
      </div>
    );
  }
  return <div>
      <h2>ReduxToolkitDepartment</h2>
      <table border = "1">
          <thead>
              <tr>
                  <th>id</th>
                  <th>dname</th>
                  <th>loc</th>
              </tr>
          </thead>
          <tbody>
              {item.map((v,i) => {
                  return (
                    <tr key={i}>
                        <td>{v.id}</td>
                        <td>{v.dname}</td>
                        <td>{v.loc}</td>
                    </tr>
                  );
              })}
          </tbody>
      </table>
  </div>;
};

export default ReduxToolkitDepartment;
