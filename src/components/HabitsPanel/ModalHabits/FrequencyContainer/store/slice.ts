import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {Frequency, FrequencyDays, FrequencyDaysState} from './types';

const initialState: FrequencyDaysState = {
    dayId: FrequencyDays.Monday,
    frequencyId: Frequency.EveryDay,
};

export const slice = createSlice({
  name: 'frequencyDay',
  initialState,
  reducers: {
    setDay: (state: FrequencyDaysState, action: PayloadAction<FrequencyDays>) => {
      state.dayId = action.payload;
    },
    setFrequency: (state: FrequencyDaysState, action: PayloadAction<Frequency>) => {
      state.frequencyId = action.payload;
    }
  },
});

export const {setDay, setFrequency} = slice.actions;

/*
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

 */
