import React from 'react';

import { IconProps } from './types';
import '../../assets/fonts/style.css';

export const Icon: React.FC <IconProps> = ({ name, size, className }) => {
    return (
        <i className={`icon icon-${name}${className ? ' ' + className : ''}`}></i>
    );
}
