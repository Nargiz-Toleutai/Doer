import block from 'bem-cn-lite';
import React from 'react';

const b = block('home');

export const Home: React.FC = () => {
    return <div className={b()}>
    </div>
}