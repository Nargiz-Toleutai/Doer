import block from 'bem-cn-lite';
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useTranslation } from 'react-i18next';

import { HabitItemEditComponentProps } from './types';
import { ColorfulWideButton } from '../../ColorfulWideButton';
import { EmojiInput } from '../../EmojiInput';
import { FrequencyContainer } from '../../HabitsPanel/ModalHabits/FrequencyContainer';
import { PomodoroContainer } from '../../HabitsPanel/ModalHabits/PomodoroContainer';
import { PriorityContainer } from '../../HabitsPanel/ModalHabits/PriorityContainer';
import { RemindersContainer } from '../../HabitsPanel/ModalHabits/RemindersContainer';
import { Input } from '../../Input';
import './HabitItemEditComponentModal.scss';

const b = block('habit-item-edit-component-modal');

export const HabitItemEditComponentModal: React.FC<HabitItemEditComponentProps> = ({ open }) => {
  const {t} = useTranslation();
  const portalElement = document.getElementById('portal');

  if (!open || !portalElement) return null;

  return ReactDom.createPortal(
    <div className={b()} >
      <div className={b('backdrop')}>
        <div className={b('modal')} >
          <div className={b('name')}>
            <Input id='Name' title={'Name'} resetButton/>
            <EmojiInput id='Icon' title={t('Choose icon')} showPicker chevronDownButton/>
          </div>
          <PriorityContainer/>
          <FrequencyContainer/>
          <RemindersContainer/>
          <PomodoroContainer/>
          <ColorfulWideButton title={'Create habit'}/>
        </div>
      </div>
    </div>,
    portalElement
  );
}

