import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CommonFilter, HomeState, PriorityFilter } from './types';

const initialState: HomeState = {
    commonFilterId: CommonFilter.Today,
};

export const slice = createSlice({
    name: 'home',
    initialState,
    reducers: {
      setCommonFilter: (state: HomeState, action: PayloadAction<CommonFilter>) => {
        state.commonFilterId = action.payload;
      },
      setPriorityFilter: (state: HomeState, action: PayloadAction<PriorityFilter | undefined>) => {
        state.priorityFilterId = action.payload;
      },
    },
});
  
export const { setCommonFilter, setPriorityFilter } = slice.actions;


