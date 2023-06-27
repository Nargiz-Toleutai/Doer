import {CommonTheme} from '../store/themeStore/types';

export const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? CommonTheme.Dark : CommonTheme.Light;