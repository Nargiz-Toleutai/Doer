import block from 'bem-cn-lite';
import React, { useEffect, useState } from 'react';

import { CustomHabitTabComponentProps } from './types';
import { CreateCustomHabitModalImg } from '../../../Illustrations/CreateHabitModalPage/CreateCustomHabitModalImg';
import { CustomHabitTabContainer } from '../CustomHabitTabContainer';
import './CustomHabitTabComponent.scss';

const b = block('custom-habit')

export const CustomHabitTabComponent: React.FC<CustomHabitTabComponentProps> = ({ title, description }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={b()}>
      <CreateCustomHabitModalImg scrollY={scrollY}/>
      <CustomHabitTabContainer scrollY={scrollY} />
    </div>
  );
};
/*
export const CustomHabitTabComponent: React.FC<CustomHabitTabComponentProps> = ({ title, description}) => {
  return (
    <div className={b()}>
      <CreateCustomHabitModalImg />
      <CustomHabitTabContainer/>
    </div>
  )
}

/*


 */