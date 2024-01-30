import block from 'bem-cn-lite';
import React, { useMemo, useState } from 'react';
import './SwitchViewModeButton.scss';
import { useTranslation } from 'react-i18next';

import { SwitchButtonProps, SwitchViewModeButtonProps, View } from './types';
import {CheckBoxViewButton} from '../CheckBoxViewButton';


const b = block('switch-view-mode-button');



export const SwitchViewModeButton: React.FC<SwitchButtonProps> = ({ checked }) => {
  const { t } = useTranslation();
  const [toggleViewMode, setToggleViewMode] = useState(false);

  const handleToggle = () => {
    setToggleViewMode(!toggleViewMode);
  };
    
    const switchViewButtons: SwitchViewModeButtonProps[] = useMemo(() => [
    { id: View.Grid, title: t('grid'), name: t('Grid'), icon: t('grid')},
    { id: View.List, title: t('list'), name: t('List'), icon: t('sale') },
  ], [t]);

    return (
      <div className={b()}>
        <label className={b('label')}>
          <input
            className={b('toggle-checkbox')}
            type="checkbox"
            checked={toggleViewMode}
            onChange={handleToggle}
          />
          <div className={b('toggle-switch')}>
              { switchViewButtons.map((switchViewButton) => (
                <CheckBoxViewButton {...switchViewButton} key={switchViewButton.id} />
              ))
            }
          </div>
        </label>
      </div>
    );
};





/*

export const SwitchViewModeButton: React.FC<SwitchButtonProps> = ({ changeView }) => {
  const { t } = useTranslation();
  const [toggleViewMode, setToggleViewMode] = useState(false);

  const handleToggle = () => {
    setToggleViewMode(!toggleViewMode);
  };

  const switchViewButtons: SwitchViewButtonProps[] = useMemo(() => [
    { id: View.Grid, title: t('grid'), name: t('Grid'), icon: t('grid')},
    { id: View.List, title: t('list'), name: t('List'), icon: t('sale') },
  ], [t]);

  return (
    <div className={b()}>
      <label className={b('label')}>
          <div className={b('switch-track', { checked: toggleViewMode })} onClick={handleToggle}>
          <div className={b('switch-thumb', { checked: toggleViewMode })} />
        </div>
        {changeView &&
          <div className={b('view-buttons')}>
            { switchViewButtons.map((switchViewButton) => (
              <CheckBoxViewButton {...switchViewButton} key={switchViewButton.id} />
            ))}
          </div>
        }
      </label>
    </div>
  );
};






 return (
    <div className={b()}>
      <button className={b({ selected }, className)} onClick={onClick}>
        <Icon name={String(icon)} size={24} className={b('icon')} />
      </button>
      <button className={b({ selected }, className)} onClick={onClick}>
        <Icon name={String(icon)} size={24} className={b('icon')} />
      </button>
    </div>

    toggleViewMode ? <GridView /> : <ListView />


 */
