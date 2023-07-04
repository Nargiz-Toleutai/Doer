import block from 'bem-cn-lite';
import React from 'react';

import { PanelButtonProps } from './types';
import './PanelButton.scss';
import { Icon } from '../Icon';
import '../Icon/Icon.scss';

const b = block('panel-button');

export const PanelButton: React.FC<PanelButtonProps> = ({ id, title, selected, icon, description }) => {
    return (
        <button className={b({ selected })} >
            <Icon name={String(icon)} size={24} className={b('icon')} />
            <div id={String(id)} className={b('item')}>
                <div className={b('title')}>{title}</div>
                <div className={b('description')}>{description}</div>
            </div>
        </button>
    );
};

// onClick={onClick}

