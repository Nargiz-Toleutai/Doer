import block from 'bem-cn-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';

import './HabitItem.scss';
import { HabitItemProps } from './types';
import { Input } from '../Input';


const b = block('habit-item');

export const HabitItem: React.FC<HabitItemProps> = ({habit, remove, update}) => {
    const { t } = useTranslation();

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
      event.preventDefault()
        remove(habit)
    }

    const handleUpdate = (event: React.MouseEvent) => {
      if (event.defaultPrevented) return;
        const title = prompt() ?? ''
        update({...habit, title})
    }

    return (

      <div className={b()} onClick={handleUpdate}>
          <form>
            <Input id={habit.name}/>
          </form>

           {habit.id} {habit.title}
          <button onClick={handleRemove}>Delete</button>

      </div>

    );
};

//  <EmojiInput  id={'Emoji'} title={t('Choose icon')} chevronDownButton/>