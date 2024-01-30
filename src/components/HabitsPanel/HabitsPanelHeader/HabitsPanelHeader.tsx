import block from 'bem-cn-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';

import './HabitsPanelHeader.scss';
import {Counter} from '../../Counter';
import {SwitchViewModeButton} from '../../SwitchViewModeButton';

const b = block('habits-panel-header');

export const HabitsPanelHeader: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={b()}>
          <div className={b('left')}>
            <h3>{t('Daily Tasks')}</h3>
            <Counter/>
          </div>
            <SwitchViewModeButton />
        </div>
    );
};
