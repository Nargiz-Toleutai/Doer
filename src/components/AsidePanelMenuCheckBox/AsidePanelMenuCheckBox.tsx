// import block from 'bem-cn-lite';
import * as React from 'react';
import {useState} from 'react';

import { AsidePanelMenuItemProps } from './types';
import { setCommon, setFilters } from '../../pages/Statistics/store';
import {CommonPanel, Filters} from '../../pages/Statistics/store/types';
import { useAppDispatch, useAppSelector } from '../../store/mainStore/hooks/redux';
import { MenuButton } from '../AsidePanelMenuButton';



export const AsidePanelMenuCheckBox: React.FC<AsidePanelMenuItemProps> = ({ id, title, isFilters = false }) => {
    const [checked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <MenuButton menuId={id}  title={title}  showCheckBox onCheckedChange={handleChange} checked={checked}/>
    );
};



