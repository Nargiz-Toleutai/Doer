import block from 'bem-cn-lite';
import React from 'react';

import { CounterProps } from './types';

const b = block('counter');

export const Counter: React.FC <CounterProps> = ({ completed, active }) => {
    return (
        <div className={b('value')}>
            <span>{completed}</span>
            <span>/</span>
            <span>{active}</span>
        </div>
    );
}
