import { createSlice } from '@reduxjs/toolkit';

import { ReminderState } from './types';

const initialState: ReminderState = {
  times: []
};

export const slice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    addTime: (state, action) => {
      state.times.push(action.payload);
    }
  }
});

export const { addTime} = slice.actions;

