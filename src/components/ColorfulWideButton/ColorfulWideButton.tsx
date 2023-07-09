import block from 'bem-cn-lite';
import React from 'react';

import {ColorfulWideButtonProps} from './types';
import './ColorfulWideButton.scss'

const b = block('colorful-wide-button');

export const ColorfulWideButton: React.FC<ColorfulWideButtonProps> = ({title}) => {
    return (
        <button type="submit" value={title} className={b()}>{title}</button>
    )
}
