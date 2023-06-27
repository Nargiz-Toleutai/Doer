import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {CommonColor, CommonTheme, ThemeState} from './types';

const initialState: ThemeState = {
    themeId: CommonTheme.System,
    colorId: CommonColor.Red,
};

export const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state: ThemeState, action: PayloadAction<CommonTheme>) => {
            state.themeId = action.payload;
        },
        setColor: (state: ThemeState, action: PayloadAction<CommonColor>) => {
            state.colorId = action.payload;
        },
    },
});

export const {setTheme, setColor} = slice.actions;
