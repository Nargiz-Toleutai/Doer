import block from 'bem-cn-lite';
import React from 'react';

import { HealthHabitProps } from './types';
import { CreateHealthHabitModalImg } from '../../../Illustrations/CreateHabitModalPage/CreateHealthHabitModalImg';
import './HealthHabit.scss';
import { CustomHabitTabContainer } from '../CustomHabitTabContainer';

const b = block('health-habit')
export const HealthHabit: React.FC<HealthHabitProps> = ({ title, description}) => {
  return (
    <div className={b()}>
      <header className={b('title')}>{<title></title>}</header>
      <CreateHealthHabitModalImg/>

      <CustomHabitTabContainer scrollY={0}/>
    </div>
  )
}

/*
 <div className={b('description')}>
        A healthy lifestyle can help you feel better.
        It’s pretty easy to make a couple of small changes that can steer you in the direction of improved well-being.
      </div>
 */