import { CommonColor, CommonTheme } from '../../../../../store/themeStore/types';
import { Frequency } from '../store/types';

export interface FrequencyTypeButtonProps {
  title: string,
  name: string,
  handleChange: VoidFunction,
  themeId: CommonTheme,
  colorId: CommonColor,
  checked: boolean,
  frequencyType: Frequency;
}


