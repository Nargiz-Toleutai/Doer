import block from 'bem-cn-lite';
import React from 'react';

import { IHabit } from '../../../../utils/types';
import { habitAPI } from '../../services/HabitService';
import { HabitItem } from '../HabitItem';
import './HabitContainer.scss';

const b = block('habit-container');

export enum PriorityFilter {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}

export const HabitContainer = () => {
  const {data: habits, isLoading} =  habitAPI.useFetchAllHabitsQuery(100);

  const [updateHabit] = habitAPI.useUpdateHabitMutation()
  const [deleteHabit] = habitAPI.useDeleteHabitMutation()

  const handleRemove = (habit: IHabit) => {
    deleteHabit(habit)
  }

  const handleUpdate = (habit: IHabit) => {
    updateHabit(habit)
  }

  return (
    <div className={b()}>
        {habits?.map(habit =>
          <HabitItem remove={handleRemove} update={handleUpdate} key={habit.id} habit={habit}/>
        )}
    </div>
  );
};
/*

 */