import block from 'bem-cn-lite';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './HabitItem.scss';
import { HabitItemProps } from './types';
import { CheckBox } from '../CheckBox';
import { PanelButton } from '../PanelButton';


const b = block('habit-item');

export const HabitItem: React.FC<HabitItemProps> = ({habit, remove, update, checked, onCheckedChange, selected}) => {

  const [isRemoved, setIsRemoved] = useState(checked);


    // const handleRemove = (event: React.MouseEvent) => {
    //     event.stopPropagation()
    //   event.preventDefault()
    //     remove(habit)
    // }

    const handleUpdate = (event: React.MouseEvent) => {
      if (event.defaultPrevented) return;
        const title = prompt() ?? ''
        update({...habit, title})
    }
  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRemoved(e.target.checked);
    if(onCheckedChange) {
      onCheckedChange(e);
    }
  };

    return (
      <div className={b({ selected })}>
        <PanelButton title={habit.name} icon={'sale'} description={habit.frequency} id={habit.id} onClick={handleUpdate} removed={isRemoved}/>
        <CheckBox checked={isRemoved} onCheckedChange={handleCheckedChange}/>
      </div>
    );
};

//  <EmojiInput  id={'Emoji'} title={t('Choose icon')} chevronDownButton/>
