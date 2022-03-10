import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllList } from "../slices/AllSlice";
import { Oval } from "react-loader-spinner";

import Meta from "../components/Meta";
import KoreaStateTable from "../components/KoreaStateTable";
import KoreaConfirmAccChart from "../components/KoreaConfirmAccChart";
import KoreaReleaseChart from '../components/KoreaReleaseAccChart'


import style from "../assets/scss/style.module.scss";

const KoreaStatePage = ({ query, sort }) => {
  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.all);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!loading) {
      dispatch(getAllList());
    }
  }, []);

  return (
    <div>
      <Meta
        title="국내 발생 현황 ::: 리액트 코로나19 상황판"
        description="React.js로 구현한 코로나 19의 국내 발생 현황 상황판입니다."
        keywords="React, 코로나19, Covid19, 국내발생현황"
      />
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
        <div className={style.section}>
          {item.result && (
            <div>
              <KoreaStateTable accState={item.result.accState}/>
              <KoreaConfirmAccChart confirmState={item.result.confirmState}/>
              <KoreaReleaseChart confirmState={item.result.releaseState}/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KoreaStatePage;
