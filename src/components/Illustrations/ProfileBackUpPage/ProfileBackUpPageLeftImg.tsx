import block from 'bem-cn-lite';
import React from 'react';

import profileBackUpPageLeftImage from '../../../assets/illustrations/profileBackUpLeft.svg';
import { Svg } from '../../Svg';
import './ProfileBackUpPageLeftImg.scss';

const b = block('profile-back-up-page-left-img');

export const ProfileBackUpPageLeftImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profileBackUpPageLeftImage} />
    </div>
}

