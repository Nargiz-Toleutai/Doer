import block from 'bem-cn-lite';
import React from 'react';

const b = block('pomodoro');

export const Pomodoro: React.FC = () => {
    return <div className={b()}>
    </div>
}