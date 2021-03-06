import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    // 이 모듈이 관리하고자하는 상태값들을 명시 변수1: 100,
    data: [],
  },
  reducers: {
    // 상태값을 갱신하기 위한 함수들을 구현
    // 컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 action.payload로 전달 된다.
    // initialState와 동일한 구조의 JSON을 리턴한다. 액션함수1: (state, action) => {...state}, 액션함수2: (state, action) => {...state}
    expensive: (state, action) => {
      const data = action.payload.documents;
      console.log(data);

      let result;

      result = data.sort((a, b) => a.price - b.price);
      console.log(result);

      return { data: result };
    },
    cheap: (state, action) => {
      console.log(state);
      console.log(action);
      const data = action.payload;
      console.log(data);

      return { data: data };
    },
  },
});
// 액션함수들 내보내기
export const { expensive, cheap } = sortSlice.actions;
// 리듀서 객체 내보내기
export default sortSlice.reducer;
