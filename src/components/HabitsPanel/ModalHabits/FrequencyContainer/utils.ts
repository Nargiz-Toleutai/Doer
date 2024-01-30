import everyDayDarkBlue from '../../../../assets/frequency/everyDayDarkBlue.svg';
import everyDayDarkGreen from '../../../../assets/frequency/everyDayDarkGreen.svg';
import everyDayDarkRed from '../../../../assets/frequency/everyDayDarkRed.svg';
import everyDayDarkViolet from '../../../../assets/frequency/everyDayDarkViolet.svg';
import everyDayDarkYellow from '../../../../assets/frequency/everyDayDarkYellow.svg';
import everyDayLightBlue from '../../../../assets/frequency/everyDayLightBlue.svg';
import everyDayLightGreen from '../../../../assets/frequency/everyDayLightGreen.svg';
import everyDayLightRed from '../../../../assets/frequency/everyDayLightRed.svg'
import everyDayLightViolet from '../../../../assets/frequency/everyDayLightViolet.svg';
import everyDayLightYellow from '../../../../assets/frequency/everyDayLightYellow.svg';
import oneDayDarkBlue from '../../../../assets/frequency/oneDayDarkBlue.svg';
import oneDayDarkGreen from '../../../../assets/frequency/oneDayDarkGreen.svg';
import oneDayDarkRed from '../../../../assets/frequency/oneDayDarkRed.svg';
import oneDayDarkViolet from '../../../../assets/frequency/oneDayDarkViolet.svg';
import oneDayDarkYellow from '../../../../assets/frequency/oneDayDarkYellow.svg';
import oneDayLightBlue from '../../../../assets/frequency/oneDayLightBlue.svg';
import oneDayLightGreen from '../../../../assets/frequency/oneDayLightGreen.svg';
import oneDayLightRed from '../../../../assets/frequency/oneDayLightRed.svg'
import oneDayLightViolet from '../../../../assets/frequency/oneDayLightViolet.svg';
import oneDayLightYellow from '../../../../assets/frequency/oneDayLightYellow.svg';
import { CommonColor, CommonTheme  } from '../../../../store/themeStore/types';


export const backgroundMapOneDay: Record<CommonColor, Record<CommonTheme, string>> = {
  [CommonColor.Red]: {
    [CommonTheme.Light]: oneDayLightRed,
    [CommonTheme.Dark]: oneDayDarkRed,
    [CommonTheme.System]: '',
  },
  [CommonColor.Green]: {
    [CommonTheme.Light]: oneDayLightGreen,
    [CommonTheme.Dark]: oneDayDarkGreen,
    [CommonTheme.System]: '',
  },
  [CommonColor.Blue]: {
    [CommonTheme.Light]: oneDayLightBlue,
    [CommonTheme.Dark]: oneDayDarkBlue,
    [CommonTheme.System]: '',
  },
  [CommonColor.Yellow]: {
    [CommonTheme.Light]: oneDayLightYellow,
    [CommonTheme.Dark]: oneDayDarkYellow,
    [CommonTheme.System]: '',
  },
  [CommonColor.Violet]: {
    [CommonTheme.Light]: oneDayLightViolet,
    [CommonTheme.Dark]: oneDayDarkViolet,
    [CommonTheme.System]: '',
  },
}

export const backgroundMapEveryDay: Record<CommonColor, Record<CommonTheme, string>> = {
  [CommonColor.Red]: {
    [CommonTheme.Light]: everyDayLightRed,
    [CommonTheme.Dark]: everyDayDarkRed,
    [CommonTheme.System]: '',
  },
  [CommonColor.Green]: {
    [CommonTheme.Light]: everyDayLightGreen,
    [CommonTheme.Dark]: everyDayDarkGreen,
    [CommonTheme.System]: '',
  },
  [CommonColor.Blue]: {
    [CommonTheme.Light]: everyDayLightBlue,
    [CommonTheme.Dark]: everyDayDarkBlue,
    [CommonTheme.System]: '',
  },
  [CommonColor.Yellow]: {
    [CommonTheme.Light]: everyDayLightYellow,
    [CommonTheme.Dark]: everyDayDarkYellow,
    [CommonTheme.System]: '',
  },
  [CommonColor.Violet]: {
    [CommonTheme.Light]: everyDayLightViolet,
    [CommonTheme.Dark]: everyDayDarkViolet,
    [CommonTheme.System]: '',
  },
}