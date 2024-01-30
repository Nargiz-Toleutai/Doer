import block from 'bem-cn-lite';
import React, { useMemo, useState } from 'react';
import {useTranslation} from 'react-i18next';

import { Timer } from './types';
import { SwitchButton } from '../../../SwitchButton';
import './PomodoroContainer.scss';


const b = block('pomodoro-container')
export const PomodoroContainer: React.FC = () => {
  const { t } = useTranslation();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [timers, setTimers] = useState<Timer[]>([
    { title: 'Session', time: 10, unit: 'min' },
    { title: 'Short break', time: 5, unit: 'min' },
    { title: 'Long break', time: 20, unit: 'min' },
    { title: 'Sessions before long break', time: 3 },
    { title: 'Reps', time: 2 },
  ]);

  const handleToggle = (checked: boolean) => {
    setIsContentVisible(checked);
  };

  const handleTimeChange = (index: number, newTime: string) => {
    setTimers(timers => timers.map((timer, i) =>
      i === index ? { ...timer, time: parseInt(newTime, 10) || 0 } : timer
    ));
  };

  const handleUnitChange = (index: number, newUnit: 'min' | 'hour') => {
    setTimers(timers => timers.map((timer, i) =>
      i === index ? { ...timer, unit: newUnit } : timer
    ));
  };


  return (
    <div className={b()}>
      <div className={b('header')}>
        <h5>{t('Pomodoro')}</h5>
        <SwitchButton onChange={handleToggle} checked={isContentVisible}/>
      </div>
      {
        isContentVisible &&
        <div className={b('session')}>
          {timers.map((timer, index) => (
            timer.title !== 'Reps'
              ? (
              <>
              <div key={timer.title} className={b('session-item')}>
                <span className={b('session-title')}>{timer.title}</span>
                <input
                  type="number"
                  className={b('session-time')}
                  value={timer.time}
                  onChange={(e) => handleTimeChange(index, e.target.value )}
                />
                {timer.unit && (
                  <select
                    className={b('session-unit')}
                    value={timer.unit}
                    onChange={(e) => handleUnitChange(index, e.target.value as 'min' | 'hour')}
                  >
                    <option value="min">{t('min')}</option>
                    <option value="hours">{t('hour')}</option>
                  </select>
                )}
              </div>
                <hr/>
              </>
              )
              : (
                <>
                  <div key={timer.title} className={b('session-item')}>
                    <span className={b('session-title')}>{timer.title}</span>
                    <input
                      type="number"
                      className={b('session-time')}
                      value={timer.time}
                      onChange={(e) => handleTimeChange(index, e.target.value)}
                    />
                    <span className={b('session-unit')}>{timer.title === 'Reps' ? '' : 'min'}</span>
                  </div>
                </>
              )
          ))}
        </div>
      }
    </div>
  )
}

/*
 const timersList: PomodoroContainerProps[] = useMemo(() => [
    { title: t('Session'), time: '10 min' },
    { title: t('Short break'), time: '5 min' },
    { title: t('Long break'), time: '20 min' },
    { title: t('Sessions before long break'), time: '3' },
    { title: t('Reps'), time: '2' },
  ],[t])
 */