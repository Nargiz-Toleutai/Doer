import block from 'bem-cn-lite';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import './App.scss';

const b = block('app');

export const App: React.FC = () => {
  return (
    <div className={b()}>
      <RouterProvider router={router} />
    </div>
  );
};
