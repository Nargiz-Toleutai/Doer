import block from 'bem-cn-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';

import './HabitsAsidePanel.scss';

const b = block('habits-aside-panel');

export const HabitsAsidePanel: React.FC = () => {
    const {t} = useTranslation();
    
    return (
        <div className={b()}>
            <h3>{t('Daily Tasks')}</h3>

        </div>
    );
};

{/*<StatisticsPanel/>*/}
{/*<HabitItems />*/}