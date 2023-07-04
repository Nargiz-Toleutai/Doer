import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CommonPanel, Filters, StatisticsState } from './types';

const initialState: StatisticsState = {
    commonPanelId: CommonPanel.Daily,
};

export const slice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        setCommon: (state: StatisticsState, action: PayloadAction<CommonPanel>) => {
            state.commonPanelId = action.payload;
        },
        setFilters: (state: StatisticsState, action: PayloadAction<Filters | undefined>) => {
            state.filtersId = action.payload;
        }
    },
});

export const { setCommon, setFilters } = slice.actions;
