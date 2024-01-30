import block from 'bem-cn-lite';
import React from 'react';

import CreateCustomHabitModalImage from '../../../assets/illustrations/CreateHealthHabitModal.svg';
import { Svg } from '../../Svg';
import './CreateCustomHabitModalImg.scss';

const b = block('create-health-habit-modal-page-img');

export const CreateHealthHabitModalImg: React.FC = () => {
  return <div className={b()}>
    <Svg src={CreateCustomHabitModalImage} />
  </div>
}

