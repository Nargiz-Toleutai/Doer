import block from 'bem-cn-lite';
import React from 'react';

import profilePersonalPageRightImage from '../../../assets/illustrations/profilePersonalRight.svg';
import { Svg } from '../../Svg';
import './ProfilePersonalPageRightImg.scss';

const b = block('profile-personal-page-right-img');

export const ProfilePersonalPageRightImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profilePersonalPageRightImage} />
    </div>
}

