import block from 'bem-cn-lite';
import React from 'react';

import homePageImage from '../../../assets/illustrations/homePage.svg';
import { Svg } from '../../Svg';
import './HomePageImg.scss';

const b = block('home-page-img');

export const HomePageImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={homePageImage} />
    </div>
}

