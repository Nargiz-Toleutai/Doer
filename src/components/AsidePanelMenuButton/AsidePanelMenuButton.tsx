import block from 'bem-cn-lite';
import React from 'react';

import { MenuButtonProps } from './types';
import { Counter } from '../Counter';
import '../Counter/Counter.scss';
import './AsidePanelMenuButton.scss';
import { Icon } from '../Icon';
import '../Icon/Icon.scss';

const b = block('menu-button');

export const MenuButton = <T,>({ menuId, title, selected, showCounter = false, icon, onClick, className }: MenuButtonProps<T>): JSX.Element => {
    return (
        <button className={b({ selected }, className)} onClick={onClick}>
            {icon && <Icon name={String(icon)} size={24} className={b('icon')} />}
            <div id={String(menuId)} className={b('item')}>
                {title}
            </div>
            {showCounter && <Counter completed={8} active={12} />}
        </button>
    );
};

