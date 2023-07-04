import block from 'bem-cn-lite';
import React from 'react';

import { AsideHomePanelMenu } from '../../components/AsideHomePanelMenu';

import './Home.scss';
// import {useAppSelector} from "../../store/mainStore/hooks/redux";
// import {CommonFilter, PriorityFilter} from './store/types';
const b = block('home');

export const Home: React.FC = () => {
    // const common = useAppSelector((state) => state.home.commonFilterId);
    // const priority = useAppSelector((state) => state.home.priorityFilterId)
    // const currentSection = useCallback(() => {
    //     switch (common) {
    //         case CommonFilter.Today:
    //             return <ProfilePersonalPanel />;
    //         case MainProfile.Customization:
    //             return <ProfileCustomizationPanel />;
    //         case MainProfile.Subscription:
    //             return <ProfileSubscriptionPanel />;
    //         case MainProfile.Backup:
    //             return <ProfileBackUpPanel />;
    //     }
    // }, [sectionId])
    return <div className={b()}>
        <AsideHomePanelMenu />
    </div>
}



