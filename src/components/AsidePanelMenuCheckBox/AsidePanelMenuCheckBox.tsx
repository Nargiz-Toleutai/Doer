// import block from 'bem-cn-lite';
import * as React from 'react';
import {useState} from 'react';

import { AsidePanelMenuItemProps } from './types';
import { setCommon, setFilters } from '../../pages/Statistics/store';
import {CommonPanel, Filters} from '../../pages/Statistics/store/types';
import { useAppDispatch, useAppSelector } from '../../store/mainStore/hooks/redux';
import { MenuButton } from '../AsidePanelMenuButton';



export const AsidePanelMenuCheckBox: React.FC<AsidePanelMenuItemProps> = ({ id, title,  }) => {
    const [checked, setIsChecked] = useState(() => {
        const saved = localStorage.getItem(`checkBoxState-${id}`);
        return saved ? JSON.parse(saved) : false;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        // Сохраняем новое состояние в localStorage при каждом изменении
        localStorage.setItem(`checkBoxState-${id}`, JSON.stringify(e.target.checked));
    };

    return (
        <MenuButton menuId={id}  title={title}  showCheckBox onCheckedChange={handleChange} checked={checked}/>
    );
};



