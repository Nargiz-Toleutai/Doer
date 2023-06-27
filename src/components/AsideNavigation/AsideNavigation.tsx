import block from 'bem-cn-lite';
import React, { useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';

import {AsideNavigationLink} from './AsideNavigationLink';
import {AsideNavigationLinkProps} from './types';
import {useAppSelector} from '../../store/mainStore/hooks/redux';
import {Logo} from '../Logo';
import './AsideNavigation.scss';

const b = block('aside-navigation');

export const AsideNavigation: React.FC = () => {
    const {t} = useTranslation();
    const location = useLocation();

    const currentThemeId = useAppSelector((state) => state.theme.themeId);
    const currentColorId = useAppSelector((state) => state.theme.colorId);

    const links: AsideNavigationLinkProps[] = useMemo(() => [
        {id: 'home', title: t('Home'), to: '/home', icon: 'home'},
        {id: 'statistics', title: t('Statistics'), to: '/statistics', icon: 'chart'},
        {id: 'pomodoro', title: t('Pomodoro'), to: '/pomodoro', icon: 'pomodoro'},
    ], [t]);

    const additionalLinks: AsideNavigationLinkProps[] = useMemo(() => [
        {id: 'profile', title: t('Profile'), to: '/profile', icon: 'profile'},
    ], [t]);


    return (
        <aside className={b()}>
            <Logo themeId={currentThemeId} colorId={currentColorId}/>
            <nav className={b('main')}>
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <AsideNavigationLink
                                {...link}
                                selected={link.to === location.pathname}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className={b('additional')}>
                <ul>
                    {additionalLinks.map((link) => (
                        <li key={link.id}>
                            <AsideNavigationLink {...link} selected={link.to === location.pathname}/>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};