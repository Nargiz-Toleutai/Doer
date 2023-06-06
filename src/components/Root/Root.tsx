import block from 'bem-cn-lite';
import React from 'react';
import { Outlet } from 'react-router-dom'

import { AsideNavigation } from '../AsideNavigation';

import './Root.scss';

const b = block('root');

export const Root: React.FC = () => {
    return <div className={b()}>
        <AsideNavigation />
        <Outlet/>
    </div>
}