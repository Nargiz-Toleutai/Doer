import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { BackUpType, BackUpTypeState } from './types';

const initialState: BackUpTypeState = {
    sectionId: BackUpType.Export,
};

export const slice = createSlice({
    name: 'backUpButtonType',
    initialState,
    reducers: {
        setBackUpButton: (state: BackUpTypeState, action: PayloadAction<BackUpType>) => {
            state.sectionId = action.payload;
        }
    },
});

export const { setBackUpButton } = slice.actions;
