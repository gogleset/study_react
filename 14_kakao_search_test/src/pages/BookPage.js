import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBookList } from "../slices/BookSlice";
import { Oval } from "react-loader-spinner";
import { expensive, cheap } from "../slices/SortSlice";

import ListView from "../components/ListView";
import style from "../assets/scss/style.module.scss";

const BookPage = ({ query, sort }) => {
  let result = null;
  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => {
    result = state.book.item.documents;
    console.log(result);
    return state.book;
  });
  

  const {data} = useSelector((state) => {
    console.log(result);
    return state.sort;
  });

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();
  console.log("PAGE SORT = " + sort);

  //   쿼리 값이 변경될 때만 실행되는 hook을 통해 액션함수 디스팻치
  React.useEffect(() => {
    dispatch(getBookList(query));
  }, [dispatch, query]);

  // 정렬값이 들어왔을 때 감지해서 실행
  React.useEffect(() => {
    if (sort === "expensive") {
      dispatch(expensive(item));
    } else if (sort === "cheap") {
      dispatch(cheap(item));
    }
  }, [dispatch, sort]);

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
        <ListView documents={data} thumb={true} />
      )}
    </div>
  );
};

export default BookPage;
