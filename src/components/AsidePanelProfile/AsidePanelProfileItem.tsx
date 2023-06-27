// import block from 'bem-cn-lite';
import * as React from 'react';

import { AsidePanelProfileItemProps } from './types';
import './AsidePanelProfileItem.scss';
import { useAppDispatch, useAppSelector } from '../../store/mainStore/hooks/redux';
import { setMainProfile } from '../../pages/Profile/store';
import { MainProfile } from '../../pages/Profile/store/types';
import { MenuButton } from '../AsidePanelMenuButton';

// const b = block('aside-panel-profile-item');

export const AsidePanelProfileItem: React.FC<AsidePanelProfileItemProps> = ({ id, title, icon }) => {
  const { sectionId } = useAppSelector((state) => state.profile);

  const selected = sectionId === (id as MainProfile);

  const dispatch = useAppDispatch();

  const onSelect = React.useCallback(() => {
    dispatch(setMainProfile(id as MainProfile));
  }, [dispatch, id]);

  return (
    <MenuButton menuId={id} icon={icon} onClick={onSelect} title={title} selected={selected}/>
  )
};





