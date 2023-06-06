import block from 'bem-cn-lite';
import React from 'react';

import { AsidePanelMenu } from '../../components/AsidePanelMenu';

import './Home.scss';

const b = block('home');

export const Home: React.FC = () => {
    return <div className={b()}>
        <AsidePanelMenu />
    </div>
}



