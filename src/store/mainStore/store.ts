import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { slice as viewSlice } from '../../components/HabitsPanel/HabitsPanelHeader/store/slice'
import { slice as backUpSlice} from '../../components/ProfileBackUpPanel/store/slice';
import { slice as avatarSlice } from '../../components/ProfilePhoto/store/slice'
import { slice as planSlice } from '../../components/ProfileSubscriptionPanel/store/slice'
import { slice as homeSlice } from '../../pages/Home/store/slice';
import { slice as pomodoroSlice } from '../../pages/Pomodoro/store/slice';
import { slice as profileSlice } from '../../pages/Profile/store/slice';
import { slice as statisticsSlice } from '../../pages/Statistics/store/slice';
import { habitAPI } from '../../services/HabitService';
import { slice as themeSlice } from '../themeStore/slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [themeSlice.name, pomodoroSlice.name],
}

const rootReducer = combineReducers({
    [homeSlice.name]: homeSlice.reducer,
    [pomodoroSlice.name]: pomodoroSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
    [avatarSlice.name]: avatarSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [planSlice.name]: planSlice.reducer,
    [backUpSlice.name]: backUpSlice.reducer,
    [statisticsSlice.name]: statisticsSlice.reducer,
    [viewSlice.name]: viewSlice.reducer,
    [habitAPI.reducerPath]: habitAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ).concat(habitAPI.middleware),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];


