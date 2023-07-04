import block from 'bem-cn-lite';
import React from 'react';

import profileSubscriptionRightImage from '../../../assets/illustrations/ProfileSubscriptionRight.svg';
import { Svg } from '../../Svg';
import './ProfileSubscriptionPageRightImg.scss';

const b = block('profile-subscription-page-right-img');

export const ProfileSubscriptionPageRightImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profileSubscriptionRightImage} />
    </div>
}

