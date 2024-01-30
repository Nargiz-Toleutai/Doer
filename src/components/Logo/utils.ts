import logoDarkBlue from '../../assets/logos/logo-dark-theme-blue.svg';
import logoDarkGreen from '../../assets/logos/logo-dark-theme-green.svg';
import logoDarkRed  from '../../assets/logos/logo-dark-theme-red.svg';
import logoDarkViolet from '../../assets/logos/logo-dark-theme-violet.svg';
import logoDarkYellow from '../../assets/logos/logo-dark-theme-yellow.svg';
import logoLightBlue from '../../assets/logos/logo-light-theme-blue.svg';
import logoLightGreen from '../../assets/logos/logo-light-theme-green.svg';
import logoLightRed from '../../assets/logos/logo-light-theme-red.svg';
import logoLightViolet from '../../assets/logos/logo-light-theme-violet.svg';
import logoLightYellow from '../../assets/logos/logo-light-theme-yellow.svg';
import  { CommonColor, CommonTheme }  from '../../store/themeStore/types';

export const backgroundMap: Record<CommonColor, Record<CommonTheme, string>> = {
    [CommonColor.Red]: {
        [CommonTheme.Light]: logoLightRed,
        [CommonTheme.Dark]: logoDarkRed,
        [CommonTheme.System]: '',
    },
    [CommonColor.Green]: {
        [CommonTheme.Light]: logoLightGreen,
        [CommonTheme.Dark]: logoDarkGreen,
        [CommonTheme.System]: '',
    },
    [CommonColor.Blue]: {
        [CommonTheme.Light]: logoLightBlue,
        [CommonTheme.Dark]: logoDarkBlue,
        [CommonTheme.System]: '',
    },
    [CommonColor.Yellow]: {
        [CommonTheme.Light]: logoLightYellow,
        [CommonTheme.Dark]: logoDarkYellow,
        [CommonTheme.System]: '',
    },
    [CommonColor.Violet]: {
        [CommonTheme.Light]: logoLightViolet,
        [CommonTheme.Dark]: logoDarkViolet,
        [CommonTheme.System]: '',
    },
}