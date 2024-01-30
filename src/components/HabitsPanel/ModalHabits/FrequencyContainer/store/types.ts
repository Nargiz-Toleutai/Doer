import { CommonColor } from '../../../../../store/themeStore/types';

export enum FrequencyDays {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}

export enum Frequency {
  InOneDay = 'one day',
  EveryDay = 'every day',
}
export interface FrequencyDaysButtonProps {
  // title: string,
  // name: string,
  // handleChange: VoidFunction,
  // themeId: CommonTheme,
  colorId: CommonColor,
  frequency?: Frequency.InOneDay | Frequency.EveryDay,
  // checked: boolean,
  // frequencyDays: FrequencyDays.Monday |
  //                FrequencyDays.Tuesday |
  //                FrequencyDays.Wednesday |
  //                FrequencyDays.Thursday |
  //                FrequencyDays.Friday |
  //                FrequencyDays.Saturday |
  //                FrequencyDays.Sunday;
}

export interface FrequencyDaysState {
  dayId: FrequencyDays,
  frequencyId: Frequency,
}

/*
export enum CommonTheme {
    Light = 'light',
    Dark = 'dark',
    System = 'system',
}

export enum CommonColor {
    Red = 'red',
    Yellow = 'yellow',
    Green = 'green',
    Blue = 'blue',
    Violet = 'violet',
}

export interface ThemeState {
    themeId: CommonTheme,
    colorId: CommonColor;
}

 */