import block from 'bem-cn-lite';
import React from 'react';

import {TransparentWideButtonProps} from './types';
import './TransparentWideButton.scss'

const b = block('transparent-wide-button');

export const TransparentWideButton: React.FC<TransparentWideButtonProps> = ({title}) => {
    return (
        <button type="submit" value={title} className={b()}>{title}</button>
    )
}
