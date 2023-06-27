import { CommonColor, CommonTheme  } from '../../../../store/themeStore/types';
import darkBlueFrame from '../../../../assets/themeFrames/darkBlue.svg';
import darkGreenFrame from '../../../../assets/themeFrames/darkGreen.svg';
import darkRedFrame from '../../../../assets/themeFrames/darkRed.svg';
import darkVioletFrame from '../../../../assets/themeFrames/darkViolet.svg';
import darkYellowFrame from '../../../../assets/themeFrames/darkYellow.svg';
import lightBlueFrame from '../../../../assets/themeFrames/lightBlue.svg';
import lightGreenFrame from '../../../../assets/themeFrames/lightGreen.svg';
import lightRedFrame from '../../../../assets/themeFrames/lightRed.svg';
import lightVioletFrame from '../../../../assets/themeFrames/lightViolet.svg';
import lightYellowFrame from '../../../../assets/themeFrames/lightYellow.svg';

export const backgroundMap: Record<CommonColor, Record<CommonTheme, string>> = {
    [CommonColor.Red]: {
        [CommonTheme.Light]: lightRedFrame,
        [CommonTheme.Dark]: darkRedFrame,
        [CommonTheme.System]: '',
    },
    [CommonColor.Green]: {
        [CommonTheme.Light]: lightGreenFrame,
        [CommonTheme.Dark]: darkGreenFrame,
        [CommonTheme.System]: '',
    },
    [CommonColor.Blue]: {
        [CommonTheme.Light]: lightBlueFrame,
        [CommonTheme.Dark]: darkBlueFrame,
        [CommonTheme.System]: '',
    },
    [CommonColor.Yellow]: {
        [CommonTheme.Light]: lightYellowFrame,
        [CommonTheme.Dark]: darkYellowFrame,
        [CommonTheme.System]: '',
    },
    [CommonColor.Violet]: {
        [CommonTheme.Light]: lightVioletFrame,
        [CommonTheme.Dark]: darkVioletFrame,
        [CommonTheme.System]: '',
    },
}