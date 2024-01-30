import block from 'bem-cn-lite';
import React, { useState } from 'react';

import './HabitsPanel.scss';
import { CreateHabitModal} from './CreateHabitModal/CreateHabitModal';
import { HabitsPanelHeader } from './HabitsPanelHeader';
import { HabitsPanelStatistics } from './HabitsPanelStatistics';
import { IHabit } from '../../../../utils/types';
import { habitAPI } from '../../services/HabitService';
import { CircleAddButton } from '../CircleAddButton';
import { EmojiInput } from '../EmojiInput';
import { HabitContainer, PriorityFilter } from '../HabitContainer';

const b = block('habits-panel');

export const HabitsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={b()}>
          <HabitsPanelHeader/>
          <HabitsPanelStatistics/>
          <HabitContainer/>
          <CircleAddButton onClick={() => setIsOpen(true)}/>
          <CreateHabitModal open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
    );
};

 /*
 <StatisticsPanel/>
 <HabitItems />

 const [createHabit, { isLoading: isCreating, isError, error }] = habitAPI.useCreateHabitMutation();
  // const handleCreate = async () => {
  //   const title = prompt()
  //   const newHabit: IHabit = {
  //     id: Date.now(),
  //     body: title,
  //     title: title,
  //     habits: ['example habit'],
  //     name: 'example name',
  //     priority: PriorityFilter.High,
  //     data: 'example data',
  //     frequency: 1,
  //     frequencyDays: {
  //       Monday: true,
  //       Tuesday: false,
  //       Wednesday: true,
  //       Thursday: false,
  //       Friday: true,
  //       Saturday: false,
  //       Sunday: true,
  //     },
  //   }
  //   await createHabit(newHabit);
  // }
 */