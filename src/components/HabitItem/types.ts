import { IHabit } from '../../../../utils/types';

export interface HabitItemProps {
  // icon?: string,
  // id?: string;
  // title?: string;
  habit: IHabit;
  remove: (habit: IHabit) => void;
  update: (habit: IHabit) => void;
}