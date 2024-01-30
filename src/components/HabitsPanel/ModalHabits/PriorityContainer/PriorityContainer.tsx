import block from 'bem-cn-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';

import './PriorityContainer.scss';
import {PrioritySwitchButton} from '../../../PrioritySwitchButton';

const b = block('priority-container');

export const PriorityContainer: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div className={b()}>
      <h5>{t('Priority')}</h5>
      <div className={b('buttons')}>
        <PrioritySwitchButton/>
      </div>
    </div>
  );
};
