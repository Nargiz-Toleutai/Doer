import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Root } from '../components/Root';
import { Home } from '../pages/Home';
import { Pomodoro } from '../pages/Pomodoro';
import { Profile } from '../pages/Profile';
import { Statistics } from '../pages/Statistics';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Navigate to='/home' />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/pomodoro',
                element: <Pomodoro />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
        ]
    },
    {
        path: '/*',
        element: <Navigate to='/home' />,
    },
    // {
    //     path: '/',
    //     element: <Portal />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Navigate to='/custom' />,
    //         },
    //         {
    //             path: '/custom',
    //             element: <PriorityContainer />,
    //         },
    //         {
    //             path: '/health',
    //             element: <HealthHabit />,
    //         },
    //         {
    //             path: '/relationships',
    //             element: <RelationshipsHabit />,
    //         },
    //         {
    //             path: '/education',
    //             element: <EducationHabit />,
    //         },
    //     ]
    // },
]);