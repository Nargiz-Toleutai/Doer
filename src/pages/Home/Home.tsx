import block from 'bem-cn-lite';
import React, { useCallback } from 'react';

import {CommonFilter, PriorityFilter} from './store/types';
import { AsideHomePanelMenu } from '../../components/AsideHomePanelMenu';
import './Home.scss';
import { HabitsPanel } from '../../components/HabitsPanel';
import { useAppSelector } from '../../store/mainStore/hooks/redux';

const b = block('home');

export const Home: React.FC = () => {
    const common = useAppSelector((state) => state.home.commonFilterId);
    const priority = useAppSelector((state) => state.home.priorityFilterId)
    const currentSection = useCallback(() => {
        switch (common) {
            case CommonFilter.Today:
                return <HabitsPanel />;
        }
    }, [common])
    return <div className={b()}>
        <AsideHomePanelMenu />
        {currentSection()}
    </div>
}

// case CommonFilter.Tomorrow:
//     return <ProfileCustomizationPanel />;
// case CommonFilter.Next7Days:
//     return <ProfileSubscriptionPanel />;
// case CommonFilter.ThisMonth:
//     return <ProfileBackUpPanel />;
// case CommonFilter.Completed:
//     return <ProfileBackUpPanel />;


