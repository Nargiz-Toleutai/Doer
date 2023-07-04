import block from 'bem-cn-lite';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {CommonPanel, Filters} from './store/types';
import {StatisticsItemProps} from './types';
import {AsidePanelMenuCheckBox} from '../../components/AsidePanelMenuCheckBox';
import {AsidePanelMenuItem} from '../../components/AsidePanelMenuItem';
import {AsidePanelMenuItemProps} from '../../components/AsidePanelMenuItem/types';
import './Statistics.scss';


const b = block('statistics');

export const Statistics: React.FC = () => {
    const {t} = useTranslation();
    const links: AsidePanelMenuItemProps[] = useMemo(() => [
        {id: CommonPanel.Daily, title: t('Daily'), counter: {completed: 0, active: 0}},
        {id: CommonPanel.Week, title: t('Week'), counter: {completed: 0, active: 0}},
        {id: CommonPanel.Month, title: t('Month'), counter: {completed: 0, active: 0}},
    ], [t]);

    const additionalLinks: StatisticsItemProps[] = useMemo(() => [
        {id: Filters.ShowActive, title: t('Show Active') },
        {id: Filters.ShowCompleted, title: t('Show Completed') },
    ], [t]);
    return <div className={b()}>
        <h6>{t('Nargiza\'s')}</h6>
        <h3>{t('Statistics')}</h3>
        <nav>
            <ul className={b('main')}>
                {links.map((link) => (
                    <li key={link.id}>
                        <AsidePanelMenuItem {...link} />
                    </li>
                ))}
            </ul>
        </nav>
        <hr/>
        <h6>Filters</h6>
        <nav>
            <ul className={b('main')}>
                {additionalLinks.map((link) => (
                    <li key={link.id}>
                        <AsidePanelMenuCheckBox {...link} />
                    </li>
                ))}
            </ul>
        </nav>
    </div>
}