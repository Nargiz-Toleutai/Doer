import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { slice as homeSlice } from '../pages/Home/store/slice';
import { slice as pomodoroSlice } from '../pages/Pomodoro/store';

const rootReducer = combineReducers({
    [homeSlice.name]: homeSlice.reducer,
    [pomodoroSlice.name]: pomodoroSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

