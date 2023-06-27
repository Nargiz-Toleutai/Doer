import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MainProfile, ProfileState } from './types';

const initialState: ProfileState = {
  sectionId: MainProfile.Personal,
};

export const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
      setMainProfile: (state: ProfileState, action: PayloadAction<MainProfile>) => {
        state.sectionId = action.payload;
      }
    },
});
  
export const { setMainProfile } = slice.actions;
