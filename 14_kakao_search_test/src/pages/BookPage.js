import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBookList } from "../slices/BookSlice";
import { Oval } from "react-loader-spinner";
import { expensive, cheap } from "../slices/BookSlice";

import ListView from "../components/ListView";
import style from "../assets/scss/style.module.scss";

const BookPage = ({ query, sort }) => {
  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => {
    return state.book;
  });

  // console.log("APP.JS에서 파라미터로 받은 query 데이터입니다 ::: " + query);
  console.log("APP.JS에서 파라미터로 받은 sort 데이터입니다 ::: " + sort);
  // console.log("STORE에서 구독한 데이터입니다 ::: " + item);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  
  React.useEffect(() => {
    // 쿼리 값이 변경될 때만 실행되는 hook을 통해 액션함수 디스팻치
    console.log("query 데이터 변동 감지! ::: " + query);
    if (sort === undefined) {
      dispatch(getBookList(query)); 
    } else if (sort === "expensive") {
      // 정렬값이 들어왔을 때 감지해서 실행되는 hook을 통해 액션함수 디스팻치
      // console.log("SORT 데이터 변동 감지! ::: " + sort);
      dispatch(expensive(item));
    } else if (sort === "cheap") {
      // console.log("SORT 데이터 변동 감지! ::: " + sort);
      dispatch(cheap(item));
    }
  }, [dispatch, query, sort]);

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
        <ListView documents={item} thumb={true} />
      )}
    </div>
  );
};

export default BookPage;
