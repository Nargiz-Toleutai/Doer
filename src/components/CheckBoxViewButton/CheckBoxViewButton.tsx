import block from 'bem-cn-lite';
import React from 'react';

import './CheckBoxViewButton.scss';
import { CheckBoxViewButtonProps } from './types';
import { Icon } from '../Icon';


const b = block('checkbox-view-button');

export const CheckBoxViewButton: React.FC<CheckBoxViewButtonProps> = ({ id, title, icon, name}) => {
  return (
      <span className={b(title)}>
        <Icon name={icon} size={24} />
        <div className={b('title')}>{name}</div>
      </span>
  );
};

/*
<label htmlFor={switchButton.id} className={b('label')}>
            <input
              id={switchButton.id}
              className={b('input')}
              type='radio'
              name={switchButton.title}
              value={value}
              checked={checked}
              onChange={(e) => setPriority(e.target.value as SwitchViewModeButton)}
            />
          </label>
          <div className={b('title')}>{switchButton.title}</div>





 return (
    <div className={b()}>
      <button className={b({ selected }, className)} onClick={onClick}>
        <Icon name={String(icon)} size={24} className={b('icon')} />
      </button>
      <button className={b({ selected }, className)} onClick={onClick}>
        <Icon name={String(icon)} size={24} className={b('icon')} />
      </button>
    </div>

    toggleViewMode ? <GridView /> : <ListView />


 */
