import block from 'bem-cn-lite';
import React, {useState} from 'react';

import './SwitchButton.scss';
import {Icon} from '../Icon';

const b = block('switch-button');

export const SwitchButton: React.FC = () => {
    const [toggleViewMode, setToggleViewMode] = useState(false);

    const handleToggle = () => {
        setToggleViewMode(!toggleViewMode);
    };

    return (
        <label className={b()}>
            <input
                className={b('toggle-checkbox')}
                type="checkbox"
                checked={toggleViewMode}
                onChange={handleToggle}
            />
            <div className={b('toggle-switch')}>
                <span className={b('list')}>
                    <Icon name={'sale'} size={24} />
                    List
                </span>
                <span className={b('grid')}>
                    <Icon name={'grid'} size={24} />
                    Grid
                </span>
            </div>
        </label>
    );
};

/*
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
