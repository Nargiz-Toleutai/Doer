import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {View, ViewState} from './types';

const initialState: ViewState = {
    listId: View.List,
    gridId: View.Grid,
};

export const slice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    setViewList: (state: ViewState, action: PayloadAction<View.List>) => {
      state.listId = action.payload;
    },
    setViewGrid: (state: ViewState, action: PayloadAction<View.Grid>) => {
      state.gridId = action.payload;
    },
  },
});

export const {setViewList, setViewGrid} = slice.actions;
