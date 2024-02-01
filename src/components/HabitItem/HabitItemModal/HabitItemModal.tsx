import block from 'bem-cn-lite';
import React, { useEffect, useState } from 'react';

import { HabitItemEditComponent } from './HabitItemEditComponent/HabitItemEditComponent';


const b = block('habit-item-modal')

export const HabitItemModal: React.FC = () => {
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
      <HabitItemEditComponent  />
    </div>
  );
};
/*
 <scrollY={scrollY}/>
      <scrollY={scrollY} />

/*


 */