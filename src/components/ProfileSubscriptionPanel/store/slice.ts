import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PlanType, PlanTypeState } from './types';

const initialState: PlanTypeState = {
    sectionId: PlanType.Free,
};

export const slice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        setPlan: (state: PlanTypeState, action: PayloadAction<PlanType>) => {
            state.sectionId = action.payload;
        }
    },
});

export const { setPlan } = slice.actions;
