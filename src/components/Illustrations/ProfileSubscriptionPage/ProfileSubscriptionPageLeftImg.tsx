import block from 'bem-cn-lite';
import React from 'react';

import profileSubscriptionLeftImage from '../../../assets/illustrations/profileSubscriptionLeft.svg';
import { Svg } from '../../Svg';
import './ProfileSubscriptionPageLeftImg.scss';

const b = block('profile-subscription-page-left-img');

export const ProfileSubscriptionPageLeftImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profileSubscriptionLeftImage} />
    </div>
}

