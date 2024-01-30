import React from 'react';

import { IHabit } from '../../../../utils/types';


export interface HabitItemProps {
  // icon?: string,
  // id?: string;
  // title?: string;
  selected?: boolean;
  habit: IHabit;
  remove: (habit: IHabit) => void;
  update: (habit: IHabit) => void;
  showCheckBox?: boolean,
  checked?: boolean,
  onCheckedChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}