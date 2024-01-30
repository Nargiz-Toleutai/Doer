import block from 'bem-cn-lite';
import React, { useCallback, useMemo, useState } from 'react';
import './FrequencyDaysButton.scss';
import { useTranslation } from 'react-i18next';

import { WeekDaysCheckBoxButton } from '../../../../WeekDaysCheckBoxButton';
import { FrequencyDays, FrequencyDaysButtonProps } from '../store/types';


const b = block('frequency-days-button');

export const FrequencyDaysButton: React.FC<FrequencyDaysButtonProps> = ({ colorId}) => {
  const {t} = useTranslation();
  const [selectedDays, setSelectedDays] = useState<FrequencyDays[]>([]);
  
  const daySections = useMemo(() => [
    {id: FrequencyDays.Monday, title: colorId, name: t('Mo')},
    {id: FrequencyDays.Tuesday,title: colorId, name: t('Tu')},
    {id: FrequencyDays.Wednesday, title: colorId, name: t('We')},
    {id: FrequencyDays.Thursday, title: colorId, name: t('Th')},
    {id: FrequencyDays.Friday, title: colorId, name: t('Fr')},
    {id: FrequencyDays.Saturday, title: colorId, name: t('Sa')},
    {id: FrequencyDays.Sunday, title: colorId, name: t('Su')},
  ], [colorId, t]);

  const handleDayChange = useCallback((dayId: FrequencyDays) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(prevDays => prevDays.filter(day => day !== dayId));
    } else {
      setSelectedDays(prevDays => [...prevDays, dayId]);
    }
  }, [selectedDays]);


  return (
    <>
      { daySections.map((daySection) => (
        <div className={b()} key={daySection.id}>
          <WeekDaysCheckBoxButton
            onCheckedChange={() => handleDayChange(daySection.id)}
            checked={selectedDays.includes(daySection.id)}
            id={daySection.id}
            title={daySection.title}
            name={daySection.name}
          />
        </div>
        ))
      }
    </>
  )
}

/*
 <ColorButton
            checked={selectedDays.includes(daySection.id)}
            {...daySection}
            handleChange={() => handleDayChange(daySection.id)}
            id={colorId}
          />


 */
