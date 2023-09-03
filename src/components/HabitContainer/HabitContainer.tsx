import block from 'bem-cn-lite';
import React from 'react';

import { IHabit } from '../../../../utils/types';
import { habitAPI } from '../../services/HabitService';
import { HabitItem } from '../HabitItem';

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

  const [createHabit, { isLoading: isCreating, isError, error }] = habitAPI.useCreateHabitMutation();

  const handleCreate = async () => {
    const title = prompt()
    const newHabit: IHabit = {
      id: Date.now(),
      body: title,
      title: title,
      habits: ['example habit'],
      name: 'example name',
      priority: PriorityFilter.High,
      data: 'example data',
      frequency: 1,
      frequencyDays: {
        Monday: true,
        Tuesday: false,
        Wednesday: true,
        Thursday: false,
        Friday: true,
        Saturday: false,
        Sunday: true,
      },
    }
    await createHabit(newHabit);
  }


  const handleRemove = (habit: IHabit) => {
    deleteHabit(habit)
  }

  const handleUpdate = (habit: IHabit) => {
    updateHabit(habit)
  }

  return (
    <div className={b()}>
      <div className={b('list')}>

        {habits?.map(habit =>
          <HabitItem remove={handleRemove} update={handleUpdate} key={habit.id} habit={habit}/>
        )}
      </div>
      <button onClick={handleCreate}>Add new post</button>
    </div>
  );
};
/*

 */