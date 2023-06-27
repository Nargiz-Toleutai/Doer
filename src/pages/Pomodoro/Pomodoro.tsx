import block from 'bem-cn-lite';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Pomodoro.scss';
import {
    DEFAUL_DURATION_IN_MS,
    DEFAUL_DURATION_IN_SECS,
    UPDATE_INTERVAL_IN_MS,
} from './constants';
import { pausePomodoro, resumePomodoro, startPomodoro, stopPomodoro } from './store';
import { useAppDispatch, useAppSelector } from '../../store/mainStore/hooks/redux';
import alarmAudio from '../../assets/sounds/alarm.wav';
import { Circle } from '../../components/Circle';
import { interpolator } from '../../utils/interpolator';

const b = block('pomodoro');

const getInititalTimeLeftValue = (startTime: number | null, pauseTime: number | null, duration: number | null ): number => {
    if(!startTime || !duration) return DEFAUL_DURATION_IN_MS;
    return duration - ((pauseTime ?? Date.now()) - startTime);
};

export const Pomodoro = () => {
    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement>(null);

    const { startTime, pauseTime, duration } = useAppSelector((state) => state.pomodoro);
    const dispatch = useAppDispatch();
    
    const [timeLeft, setTimeLeft] = useState(() => getInititalTimeLeftValue(startTime, pauseTime, duration));

    const currentDuration = duration ?? DEFAUL_DURATION_IN_MS;

    const interpolateProgress = useMemo(() => interpolator(0, 100, currentDuration), [currentDuration]);
    const interpolateTime = useMemo(() => interpolator(0, currentDuration / 1000, currentDuration), [currentDuration]);

    const audio = audioRef.current;

    const playSound = useCallback(() => {
        if (audio) {
            audio.muted = false;
            audio.play();
        }
    },[audio]);

    const stopSound = useCallback(() => {
        if (audio) {
            audio.muted = true;
            audio.pause();
            audio.currentTime = 0;
        }
    },[audio]);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | null = null;
        if (startTime && !pauseTime) {
            timer = setInterval(() => {
                const currentTime = Date.now();
                const timeLeft = (duration ?? 0) - (currentTime - startTime);
                setTimeLeft(Math.max(timeLeft, 0));
                if (timeLeft < 0) {
                    dispatch(stopPomodoro());
                    playSound();
                }
            }, UPDATE_INTERVAL_IN_MS)
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        }
    }, [startTime, pauseTime, duration, dispatch, playSound, stopSound]);

     const resetTimer = useCallback(() => {
        setTimeLeft(DEFAUL_DURATION_IN_SECS * 1000)
        stopSound();
    }, [stopSound]);

    const start = () => dispatch(startPomodoro({
        duration: DEFAUL_DURATION_IN_SECS * 1000,
    }))

    const pause = () => dispatch(pausePomodoro());

    const resume = () => dispatch(resumePomodoro());

    const progress = interpolateProgress(timeLeft);
    const displayTime = interpolateTime(timeLeft);

    return (
        <div className={b()}>
            <div className={b('header')}>
                <h3>{t('Pomodoro')}</h3>
            </div>
            <div className={b('main')}>
                <Circle progress={progress} displayTime={Math.ceil(displayTime)} />
                <h6>{t('Control your habits!')}</h6>
                <p>{t('Choose any habit from the list and start the timer')}</p>
                <audio src={alarmAudio} muted ref={audioRef}></audio>
                {startTime === null && progress === 100 && <button onClick={start}>{t('Start')}</button>}
                {startTime === null && progress === 0 && <button onClick={resetTimer}>{t('Reset')}</button>}
                {startTime !== null && pauseTime === null && <button onClick={pause}>{t('Pause')}</button>}
                {pauseTime !== null && <button onClick={resume}>{t('Resume')}</button>}
            </div>
        </div>
    );
};
