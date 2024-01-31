import block from 'bem-cn-lite';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PanelButtonProps } from './types';
import './PanelButton.scss';
import { Icon } from '../Icon';

import '../Icon/Icon.scss';



const b = block('panel-button');

export const PanelButton: React.FC<PanelButtonProps> = ({ id,
                                                          title,
                                                          selected,
                                                          removed,
                                                          update,
                                                          icon,
                                                          description,
                                                          onClick }) => {
  const { t } = useTranslation();
    return (
        <button className={b({ selected })} onClick={onClick}>
          <Icon name={String(icon)} size={24} className={b('icon')} />
          <div id={String(id)} className={b('item')}>
            <div className={b('title', { removed, update })}>{title}</div>
            <div className={b('description')}>{description} {t('streaks')}</div>
          </div>
        </button>
    );
};


