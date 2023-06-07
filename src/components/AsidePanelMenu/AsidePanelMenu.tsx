import block from 'bem-cn-lite';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AsidePanelMenuItem } from './AsidePanelMenuItem';
import { AsidePanelMenuItemProps } from './types';
import './AsidePanelMenu.scss';
import { CommonFilter, PriorityFilter } from '../../pages/Home/store/types';
import { HomePageImg } from '../Illustrations';

const b = block('aside-panel-menu');

export const AsidePanelMenu: React.FC = () => {
    const { t } = useTranslation();
    const links: AsidePanelMenuItemProps[] = useMemo(() => [
        { id: CommonFilter.Today, title: t('Today'), counter: { completed: 0, active: 0 } },
        { id: CommonFilter.Tomorrow, title: t('Tomorrow'), counter: { completed: 0, active: 0 } },
        { id: CommonFilter.Next7Days, title: t('Next 7 Days'), counter: { completed: 0, active: 0 } },
        { id: CommonFilter.ThisMonth, title: t('This Month'), counter: { completed: 0, active: 0 } },
        { id: CommonFilter.Completed, title: t('Completed'), counter: { completed: 0, active: 0 } },
    ], [t]);

    const additionalLinks: AsidePanelMenuItemProps[] = useMemo(() => [
        { id: PriorityFilter.High, title: t('High'), counter: { completed: 0, active: 0 }},
        { id: PriorityFilter.Medium, title: t('Medium'), counter: { completed: 0, active: 0 }},
        { id: PriorityFilter.Low, title: t('Low'), counter: { completed: 0, active: 0 }},
    ], [t]);

    return (
        <div className={b()}>
            <h6>{t('Nargiza&rsquo;s')}</h6>
            <h3>{t('Habits')}</h3>
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
            <h6>{t('Priority')}</h6>
            <nav>
                <ul className={b('main')}>
                {additionalLinks.map((link) => (
                    <li key={link.id}>
                        <AsidePanelMenuItem {...link} isPriority />
                    </li>
                ))}
                </ul>
            </nav>
            <HomePageImg/>
        </div>
    );
};