import block from 'bem-cn-lite';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './HabitItem.scss';
import { HabitItemEditComponentModal } from './HabitItemEditComponentModal/HabitItemEditComponentModal';
import { HabitItemProps } from './types';
import { CheckBox } from '../CheckBox';
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

  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

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
        onClick={handleOpenModal}
        removed={isRemoved}
        update={isUpdated}
      />
      { isOpen && (
        <div ref={modalRef}>
          <HabitItemEditComponentModal open={isOpen} onClose={handleCloseModal}/>
        </div>
      )}
      <CheckBox checked={isRemoved} onCheckedChange={handleCheckedChange}/>
    </div>
  );
};

//  <button onClick={handleRemove}>remove</button>
// onClick={handleUpdate}