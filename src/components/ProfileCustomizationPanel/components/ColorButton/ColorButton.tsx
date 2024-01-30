import block from 'bem-cn-lite';
import React from 'react';

import { ColorProps } from './types';
import './ColorButton.scss';


const b = block('color-button');
export const ColorButton: React.FC<ColorProps> = ({ id, title, handleChange, checked }) => {
    return (
        <div className={b()}>
            <label className={b('label', {color: id.toString()})} >
                <input type='radio' className={b(title)} onChange={handleChange} checked={checked}/>
            </label>
        </div>

    )
}