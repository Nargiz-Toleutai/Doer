import block from 'bem-cn-lite';
import React from 'react';

import './HabitsPanel.scss';
import { HabitsPanelHeader } from './HabitsPanelHeader';
import { HabitsPanelStatistics } from './HabitsPanelStatistics';
import { CircleAddButton } from '../CircleAddButton';
import { HabitContainer } from '../HabitContainer';

const b = block('habits-panel');

export const HabitsPanel: React.FC = () => {
    
    return (
        <div className={b()}>
          <HabitsPanelHeader/>
          <HabitsPanelStatistics/>
          <HabitContainer/>
          <CircleAddButton/>
        </div>
    );
};

 /*
 <StatisticsPanel/>
 <HabitItems />
 */