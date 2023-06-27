import React from 'react';

import { SvgProps } from './types';
import { getBase64Svg } from '../../utils/svg';


export const Svg: React.FC<SvgProps> = ({src, className}) => {
    const svgSrc = getBase64Svg(src);
    return <img className={className} src={svgSrc} alt='logo'/>
}