import React from 'react';
import { Outlet } from 'react-router-dom'

import { AsideNavigation } from '../AsideNavigation'

export const Root: React.FC = () => {
    return <div>
        <AsideNavigation />
        <Outlet/>
    </div>
}