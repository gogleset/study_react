import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { counterSlice } from './slices/CounterSlice';
import { departmentSlice } from './slices/DepartmentSlice';
import { studentSlice } from './slices/StudentSlice';
import { professorSlice } from './slices/ProfessorSlice';

// Slice 오브젝트 참조 구문 명시 위치
const logger = createLogger();


const store = configureStore({
    // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야 한다.
    reducer:{
        counter: counterSlice.reducer,
        department: departmentSlice.reducer,
        student: studentSlice.reducer,
        professor: professorSlice.reducer
    },

    // 미들웨어를 사용하지 않을 경우 이 라인 생략가능
    // serializable은 비동기처리에 대한 것(?) 더 알아보자
    middleware: [...getDefaultMiddleware({serializableCheck: false}), logger],
    // redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
    devTools: true
});

export default store;