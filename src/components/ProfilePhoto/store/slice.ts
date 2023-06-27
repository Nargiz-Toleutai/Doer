import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AvatarState } from './types';

const initialState: AvatarState = {
  avatarUrl: localStorage.getItem('avatar') ?? '',
};

export const slice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatarUrl = action.payload;
      localStorage.setItem('avatar', action.payload);
    },
  },
});

export const { updateAvatar } = slice.actions;


