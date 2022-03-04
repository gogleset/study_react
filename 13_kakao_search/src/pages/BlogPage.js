import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBlogList } from "../slices/BlogSlice";
import { Oval } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";

import ListView from "../components/ListView";
import style from "../assets/scss/style.module.scss";

const BlogPage = ({ query }) => {
  // 페이지 번호 상태값
  const [page, setPage] = React.useState(1);

  // 무한 스크롤 관련
  const [ref, inView] = useInView();

  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.blog);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("검색어 적용시 페이지 초기화");
    setPage(1);
  }, [query]);

  // 쿼리 값이 변경될 때만 실행되는 hook을 통해 액션함수 디스팻치
  React.useEffect(() => {
    if (!loading) {
      console.log("loding: " + loading);
      dispatch(getBlogList({ query: query, page: page }));
    }
  }, [dispatch, page]);

  React.useEffect(() => {
    // 사용자가 마지막 요소를 보고있고, 로딩중이 아니라면
    if (inView) {
      console.log("inview: " + inView);
      // console.log("ref: " + ref);
      setPage(page + 1);
    }
  }, [inView]);

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
        <ListView documents={item.documents} thumb={true} inview={ref} />
      )}
    </div>
  );
};

export default BlogPage;
