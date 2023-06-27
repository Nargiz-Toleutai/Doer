import block from 'bem-cn-lite';
import React from 'react';

import { InputProps } from './types';
import './Input.scss';
import { Icon } from '../Icon';


const b = block('input-component');

export const Input: React.FC<InputProps> = ({ id, title, deleteButton }) => {
    return <div className={b()}>
        <label className={b('label')}>
        {title}
            <input className={b('input')} />
        </label>
        {deleteButton && <button className={b('button')}><Icon name='reset' size={24} className={b('delete-button')} /></button>}
    </div>
}

