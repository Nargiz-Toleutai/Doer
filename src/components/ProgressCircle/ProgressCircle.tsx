import block from 'bem-cn-lite';
import React, {CSSProperties, useEffect, useMemo, useState} from 'react';

import './ProgressCircle.scss';
import {CAPACITY_OF_DASH_ARRAY, DEFAULT_DURATION, DEFAULT_START} from './constants';
import {TaskProgressProps} from './types';
import {interpolator} from '../../utils/interpolator';

const b = block('progress-circle');

const interpolate = interpolator(DEFAULT_START, CAPACITY_OF_DASH_ARRAY, DEFAULT_DURATION);
export const ProgressCircle: React.FC<TaskProgressProps> = ({totalTasks, completedTasks}) => {
    const [progress, setProgress] = useState(DEFAULT_START);

    useEffect(() => {
        const percentageCompleted = (completedTasks / totalTasks) * DEFAULT_DURATION;
        setProgress(percentageCompleted);
    }, [totalTasks, completedTasks]);

    const style = useMemo<CSSProperties>(
        () => ({
            strokeDashoffset: interpolate(DEFAULT_DURATION - progress), // Для инверсии направления "заполнения"
        }),
        [progress],
    );
    return (
        <div className={b()}>
            <svg viewBox="0 0 100 100" width={48}>
                <circle className={b('circle')} cx="50" cy="50" r="45"></circle>
                <circle
                    className="progress-circle__circle progress-circle__circle--completed"
                    cx="50"
                    cy="50"
                    r="45"
                    style={style}
                ></circle>
            </svg>
            <div className={b('text')}>
                <span className={b('title')}>daily progress</span>
                <span className={b('percents')}>{`${Math.round(progress)}%`}</span>
            </div>
        </div>
    );
};
