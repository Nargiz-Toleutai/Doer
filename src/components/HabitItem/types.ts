import React from 'react';

import { Days, IHabit, PriorityFilter } from '../../../../utils/types';


export interface HabitItemProps {
  id?: string;
  name?: string;
  icon?: string,
  priority?: PriorityFilter.High | PriorityFilter.Medium | PriorityFilter.Low
  frequency?: number
  frequencyDays?: Days.Monday | Days.Tuesday | Days.Wednesday | Days.Thursday | Days.Friday | Days.Saturday | Days.Sunday;
  date?: Date;
  reminders?: boolean,
  selected?: boolean;
  habit: IHabit;
  create: (habit: IHabit) => void;
  remove: (habit: IHabit) => void;
  update: (habit: IHabit) => void;
  showCheckBox?: boolean,
  checked?: boolean,
  onCheckedChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}



