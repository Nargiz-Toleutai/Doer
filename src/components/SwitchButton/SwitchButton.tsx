import block from 'bem-cn-lite';
import React from 'react';

import './SwitchButton.scss';
import { SwitchButtonProps } from './types';

const b = block('switch-button');
export const SwitchButton: React.FC<SwitchButtonProps> = ({ checked, onChange }) => {
  return (
    <div className={b()}>
      <label className={b('label')}>
        <input
          className={b('toggle-checkbox')}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={b('toggle-switch')}></div>
      </label>
    </div>
  );
};



