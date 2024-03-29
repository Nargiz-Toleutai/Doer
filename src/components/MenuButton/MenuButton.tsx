import block from 'bem-cn-lite';
import React from 'react';

import { MenuButtonProps } from './types';
import {CheckBox} from '../CheckBox';
import { Counter } from '../Counter';
import '../Counter/Counter.scss';
import './MenuButton.scss';
import { Icon } from '../Icon';
import '../Icon/Icon.scss';


const b = block('menu-button');

export const MenuButton = <T,>({ menuId, title, selected, showCounter = false, icon, onClick, className, showCheckBox = false, onCheckedChange, checked }: MenuButtonProps<T>): JSX.Element => {
    return (
        <button className={b({ selected }, className)} onClick={onClick} tabIndex={1}>
            {icon && <Icon name={String(icon)} size={24} className={b('icon')} />}
            {title && <div id={String(menuId)} className={b('item')}>
                {title}
            </div>}
            {showCounter && <Counter completed={8} active={12} />}
            {showCheckBox && <CheckBox checked={checked} onCheckedChange={onCheckedChange}/>}
        </button>
    );
};

