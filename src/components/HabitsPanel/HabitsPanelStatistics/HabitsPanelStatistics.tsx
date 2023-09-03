import block from 'bem-cn-lite';
import React, { useMemo } from 'react';
import './HabitsPanelStatistics.scss';
import { useTranslation } from 'react-i18next';

import { HabitsPanelStatisticsProps } from './types';
import { CommonFilter } from '../../../pages/Home/store/types';
import { BarGraph } from '../../BarGraph';
import { ProgressCircle } from '../../ProgressCircle';

const b = block('habits-panel-statistics');

export const HabitsPanelStatistics: React.FC = () => {
  const { t } = useTranslation();

  const data: HabitsPanelStatisticsProps[] = useMemo(() => [
    { id: CommonFilter.Today, title: t('Today'), value: 7},
    { id: CommonFilter.Tomorrow, title: t('Tomorrow'), value: 3 },
    { id: CommonFilter.Next7Days, title: t('Next 7 Days'), value: 2 },
    { id: CommonFilter.ThisMonth, title: t('This Month'), value: 3 },
    { id: CommonFilter.Completed, title: t('Completed'), value: 1 },
  ], [t]);

  return (
    <div className={b()}>
      <ProgressCircle totalTasks={100} completedTasks={20}/>
      <BarGraph data={data}/>
    </div>
  );
};