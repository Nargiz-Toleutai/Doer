import React from 'react';

import { SvgProps } from './types';

export const Svg: React.FC<SvgProps> = ({src}) => {
    const svgSrc = `data:image/svg+xml;base64,${btoa(src)}`;
    return <img src={svgSrc} alt='logo' />
}