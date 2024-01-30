import { createSlice } from '@reduxjs/toolkit';

import { ToggleState } from './types';

const initialState: ToggleState = {
  isContentVisible: false,
};

export const slice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleContent: (state) => {
      state.isContentVisible = !state.isContentVisible;
    },
  },
});

export const { toggleContent } = slice.actions;
