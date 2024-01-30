import { TimePicker } from '@mui/x-date-pickers';
import block from 'bem-cn-lite';
import { Dayjs } from 'dayjs';
import React, { useCallback, useState } from 'react';
import {useTranslation} from 'react-i18next';
import './RemindersContainer.scss';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../../store/mainStore/hooks/redux';
import { calculateTimeDifference } from '../../../../utils/calculateTimeDifference';
import { isDayjs } from '../../../../utils/isDayjs';
import { Icon } from '../../../Icon';
import { SwitchButton } from '../../../SwitchButton';
import { toggleContent } from '../../../SwitchButton/store/slice';



const b = block('reminders-container');

export const RemindersContainer: React.FC = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState<string | null>('');
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [reminderList, setReminderList] = useState<string[]>([]);
  const [isContentVisible, setIsContentVisible] = useState(false); // Local state

  const handleToggle = (checked: boolean) => {
      setIsContentVisible(checked);
  };
  const handleTimeChange = (value: Date | string | Dayjs | null) => {
    if (isDayjs(value)) { // Use the type guard here
      const newTime = value.format('h:mm A');
      setTime(newTime);
    } else {
      setTime(null);
    }
  };

  const handleAddReminderClick = () => {
    setShowTimeInput(true);
  };

  const handleTimeSelection = useCallback(() => {
    if (time) {
      setShowTimeInput(false);
      const newReminderList = [...reminderList, time];
      setReminderList(newReminderList);

      const timeDifference = calculateTimeDifference(time);

      setTimeout(() => {
        alert('It\'s time for your reminder!');
      }, timeDifference);
      setTime('');
    }
  }, [time, reminderList]);

  const handleDeleteClick = (index: number) => {
    const newReminderList = reminderList.filter((_, idx) => idx !== index);
    setReminderList(newReminderList);
  };

  return (
    <div className={b()}>
      <div className={b('header')}>
        <h5>{t('Reminders')}</h5>
        <SwitchButton onChange={handleToggle} checked={isContentVisible}/>
      </div>
      {
        isContentVisible &&
        <>
        {reminderList.map((reminder, index) => (
            <div key={index} className={b('item')}>
              <Icon size={24} name={'time'} />
              <span className={b('time')}>{reminder}</span>
              <button className={b('delete-button')} onClick={() => handleDeleteClick(index)}>x</button>
            </div>
        ))}
        <div className={b('add-reminder')}>
          {showTimeInput && (
            <>
              <TimePicker
                value={time}
                onChange={handleTimeChange}
              />
              <button className={'add-button'} onClick={handleTimeSelection}>OK</button>
            </>
          )}
          {!showTimeInput && (
            <button className={b('add-button')} onClick={handleAddReminderClick}>
              <Icon size={24} name={'plus-circle'} />
              Add reminder time
            </button>
          )}
        </div>
        </>
      }
    </div>
  );
};







/*


  useEffect(() => {
    const button = document.querySelector('.css-1e6y48t-MuiButtonBase-root-MuiButton-root');
    if (button) {
      button.addEventListener('click', handleTimeSelection);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleTimeSelection);
      }
    };
  }, [handleTimeSelection]);


 const timeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showTimeInput) {
      timeInputRef.current?.focus();
      timeInputRef.current?.click();
    }
  }, [showTimeInput]);

 <input
              ref={timeInputRef}
              type="time"
              className={b('time-input')}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />


export const RemindersContainer: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [time, setTime] = useState('');
  const [reminderList, setReminderList] = useState<string[]>([]);

  const calculateTimeDifference = (selectedTime: string) => {
    const now = new Date();
    const reminderTime = new Date();
    const [hours, minutes] = selectedTime.split(':').map(Number);

    reminderTime.setHours(hours, minutes);

    if (reminderTime <= now) {
      reminderTime.setDate(now.getDate() + 1);
    }
    return reminderTime.getTime() - now.getTime();
  };

  const handleAddTimeClick = () => {

    if (time) {
      const newReminderList = [...reminderList, time];
      setReminderList(newReminderList);

      const timeDifference = calculateTimeDifference(time);

      setTimeout(() => {
        alert('It\'s time for your reminder!');
      }, timeDifference);

      setTime('');
    }
  };

  const handleDeleteClick = (index: number) => {
    const newReminderList = reminderList.filter((_, idx) => idx !== index);
    setReminderList(newReminderList);
  };

  return (
    <div className={b()}>
      <h5>{t('Reminders')}</h5>
          {reminderList.map((reminder, index) => (
            <div key={index} className={b('item')}>
              <Icon size={24} name={'time'} />
              <span className={b('time')}>{reminder}</span>
              <button className={b('delete-button')} onClick={() => handleDeleteClick(index)}>x</button>
            </div>
          ))}
          <div className={b('add-reminder')}>
            <input
              type="time"
              className={b('time-input')}
              value={time}
              onChange={e => setTime(e.target.value)}
            />
            <button className={b('add-button')} onClick={handleAddTimeClick}>
              <Icon size={24} name={'plus-circle'} />
            </button>
            <div>Add reminder time</div>
          </div>
    </div>
  );
}



/*



        const {t} = useTranslation();
  const dispatch = useDispatch();
  const [time, setTime] = useState('');
  const times = useAppSelector(state => state.reminders.times);

  const handleTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTime(e.target.value);
    },
    []
  );

  const handleAddTime = useCallback(() => {
    if (time) {
      dispatch(addTime(time));
      setTime('');
    }
  }, [dispatch, time]);

  return (
    <div className={b()}>
      <h5>{t('Reminders')}</h5>
      <input
        placeholder={time}
        value={time}
        onChange={handleTimeChange}
      />
      <button onClick={handleAddTime}>
        Add Reminder Time
      </button>
    </div>
  );
 */

