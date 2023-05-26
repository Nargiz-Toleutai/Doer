import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

// import { AsideNavigation } from './components/AsideNavigation';
import { router } from './router';

export const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
