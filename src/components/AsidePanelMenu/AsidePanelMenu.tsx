import block from 'bem-cn-lite';
import React, { useMemo } from 'react';

import { AsidePanelMenuItem } from './AsidePanelMenuItem';
import { AsidePanelMenuItemProps } from './types';
import './AsidePanelMenu.scss';
import { CommonFilter, PriorityFilter } from '../../pages/Home/store/types';
import { HomePageImg } from '../Illustrations';

const b = block('aside-panel-menu');

export const AsidePanelMenu: React.FC = () => {
    const links: AsidePanelMenuItemProps[] = useMemo(() => [
        { id: CommonFilter.Today, title: 'Today', counter: { completed: 0, active: 0 } },
        { id: CommonFilter.Tomorrow, title: 'Tomorrow', counter: { completed: 0, active: 0 } },
        { id: CommonFilter.Next7Days, title: 'Next 7 Days', counter: { completed: 0, active: 0 } },
        { id: CommonFilter.ThisMonth, title: 'This Month', counter: { completed: 0, active: 0 } },
        { id: CommonFilter.Completed, title: 'Completed', counter: { completed: 0, active: 0 } },
    ], []);

    const additionalLinks: AsidePanelMenuItemProps[] = useMemo(() => [
        { id: PriorityFilter.High, title: 'High', counter: { completed: 0, active: 0 }},
        { id: PriorityFilter.Medium, title: 'Medium', counter: { completed: 0, active: 0 }},
        { id: PriorityFilter.Low, title: 'Low', counter: { completed: 0, active: 0 }},
    ], []);

    return (
        <div className={b()}>
            <h6>Nargiza&rsquo;s</h6>
            <h3>Habits</h3>
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
            <h6>Priority</h6>
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