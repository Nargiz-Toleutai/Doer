import React from 'react';

import { SvgProps } from './types';
import { getBase64Svg } from '../../utils/svg';


export const Svg: React.FC<SvgProps> = ({src}) => {
    const svgSrc = getBase64Svg(src);
    return <img src={svgSrc} alt='logo' />
}