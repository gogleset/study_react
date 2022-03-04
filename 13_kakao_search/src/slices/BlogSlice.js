import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
export const getBlogList = createAsyncThunk(
  "BLOG/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;
    if (payload.query) {
      try {
        const apiUrl = "https://dapi.kakao.com//v2/search/blog";
        result = await axios.get(apiUrl, {
          params: { query: payload.query, page: payload.page, size: 20 },
          headers: {
            Authorization: "KakaoAK c193e640c6f5851ca31109d7bd403779",
          },
        });
      } catch (err) {
        // 에러 발생시 `rejectWithValue()`함수에 에러 데이터를 전달하면 extraReducer
        // 의 rejected 함수가 호출된다.
        result = rejectWithValue(err.response);
      }
    }
    return result;
  }
);

/** Slice 정의 (Action함수 + Reducer의 개념) */
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    /** 상태값 구조 정의 (자유롭게 구성 가능함) */
    rt: null, // HTTP 상태 코드(200,404,500 등)
    rtmsg: null, // 에러메시지
    item: [], // Ajax 처리를 통해 수신된 데이터
    loading: false, // 로딩 여부
  },
  // 내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: {
    /** Ajax요청 준비 */
    [getBlogList.pending]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getBlogList.fulfilled]: (state, { meta, payload }) => {
      
      // 1페이지가 아닌 경우에는 리덕스에 저장되어 있는 현재 데이터에 새로 받아온 데이터를 병합하여 Ajax 결과를 재구성한다
      if (meta.arg.page > 1) {
        payload.data.documents = state.item.documents.concat(
          payload.data.documents
        );
      }
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getBlogList.rejected]: (state, { payload }) => {
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
export default blogSlice.reducer;
