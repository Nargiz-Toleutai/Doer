import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

import { IHabit } from '../../../utils/types';


export const habitAPI = createApi({
  reducerPath: 'habitAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
  tagTypes: ['Habit'],
  endpoints: (build) => ({
    fetchAllHabits: build.query<IHabit[], number>({
      query: (limit = 5) => ({
        url: '/habits',
        params: {
          _limit: limit
        }
      }),
      providesTags: (result, error, limit)  => ['Habit']
    }),
    createHabit: build.mutation<IHabit, IHabit>({
      query: (habit) => ({
        url: '/habits',
        method: 'POST',
        body: habit
      }),
      invalidatesTags: ['Habit']
    }),
    updateHabit: build.mutation<IHabit, IHabit>({
      query: (habit) => ({
        url: `/habits/${habit.id}`,
        method: 'PUT',
        body: habit
      }),
      invalidatesTags: ['Habit']
    }),
    deleteHabit: build.mutation<IHabit, IHabit>({
      query: (habit) => ({
        url: `/habits/${habit.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Habit']
    }),
  })
})