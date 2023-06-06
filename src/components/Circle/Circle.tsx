import block from 'bem-cn-lite';
import React, {CSSProperties, useMemo} from 'react';

import { ANIMATION_END_OF_DASH_ARRAY, CAPACITY_OF_DASH_ARRAY } from './constants';
import { TimerProps } from './types';
import './Circle.scss';
import { interpolator } from '../../utils/interpolator';

const b = block('timer');

const interpolate = interpolator(CAPACITY_OF_DASH_ARRAY, ANIMATION_END_OF_DASH_ARRAY, 100);

export const Circle: React.FC<TimerProps> = ({ progress, displayTime }) => {
    const style = useMemo<CSSProperties>(() => ({
        strokeDashoffset: interpolate(progress),
    }), [progress])

    return (
        <svg className={b()} viewBox="0 0 100 100">
            <circle
                className={b('circle')}
                cx="50"
                cy="50"
                r="45"
                style={style}
            ></circle>
            <text className={b('text')} x="50" y="50">{displayTime}</text>
        </svg>
    )
}
