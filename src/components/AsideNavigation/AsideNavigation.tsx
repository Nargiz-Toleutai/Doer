import block from 'bem-cn-lite';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { AsideNavigationLink } from './AsideNavigationLink';
import { AsideNavigationLinkProps } from './types';
import { Logo } from '../Logo';

import './AsideNavigation.scss';

const b = block('aside-navigation');

export const AsideNavigation: React.FC = () => {
  const location = useLocation();
  const links: AsideNavigationLinkProps[] = useMemo(() => [
    { id: 'home', title: 'Home', to: '/home', icon: 'home' },
    { id: 'statistics', title: 'Statistics', to: '/statistics', icon: 'chart' },
    { id: 'pomodoro', title: 'Pomodoro', to: '/pomodoro', icon: 'pomodoro' },
  ], []);

  const additionalLinks: AsideNavigationLinkProps[] = useMemo(() => [
    { id: 'profile', title: 'Profile', to: '/profile', icon: 'profile' },
  ], []);

  return (
    <aside className={b()}>
      <Logo />
      <nav className={b('main')}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <AsideNavigationLink {...link} selected={link.to === location.pathname} />
            </li>
          ))}
        </ul>
      </nav>
      <nav className={b('additional')}>
        <ul>
          {additionalLinks.map((link) => (
            <li key={link.id}>
              <AsideNavigationLink {...link} selected={link.to === location.pathname} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};