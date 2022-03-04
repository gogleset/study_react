import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCafeList } from "../slices/CafeSlice";
import { Oval } from "react-loader-spinner";

import style from "../assets/scss/style.module.scss";

import ListView from "../components/ListView";

const CafePage = ({ query }) => {
  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.cafe);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  //   쿼리 값이 변경될 때만 실행되는 hook을 통해 액션함수 디스팻치
  React.useEffect(() => {
    dispatch(getCafeList(query));
  }, [dispatch, query]);

  return (
    <div>
      {/* 로딩바 */}
      {loading && (
        <Oval
          color="red"
          height={100}
          width={100}
          wrapperStyle={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: "-50px",
            marginTop: "-50px",
          }}
        />
      )}

      {/* 결과값이 실패인 경우 에러메세지 표시, 성공인 경우 목록 컴포넌트 호출 */}

      {rt !== 200 ? (
        <div className={style.errmsg}>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <ListView documents={item.documents} thumb={true} />
      )}
    </div>
  );
};

export default CafePage;
