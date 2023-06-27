import block from 'bem-cn-lite';
import React from 'react';

import profileCustomizationPageRightImage from '../../../assets/illustrations/profileCustomizationRight.svg';
import { Svg } from '../../Svg';
import './ProfileCustomizationPageRightImg.scss';

const b = block('profile-customization-page-right-img');

export const ProfileCustomizationPageRightImg: React.FC = () => {
    return <div className={b()}>
        <Svg src={profileCustomizationPageRightImage} />
    </div>
}

