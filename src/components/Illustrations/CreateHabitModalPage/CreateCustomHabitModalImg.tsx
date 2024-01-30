import block from 'bem-cn-lite';
import React from 'react';

import CustomHabitModalImage from '../../../assets/illustrations/CustomHabitModal.svg';
import { Svg } from '../../Svg';
import './CreateCustomHabitModalImg.scss';

const b = block('create-custom-habit-modal-page-img');

interface CreateCustomHabitModalImgProps {
  scrollY: number;
}
export const CreateCustomHabitModalImg: React.FC<CreateCustomHabitModalImgProps> = ({ scrollY}) => {
  const scale = Math.max(1 - scrollY / 1000, 0.5);
  return <div className={b()} style={{ transform: `scale(${scale})` }}>
    <Svg src={CustomHabitModalImage} />
  </div>
}

