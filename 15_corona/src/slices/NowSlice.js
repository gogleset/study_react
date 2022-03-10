import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
export const getNowList = createAsyncThunk(
  "now/GET_LIST",
  async (payload = null, { rejectWithValue }) => {
    let result = null;
    try {
      const apiUrl = "http://itpaper.co.kr/demo/covid19/now.php";
      result = await axios.get(apiUrl);
      console.log(result);
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** Slice 정의 (Action함수 + Reducer의 개념) */
const nowSlice = createSlice({
  name: "now",
  initialState: {
    /** 상태값 구조 정의 (자유롭게 구성 가능함) */
    rt: null, // HTTP 상태 코드(200,404,500 등)
    rtmsg: null, // 에러메시지
    item: [], // Ajax 처리를 통해 수신된 데이터
    loading: false, // 로딩 여부
  },
  // 내부 action 및 동기 action
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: {
    /** Ajax요청 준비 */
    [getNowList.pending]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getNowList.fulfilled]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.

      const { data } = payload;
      console.group("원본데이터");
      console.log(data);
      console.groupEnd();

      // 통신결과 중에서 그래프에 출력하기위한 값을 추려낸다.
      const result = { 지역명: [], 누적확진자: [] };

      data.state.forEach((v, i) => {
        result.지역명[i] = v.region;
        result.누적확진자[i] = v.confirmed;
      });

      // 누적확진자 값이 큰 순서대로 정렬하기 위한 순차정렬 알고리즘 적용
      for (let i = 0; i < result.누적확진자.length - 1; i++) {
        for (let j = i + 1; j < result.누적확진자.length; j++) {
          if (result.누적확진자[i] < result.누적확진자[j]) {
            const tmp1 = result.누적확진자[i];
            result.누적확진자[i] = result.누적확진자[j];
            result.누적확진자[j] = tmp1;

            const tmp2 = result.지역명[i];
            result.지역명[i] = result.지역명[j];
            result.지역명[j] = tmp2;
          }
        }
      }

      // Ajax 결과를 로그에 출력해보자 !!!
      const response = { 
        ...data,
        result: result,
      }
      console.group("데이터변환결과");
      console.log(response);
      console.groupEnd();

      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: response,
        loading: false,
      };
    },  
    /** Ajax 요청 실패 */
    [getNowList.rejected]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
  },
});

// 리듀서 객체 내보내기
export default nowSlice.reducer;
