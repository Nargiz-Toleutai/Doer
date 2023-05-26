import block from 'bem-cn-lite';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { AsideNavigationLinkProps } from './types';
import { Icon } from '../../components/Icon';

import './AsideNavigationLink.scss';

const b = block('aside-navigation-link');

export const AsideNavigationLink: React.FC<AsideNavigationLinkProps> = ({ id, title, to, icon, selected }) => {
  return (
      <Link to={to} className={b({selected})}>
        <Icon name={icon} size={0} className={b('icon')}/> 
      </Link>
  );
};
