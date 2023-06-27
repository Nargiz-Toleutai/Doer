// import block from 'bem-cn-lite';
import * as React from 'react';

import { AsidePanelMenuItemProps } from './types';
import { useAppDispatch, useAppSelector } from '../../store/mainStore/hooks/redux';
import { setCommonFilter, setPriorityFilter } from '../../pages/Home/store';
import { CommonFilter, PriorityFilter } from '../../pages/Home/store/types';
import { MenuButton } from '../AsidePanelMenuButton';

import './AsidePanelMenuItem.scss';
import '../AsidePanelMenuButton/AsidePanelMenuButton.scss';

// const b = block('aside-panel-menu-item');

export const AsidePanelMenuItem: React.FC<AsidePanelMenuItemProps> = ({ id, title, isPriority = false }) => {
  const { commonFilterId, priorityFilterId } = useAppSelector((state) => state.home);

  const selected = isPriority ? priorityFilterId === id : commonFilterId === id;
 
  const dispatch = useAppDispatch();

  const onSelect = React.useCallback(() => {
    if (isPriority) {
      return dispatch(setPriorityFilter(selected ? undefined : id as PriorityFilter));
    }
    dispatch(setCommonFilter(id as CommonFilter));
  }, [dispatch, id, isPriority, selected]);

  return (
    <MenuButton menuId={id} onClick={onSelect} title={title} selected={selected} showCounter/>
  );
};



