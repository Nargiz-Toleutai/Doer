import block from 'bem-cn-lite';
import React from 'react';

import {WeekDaysCheckBoxButtonProps} from './types';
import './WeekDaysCheckBoxButton.scss';

const b = block('week-days-check-box-button');

export const WeekDaysCheckBoxButton: React.FC<WeekDaysCheckBoxButtonProps> = ({ checked, onCheckedChange, id, title, name}) => {
  return (
      <div className={b()}>
        <label className={b('label', {color: id.toString()})} >
          <input type='checkbox' className={b(title)} onChange={onCheckedChange} checked={checked}/>
          <div className={b('title')}>{name}</div>
        </label>
      </div>
  );
}


