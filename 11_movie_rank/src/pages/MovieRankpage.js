import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/MovieRankSlice";
import day from "dayjs";

import Top from "../components/Top";
import MovieRankList from "../components/MovieRankList";
import MovieRankChart from "../components/MovieRankChart";

// 로딩 컴포넌트
import { BallTriangle } from "react-loader-spinner";

import style from "../assets/scss/style.module.scss";

const MovieRankpage = () => {
  let { targetDt } = useParams();
  const { rt, rtmsg, data, loading } = useSelector((state) => {
    console.log(state);
    return state.movieRank;
  });
  console.log(rt);
  console.log(rtmsg);
  console.log(data);
  console.log(loading);
  const dispatch = useDispatch();

  if (!targetDt) {
    targetDt = day().add(-1, "d").format("YYYY-MM-DD");
  }

  React.useEffect(() => {
    console.clear();
    console.log(`React.useEffect => ${targetDt}`);
    dispatch(getList(targetDt));
  }, [dispatch, targetDt]);
  console.log(data.boxOfficeResult);
  return (
    <div>
      <Top targetDt={targetDt} />

      {loading && (
        <BallTriangle
          color="#00BFFF"
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

      {rt !== 200 ? (
        <div className={style.errmsg}>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <div>
          <MovieRankChart chartData={data.chartData} targetDt={targetDt} />
          <MovieRankList boxOfficeResult={data.boxOfficeResult} />
        </div>
      )}
    </div>
  );
};

export default MovieRankpage;
