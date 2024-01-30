import block from 'bem-cn-lite';
import React, {useMemo, useState} from 'react';
import './PrioritySwitchButton.scss';
import {useTranslation} from 'react-i18next';

import {PriorityFilter} from '../../pages/Home/store/types';
import {AsidePanelMenuItemProps} from '../AsidePanelMenuItem/types';
import {RadioButton} from '../RadioButton';

const b = block('priority-switch-button');

export const PrioritySwitchButton: React.FC = () => {
  const { t } = useTranslation();

  const [priority, setPriority] = useState<PriorityFilter | null>(PriorityFilter.High);
  const handleSetPriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPriority = event.target.value as PriorityFilter;
    setPriority(selectedPriority);
  }

  const switchButtons: AsidePanelMenuItemProps[] = useMemo(() => [
    { id: PriorityFilter.High, title: t('High'), icon: t('priority-high') as string},
    { id: PriorityFilter.Medium, title: t('Medium'),  icon: t('priority-medium') as string},
    { id: PriorityFilter.Low, title: t('Low'), icon: t('priority-low') as string},
  ], [t]);


  return (
     <>
       <div className={b('slider', `position-${priority ? priority.toLowerCase() : 'high'}`)} />
        {switchButtons.map((switchButton) => (
          <RadioButton
            key={switchButton.id}
            checked={priority === switchButton.id}
            value={switchButton.id}
            icon={switchButton.icon}
            onChange={handleSetPriority}
            title={switchButton.title} disabled/>
        ))}
     </>
  );
};





/*
export const PrioritySwitchButton: React.FC = () => {
  const { t } = useTranslation();
  const plateRef = React.useRef<HTMLDivElement>(null);
  const optionRef = React.useRef<HTMLLabelElement | null>(null);

  const [priority, setPriority] = useState<PriorityFilter | null>(null);

  const handleSetPriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPriority = event.target.value as PriorityFilter;
    setPriority(selectedPriority);
  }

  const handleCheckedOptionMount: React.Ref<HTMLLabelElement> = React.useCallback(
    (checkedOptionNode: HTMLLabelElement | null) => {
      if (!checkedOptionNode) {
        return;
      }

      const plateNode = plateRef.current;

      if (!plateNode) {
        return;
      }

      const uncheckedOptionNode = optionRef.current;

      if (uncheckedOptionNode && uncheckedOptionNode !== checkedOptionNode) {
        const setPlateStyle = (node: HTMLElement) => {
          plateNode.style.left = `${node.offsetLeft}px`;
          plateNode.style.width = `${node.offsetWidth}px`;
        };

        setPlateStyle(uncheckedOptionNode);

        plateNode.hidden = false;

        setPlateStyle(checkedOptionNode);
      }

      optionRef.current = checkedOptionNode;
      console.log({a:optionRef.current })
    },
    [],
  );

  const handlePlateTransitionEnd: React.TransitionEventHandler<HTMLDivElement> =
    React.useCallback((event) => {
      event.currentTarget.hidden = true;
    }, []);


  const switchButtons: AsidePanelMenuItemProps[] = useMemo(() => [
    { id: PriorityFilter.High, title: t('High'), icon: t('priority-high') as string},
    { id: PriorityFilter.Medium, title: t('Medium'),  icon: t('priority-medium') as string},
    { id: PriorityFilter.Low, title: t('Low'), icon: t('priority-low') as string},
  ], [t]);

  return (
    <div className={b()}>
      <div
        ref={plateRef}
        className={b('plate')}
        onTransitionEnd={handlePlateTransitionEnd}
        hidden
      />
      {switchButtons.map((switchButton) => (
        <div className={b('button')} key={switchButton.id}>
          <RadioButton
            checked={priority === switchButton.id}
            value={switchButton.id}
            icon={switchButton.icon}
            onChange={handleSetPriority}
            title={switchButton.title}
            ref={priority === switchButton.id ? handleCheckedOptionMount : undefined}
           disabled={priority === switchButton.id}/>
        </div>
      ))}
    </div>
  );
};



 */

