import block from 'bem-cn-lite';
import React, { useCallback } from 'react';

import { MainProfile } from './store/types';
import { AsidePanelProfile } from '../../components/AsidePanelProfile';
import { ProfileCustomizationPanel } from '../../components/ProfileCustomizationPanel';
import { ProfilePersonalPanel } from '../../components/ProfilePersonalPanel';
import { useAppSelector } from '../../store/mainStore/hooks/redux';
import './Profile.scss';

const b = block('profile');

export const Profile: React.FC = () => {
    const sectionId = useAppSelector((state) => state.profile.sectionId);
    const currentSection = useCallback(() => {
        switch (sectionId) {
            case MainProfile.Personal:
                return <ProfilePersonalPanel />;
            case MainProfile.Customization:
                return <ProfileCustomizationPanel />;
        }
    }, [sectionId])

    return <div className={b()}>
        <AsidePanelProfile />
        {currentSection()}
    </div>
}