import block from 'bem-cn-lite';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './HabitItem.scss';
import { HabitItemModal } from './HabitItemModal/HabitItemModal';
import { HabitItemProps } from './types';
import { CheckBox } from '../CheckBox';
import { CreateHabitModal } from '../HabitsPanel/CreateHabitModal/CreateHabitModal';
import { CustomHabitTabComponent } from '../HabitsPanel/ModalHabits/CustomHabitTabComponent';
import { Icon } from '../Icon';
import { PanelButton } from '../PanelButton';


const b = block('habit-item');

export const HabitItem: React.FC<HabitItemProps> = ({habit,
                                                      remove, update,
                                                      checked,
                                                      onCheckedChange,
                                                      selected,
                                                      icon}) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const [showCustomHabit, setShowCustomHabit] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked, opening modal");
    setShowCustomHabit(true);
  }

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        remove(habit);
        setIsRemoved(true);
    }

    const handleUpdate = (event: React.MouseEvent) => {
      if (event.defaultPrevented) return;
        const newName = prompt('Update title:', habit.name) ?? '';
        if(newName) {
          update({...habit, name: newName});
          setIsUpdated(true);
        }
    }
  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e); // Call onCheckedChange if it's provided
    setIsRemoved(e.target.checked);
  };

  return (
    <div className={b({ selected: selected, removed: isRemoved })}>
      <Icon name={habit.icon} className={habit.icon} size={24}/>
      <PanelButton
        title={habit.name}
        icon={icon ? icon : ''}
        description={habit.frequency}
        id={habit.id}
        onClick={handleButtonClick}
        removed={isRemoved}
        update={isUpdated}
      />
      {showCustomHabit &&  <HabitItemModal/>}
      <CheckBox checked={isRemoved} onCheckedChange={handleCheckedChange}/>
    </div>
  );
};

//  <button onClick={handleRemove}>remove</button>
// onClick={handleUpdate}