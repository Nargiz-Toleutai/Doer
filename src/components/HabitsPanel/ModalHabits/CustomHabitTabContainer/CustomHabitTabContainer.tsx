import block from 'bem-cn-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CustomHabitTabContainerProps } from './types';
import { ColorfulWideButton } from '../../../ColorfulWideButton';
import { EmojiInput } from '../../../EmojiInput';
import { Input } from '../../../Input';
import './CustomHabitTabContainer.scss';
import { FrequencyContainer } from '../FrequencyContainer';
import { PomodoroContainer } from '../PomodoroContainer';
import { PriorityContainer } from '../PriorityContainer';
import { RemindersContainer } from '../RemindersContainer';


const b = block('custom-habit-tab-container')

export const CustomHabitTabContainer: React.FC<CustomHabitTabContainerProps> = ({ title, description, scrollY}) => {
  const width = Math.min(100 + scrollY / 5, 200);
  const {t} = useTranslation();
  return (
  <div className={b()} style={{ width: `${width}%` }}>
    <div className={b('description')}>Create your individual Habit for every occasion - health, study, relationships. You are not limited by anything!</div>
    <div className={b('title')}>Habit name</div>
    <div className={b('habit-name')}>
      <Input id='Name' title={'Name'} resetButton/>
      <EmojiInput id='Icon' title={t('Choose icon')} showPicker chevronDownButton/>
    </div>
    <PriorityContainer/>
    <FrequencyContainer/>
    <RemindersContainer/>
    <PomodoroContainer/>
    <ColorfulWideButton title={'Create habit'}/>
  </div>
  )
}

/*

const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

 <Input id='Name' title={t('Name')} resetButton/>
 <header className={b('title')}>Easy Ways to Cut Down on Sugar:</header>
  <ul className={b('description')}>
      {isExpanded ? (
        <>
          <li>Drink water instead of sugary drinks.</li>
          <li>When shopping, check the sugar amounts on food labels and look for products with less added sugars.</li>
        </>
      ) : (
        <>
          <li>Drink water instead of sugary drinks.</li>
          <li>When shopping, check the sugar amounts on food labels and look</li>
        </>
      )}
    </ul>

    <button className={b('button')} onClick={toggleExpanded}>
      {isExpanded ? 'Read less..,' : 'Read more...'}
    </button>
 */