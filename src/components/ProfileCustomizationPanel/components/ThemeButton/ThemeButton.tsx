import block from 'bem-cn-lite';
import React from 'react';

import {ThemeProps} from './types';
import {backgroundMap} from './utils';
import './ThemeButton.scss';
import {CommonTheme} from '../../../../store/themeStore/types';
import {useThemeDetector} from '../../../../hooks/useThemeDetector';
import {getBase64Svg} from '../../../../utils/svg';


const b= block('theme-button');

export const ThemeButton: React.FC<ThemeProps> = ({title, name, themeId, colorId, handleChange, checked}) => {
    const theme = useThemeDetector();
    const displayThemeId = themeId === CommonTheme.System ? theme : themeId;

    const img = backgroundMap[colorId][displayThemeId]

    return (
        <div className={b()}>
            <label className={b('label', {color: String(colorId), background: String(displayThemeId)})}>
                <input
                    className={b('input')}
                    type='radio'
                    onChange={handleChange}
                    name={name}
                    style={{backgroundImage: `url(${getBase64Svg(img)})`}}
                    checked={checked}
                />
            </label>
            <div className={b('title')}>{title}</div>
        </div>
    )
}


// style={{ backgroundImage: `url(${getBase64Svg(lightRedFrame)})`}}