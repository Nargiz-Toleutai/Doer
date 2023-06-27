import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { POMODORO_DURATION_LOCAL_STORAGE_KEY, POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY, POMODORO_START_TIME_LOCAL_STORAGE_KEY } from './constants';
import { PomodoroStartPayload, PomodoroState } from './types';
import { getNumberFromLocalStorage } from '../../../utils/localStorage';

const initialState: PomodoroState = {
    startTime: getNumberFromLocalStorage(POMODORO_START_TIME_LOCAL_STORAGE_KEY),
    pauseTime: getNumberFromLocalStorage(POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY),
    duration: getNumberFromLocalStorage(POMODORO_DURATION_LOCAL_STORAGE_KEY), 
};

export const slice = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        startPomodoro: (state: PomodoroState, action: PayloadAction<PomodoroStartPayload>) => {
            state.startTime = action.payload.startTime ?? Date.now();
            state.duration = action.payload.duration;
            state.pauseTime = null
        },
        pausePomodoro: (state: PomodoroState) => {
            state.pauseTime =  Date.now();
        },
        resetPomodoro: (state: PomodoroState) => {
            state.startTime = null;
            state.pauseTime = null;
            state.duration = null;
        },
        resumePomodoro: (state: PomodoroState) => {
            if(!state.pauseTime || !state.startTime) return;
            state.startTime = Date.now() - (state.pauseTime - state.startTime);
            state.pauseTime = null;
        },
        stopPomodoro: (state: PomodoroState) => {
            state.startTime = null;
            state.duration = null;
        },
    },
});

export const { startPomodoro, stopPomodoro, pausePomodoro, resetPomodoro, resumePomodoro } = slice.actions;