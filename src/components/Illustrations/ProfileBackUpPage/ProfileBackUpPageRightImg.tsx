import block from 'bem-cn-lite';
import React from 'react';

import profileBackUpPageRightImage from '../../../assets/illustrations/profileBackUpRight.svg';
import { Svg } from '../../Svg';
import './ProfileBackUpPageRightImg.scss';

const b = block('profile-back-up-page-right-img');

export const ProfileBackUpPageRightImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profileBackUpPageRightImage} />
    </div>
}

