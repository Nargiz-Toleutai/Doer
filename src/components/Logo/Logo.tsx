import block from 'bem-cn-lite';
import React from 'react';

import logoSvg from '../../assets/logos/logo.svg';
import { Svg } from '../Svg';
import './Logo.scss';

const b = block('logo');

export const Logo: React.FC = () => {
    return <div className={b()}>
        <Svg src={logoSvg} />
    </div>
}

