import block from 'bem-cn-lite';
import React from 'react';

import './BarItem.scss';
import { BarItemProps } from './types';

const b = block('bar-item');

export const BarItem: React.FC<BarItemProps> = ({ barPercentage}) => {
  return (
    <div className= {b()} style={{ height: barPercentage }}>
    </div>
  );
};
