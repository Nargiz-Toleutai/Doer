import block from 'bem-cn-lite';
import React, { useMemo, useState } from 'react';

import './BarGraph.scss';
import { BarGraphProps } from './types';
import { BarItem } from '../BarItem';

const b = block('bar-graph');

export const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const [highestValue, setHighestValue] = useState(0);

  const barItems = useMemo(() => {
    let localHighestValue = 0;

    // get the highest value
    data.forEach(({ value }) => {
      localHighestValue = Math.max(localHighestValue, value);
    });

    setHighestValue(localHighestValue); // set highestValue

    // calculate "barPercentage" using the "highestValue" to construct the bar items
    return data.map((item) => ({
      title: item.title,
      barPercentage: `${Math.round((item.value / localHighestValue) * 100)}%`,
    }));
  }, [data]);

  return (
    <div className={b()}>
      <div className={b('list')}>
        {barItems.map((barItem, idx) => (
          <BarItem
            key={idx}
            barPercentage={barItem.barPercentage}
          />
        ))}
      </div>
      <div className={b('text')}>
        <span className={b('title')}>daily progress</span>
        <span className={b('value')}>{highestValue}</span>
      </div>
    </div>
  );
};

/*
 <div className={b('list')}>
          <BarItem />
          <BarItem />
          <BarItem />
        </div>
 */