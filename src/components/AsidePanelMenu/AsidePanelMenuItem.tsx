import block from 'bem-cn-lite';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { AsidePanelMenuItemProps } from './types';
import { setCommonFilter, setPriorityFilter } from '../../pages/Home/store/slice';
import { CommonFilter, PriorityFilter } from '../../pages/Home/store/types';
import { useAppSelector } from '../../store/hooks/redux';
import { Counter } from '../Counter';
import './AsidePanelMenuItem.scss';

const b = block('aside-panel-menu-item');

export const AsidePanelMenuItem: React.FC<AsidePanelMenuItemProps> = ({ id, title, isPriority = false }) => {
  const { commonFilterId, priorityFilterId } = useAppSelector((state) => state.home);

  const selected = isPriority ? priorityFilterId === id : commonFilterId === id;
 
  const dispatch = useDispatch();

  const onSelect = React.useCallback(() => {
    if (isPriority) {
      return dispatch(setPriorityFilter(selected ? undefined : id as PriorityFilter));
    }
    dispatch(setCommonFilter(id as CommonFilter));
  }, [dispatch, id, isPriority, selected]);

  return (
    <button className={b({ selected })} onClick={onSelect}>
      <div id={id} className={b('item')}>
        {title}
      </div>
      <Counter completed={8} active={12} />
    </button>
  );
};



