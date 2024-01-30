import block from 'bem-cn-lite';
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useSwipeable } from 'react-swipeable';

import { CreateHabitModalProps } from './types';
import './CreateHabitModal.scss';
import {Icon} from '../../Icon';
import { CustomHabitTabComponent } from '../ModalHabits/CustomHabitTabComponent';
import { HealthHabit } from '../ModalHabits/HealthHabit/HealthHabit';
import { PriorityContainer } from '../ModalHabits/PriorityContainer';

const b = block('habit-modal');

export const CreateHabitModal: React.FC<CreateHabitModalProps> = ({ open, children, onClose, selected }) => {
  const portalElement = document.getElementById('portal');
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [<CustomHabitTabComponent key="customHabit"/>, <HealthHabit key='healthhabit'/>];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentTab((prev) => Math.min(prev + 1, tabs.length - 1)), // Используйте tabs.length для динамического определения количества табов
    onSwipedRight: () => setCurrentTab((prev) => Math.max(prev - 1, 0)), // Начало отсчета с 0
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  if (!open || !portalElement) return null;

  return ReactDom.createPortal(
    <div className={b()} >
      <div className={b('backdrop')}>
        <div className={b('modal')} {...handlers}>
          <div className={b('header')}>
          <div className={b('header-buttons')}>
            <button className={b('back-button')} onClick={onClose}><Icon size={24} name={'apple'} /></button>
            <div className={b('title-div')}>Title</div>
            <button className={b('close-button')} onClick={onClose}><Icon size={24} name={'plus-circle'} /></button>
          </div>
          <div className={b('tab-bar')}>
            {tabs.map((_, index) => (
              <button  className={b('tab-button', { selected: currentTab === index })}  key={index} onClick={() => setCurrentTab(index)}>
                TAB {index + 1}
              </button>
            ))}
          </div>
        </div>
          <div className={b('tabs-container')} >
          {tabs.map((TabComponent, index) => (
            <div
              key={index}
              className={b('tab-component')}
              style={{ transform: `translateX(${-currentTab * 100}%)` }}
            >
              {TabComponent}
            </div>
          ))}
        </div>

      </div>

      </div>
    </div>,
    portalElement
  );
}

