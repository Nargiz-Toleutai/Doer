import block from 'bem-cn-lite';
import React from 'react';

import { FrequencyTypeButtonProps } from './types';
import './FrequencyTypeButton.scss';
import {useThemeDetector} from '../../../../../hooks/useThemeDetector';
import {CommonTheme} from '../../../../../store/themeStore/types';
import {getBase64Svg} from '../../../../../utils/svg';
import { Frequency} from '../store/types';
import {backgroundMapEveryDay, backgroundMapOneDay} from '../utils';

const b = block('frequency-type-button');


export const FrequencyTypeButton: React.FC<FrequencyTypeButtonProps> = ({
                                                      title,
                                                      name,
                                                      themeId,
                                                      colorId,
                                                      handleChange,
                                                      checked,
                                                      frequencyType,
                                                    }) => {
  const theme = useThemeDetector();
  const displayThemeId = themeId === CommonTheme.System ? theme : themeId;

  const backgroundMap = frequencyType === Frequency.EveryDay ? backgroundMapEveryDay : backgroundMapOneDay;

  const img = backgroundMap[colorId][displayThemeId];

  return (
    <div className={b()}>
      <label className={b('label', { color: String(colorId), checked })}>
        <input
          className={b('input')}
          type='radio'
          onChange={handleChange}
          name={name}
          style={{ backgroundImage: `url(${getBase64Svg(img)})` }}
          checked={checked}
        />
      </label>
      <div className={b('title')}>{title}</div>
    </div>
  );
};

