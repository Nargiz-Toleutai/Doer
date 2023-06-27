import block from 'bem-cn-lite';
import React from 'react';

import profilePersonalPageLeftImage from '../../../assets/illustrations/profilePersonalLeft.svg';
import { Svg } from '../../Svg';
import './ProfilePersonalPageLeftImg.scss';

const b = block('profile-personal-page-left-img');

export const ProfilePersonalPageLeftImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profilePersonalPageLeftImage} />
    </div>
}

