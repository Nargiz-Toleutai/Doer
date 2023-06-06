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
            const startTime = action.payload.startTime ?? Date.now();
            state.startTime = startTime;
            window.localStorage.setItem(POMODORO_START_TIME_LOCAL_STORAGE_KEY, String(startTime));
            state.duration = action.payload.duration;
            window.localStorage.setItem(POMODORO_DURATION_LOCAL_STORAGE_KEY, String(action.payload.duration));
            state.pauseTime = null
            window.localStorage.removeItem(POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY);
        },
        pausePomodoro: (state: PomodoroState) => {
            const pauseTime = Date.now();
            state.pauseTime = pauseTime;
            window.localStorage.setItem(POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY, String(pauseTime));
        },
        resetPomodoro: (state: PomodoroState) => {
            state.startTime = null;
            window.localStorage.removeItem(POMODORO_START_TIME_LOCAL_STORAGE_KEY);
            state.pauseTime = null;
            window.localStorage.removeItem(POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY);
            state.duration = null;
            window.localStorage.removeItem(POMODORO_DURATION_LOCAL_STORAGE_KEY);
        },
        resumePomodoro: (state: PomodoroState) => {
            if(!state.pauseTime || !state.startTime) return;
            const startTime = Date.now() - (state.pauseTime - state.startTime);
            state.startTime = startTime;
            window.localStorage.setItem(POMODORO_START_TIME_LOCAL_STORAGE_KEY, String(startTime));
            state.pauseTime = null;
            window.localStorage.removeItem(POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY);
        },
        stopPomodoro: (state: PomodoroState) => {
            state.startTime = null;
            window.localStorage.removeItem(POMODORO_START_TIME_LOCAL_STORAGE_KEY);
            state.duration = null;
            window.localStorage.removeItem(POMODORO_PAUSE_TIME_LOCAL_STORAGE_KEY);
        },
    },
});

export const { startPomodoro, stopPomodoro, pausePomodoro, resetPomodoro, resumePomodoro } = slice.actions;