import block from 'bem-cn-lite';
import React from 'react';

import {LogoProps} from './types';
import {backgroundMap} from './utils';
import {CommonTheme} from '../../store/themeStore/types';
import {useThemeDetector} from '../../hooks/useThemeDetector';
import { Svg } from '../Svg';
import './Logo.scss';

const b = block('logo');

export const Logo: React.FC<LogoProps> = ({ themeId, colorId }) => {
    const theme = useThemeDetector();
    const displayThemeId: CommonTheme =
        themeId !== CommonTheme.System
            ? themeId
            : theme;

    const img = backgroundMap[colorId][displayThemeId]

    return <div className={b()}>
        <Svg src={img} />
    </div>
}

