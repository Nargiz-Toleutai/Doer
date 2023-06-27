import { CommonColor, CommonTheme } from '../../../../store/themeStore/types';

export interface ThemeProps {
    title: string,
    name: string,
    handleChange: VoidFunction,
    themeId: CommonTheme,
    colorId: CommonColor,
    checked: boolean,
}

