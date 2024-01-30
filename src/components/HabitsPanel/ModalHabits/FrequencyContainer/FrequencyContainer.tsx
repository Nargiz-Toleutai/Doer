import block from 'bem-cn-lite';
import React, {useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import './FrequencyContainer.scss';
import {FrequencyDaysButton} from './FrequencyDaysButton/FrequencyDaysButton';
import {FrequencyTypeButton} from './FrequencyTypeButton/FrequencyTypeButton';
import { setFrequency } from './store';
import { Frequency } from './store/types';
import {useAppDispatch, useAppSelector} from '../../../../store/mainStore/hooks/redux';
import {setColor} from '../../../../store/themeStore';
import {CommonColor} from '../../../../store/themeStore/types';

const b = block('frequency-container');

export const FrequencyContainer: React.FC = () => {
  const {t} = useTranslation();
  const { colorId: currentColorId, themeId: currentThemeId } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const { frequencyId: currentFrequency} = useAppSelector(state => state.frequencyDay);

  const handleColorChange = useCallback((colorId: CommonColor) => {
    dispatch(setColor(colorId))
  }, [dispatch])

  const frequencyTypes = useMemo(() => [
    {id: Frequency.EveryDay, title: t('Every day')},
    {id: Frequency.InOneDay, title: t('One day')},
  ], [t]);

  const handleFrequencyTypeChange = useCallback((frequencyId: Frequency) => {
    dispatch(setFrequency(frequencyId))
  },[dispatch])


  
  return (
    <div className={b()}>
      <h5>{t('Frequency')}</h5>
      <div className={b('types')}>
        {
          frequencyTypes.map((type) => (
            <FrequencyTypeButton
              key={type.id}
              colorId={currentColorId}
              themeId={currentThemeId}
              title={type.title}
              checked={currentFrequency === type.id}
              handleChange={() => {
                handleFrequencyTypeChange(type.id);
                handleColorChange(currentColorId);
              }}
              name={type.title}
              frequencyType={currentFrequency}
            />
          ))
        }
      </div>
      <div className={b('days')}>
        <FrequencyDaysButton  colorId={currentColorId} />
      </div>
    </div>
  );
};


/*
 <FrequencyTypeButton
          colorId={currentColorId}
          themeId={currentThemeId}
          title={'In one day'}
          checked={selectedFrequency === FrequencyType.InOneDay}
          handleChange={() => {
            setSelectedFrequency(FrequencyType.InOneDay);
            handleColorChange(currentColorId);
          }}
          name={'one day'}
          frequencyType={FrequencyType.InOneDay}
        />
 */