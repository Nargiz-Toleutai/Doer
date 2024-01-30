import block from 'bem-cn-lite';
import React, { MouseEvent, useCallback, useRef } from 'react';

import { InputProps } from './types';
import './Input.scss';
import { Icon } from '../Icon';


const b = block('input-component');

export const Input: React.FC<InputProps> = ({ id, title, resetButton, labelInside= false }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const reset = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if(!inputRef.current) return;

        inputRef.current.value = '';
    },[])

    return <div className={b()}>
        <label className={b('label', { inside: labelInside})}>
        {title}

        </label>
        <input className={b('input')} ref={inputRef}/>
        {resetButton && <button className={b('button')} onClick={reset}><Icon name='reset' size={24} className={b('delete-button')} /></button>}
    </div>
}

