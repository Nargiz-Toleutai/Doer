import block from 'bem-cn-lite';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AsidePanelProfileItem } from './AsidePanelProfileItem';
import { AsidePanelProfileItemProps } from './types';
import './AsidePanelProfile.scss';
import { MainProfile } from '../../pages/Profile/store/types';
import { MenuButton } from '../MenuButton';

const b = block('aside-panel-profile');

export const AsidePanelProfile: React.FC = () => {
    const { t } = useTranslation();
    const links: AsidePanelProfileItemProps[] = useMemo(() => [
        { id: MainProfile.Personal, title: t('Personal'),  icon: 'edit' },
        { id: MainProfile.Customization, title: t('Customization'),  icon: 'custom' },
        { id: MainProfile.Subscription, title: t('Subscription'), icon: 'sale' },
        { id: MainProfile.Backup, title: t('Backup'), icon: 'backup' },
    ], [t]);

    return (
        <div className={b()}>
            <h3>{t('Profile')}</h3>
            <nav>
                <ul className={b('main')}>
                {links.map((link) => (
                    <li key={link.id}>
                        <AsidePanelProfileItem {...link} />
                    </li>
                ))}
                </ul>
            </nav>
            <hr/>
            <nav>
                <MenuButton title={'Sign out'} icon={'sign-out'} menuId={'sign-out'}/>
            </nav>
        </div>
    );
};