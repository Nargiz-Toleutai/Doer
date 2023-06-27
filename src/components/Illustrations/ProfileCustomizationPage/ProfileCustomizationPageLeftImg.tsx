import block from 'bem-cn-lite';
import React from 'react';

import { ProfileCustomizationPageLeftImgProps } from './types';
import profileCustomizationPageLeftImage from '../../../assets/illustrations/profileCustomizationLeft.svg';
import { Svg } from '../../Svg';
import './ProfileCustomizationPageLeftImg.scss';

const b = block('profile-customization-page-left-img');

export const ProfileCustomizationPageLeftImg: React.FC<ProfileCustomizationPageLeftImgProps> = ({ className}) => {
    return <Svg className={b(null, className)} src={profileCustomizationPageLeftImage} />
}

