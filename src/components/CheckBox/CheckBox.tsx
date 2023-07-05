import block from 'bem-cn-lite';
import React from 'react';

import {CheckBoxProps} from './types';
import './CheckBox.scss';

const b = block('check-box');

export const CheckBox: React.FC<CheckBoxProps> = ({ checked, onCheckedChange}) => {
    return (
        <div className={b()}>
            <input
                type="checkbox"
                id={`checkBox-${Math.random()}`}
                name="checkBox"
                checked={checked}
                onChange={onCheckedChange}
            />
            <label htmlFor="checkBox"></label>
        </div>
    );
}


