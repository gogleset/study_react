import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dayjs from "dayjs";

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
export const getList = createAsyncThunk(
  "GET_LIST",
  async (payload, { rejectWithValue }) => {
    if (payload === undefined) {
      payload = dayjs().add(-1, "d").format("YYYYMMDD");
    }
    const targetDt = payload.replaceAll("-", "");

    let result = null;

    try {
      const date = dayjs().add(-1, "d").format("YYYYMMDD");
      if (parseInt(targetDt) > parseInt(date)) {
        const err = new Error();
        err.response = {
          status: 400,
          statusText: "조회 가능한 날짜는 하루 전 까지만 가능합니다.",
        };
        throw err;
      }

      const apiUrl =
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
      result = await axios.get(apiUrl, {
        //   연동 규격서에 명시된 요청 변수들 정의
        params: {
          key: "d145fd2512b2f9be50d440aedfa4b898",
          targetDt: targetDt,
        },
      });
    } catch (err) {
      // 에러 발생시 `rejectWithValue()`함수에 에러 데이터를 전달하면 extraReducer
      // 의 rejected 함수가 호출된다.
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** Slice 정의 (Action함수 + Reducer의 개념) */
export const movieRankSlice = createSlice({
  name: "movieRank",
  initialState: {
    /** 상태값 구조 정의 (자유롭게 구성 가능함) */
    rt: null, // HTTP 상태 코드(200,404,500 등)
    rtmsg: null, // 에러메시지
    data: [], // Ajax 처리를 통해 수신된 데이터
    loading: false, // 로딩 여부
  },
  // 내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: {
    /** Ajax요청 준비 */
    [getList.pending]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getList.fulfilled]: (state, { payload }) => {
      // 필요한 경우 ajax 결과를 가공한다.
      const chartData = { movieNm: [], audiCnt: [] };

      payload.data.boxOfficeResult.dailyBoxOfficeList.forEach((v, i) => {
        chartData.movieNm[i] = v.movieNm;
        chartData.audiCnt[i] = v.audiCnt;
      });

      console.log(chartData);
      // 추려낸 값들을 통신 결과에 병합한다.
      payload.data.chartData = chartData;
      console.log(payload.data.chartData);
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        data: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getList.rejected]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload?.status ? payload.status : "500",
        rtmsg: payload?.statusText ? payload.statusText : "Server error",
        loading: false,
      }
    }
  },
});
// 리듀서 객체 내보내기
export default movieRankSlice.reducer;
