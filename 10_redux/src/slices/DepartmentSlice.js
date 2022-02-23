import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// 비동기 처리 함수 구현
// Payload는 이 함수를 호출할 때 전달되는 파라미터.
export const getList = createAsyncThunk("department/getList", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        result = await axios.get("http://localhost:3001/department");
    } catch (error) {
        // 에러 발생 시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
        result = rejectWithValue(error.response);
    }

    return result;
});


// slice 정의(Action 함수 + Reducer의 개념)
export const departmentSlice = createSlice({
    name: 'departments',
    initialState: {
        rt: null,    //HTTP 상태 코드(200, 404, 500 등)
        rtmsg: null, //에러메세지
        item: [],    //Ajax 처리를 통해 수신된 데이터
        loading:false, //로딩 여부
    },

    // 내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
    reducers: {},
    // 외부 action 및 비동기 action
    extraReducers:{
        [getList.pending]: (state, {payload}) => {
            return {...state, loading: true}
        },
        [getList.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false
            }
        },
        [getList.rejected]: (state, {payload}) => {
            return{
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false
            }
        }
    },
});

// 리듀서 객체 보내기
export default departmentSlice.reducer;