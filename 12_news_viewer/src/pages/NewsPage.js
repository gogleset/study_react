import React from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/NewsSlice";
import { Oval } from "react-loader-spinner";

import Top from "../components/Top";
import NewsList from "../components/NewsList";


import style from "../assets/scss/style.module.scss";

const NewsPage = () => {
  // URL 파라미터 받기
  let { category } = useParams();

  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.news);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  // targetDt 값이 변경될 때만 실행되는 hook 정의
  React.useEffect(() => {
    console.clear();
    // 리덕스에 정의된 액션함수 디스패치(호출)

    dispatch(getList(category));
  }, [dispatch, category]);

  return (
    <div>
      {/* 상단메뉴 */}
      <Top />

      {/* 로딩바 */}
      {loading && (
        <Oval
          color="#ff6600"
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

      {/* 결과값이 실패인 경우 에러메시지 표시, 성공인 경우 목록 컴포넌트 호출 */}
      {rt !== 200 ? (
          <div className={style.errmsg}>
              <h3>{rt} Error</h3>
              <p>{rtmsg}</p>
          </div>
      ) : (
          <NewsList articles={item.articles}/>
      )}
    </div>
  );
};

export default NewsPage;
