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
