import {useEffect} from 'react';

import {useForceUpdate} from './useForceUpdate';
import {useAppSelector} from '../store/mainStore/hooks/redux';
import {CommonTheme} from '../store/themeStore/types';
import {getCurrentTheme} from '../utils/systemTheme';

export const useTheme = () => {
    const {colorId, themeId} = useAppSelector(state => state.theme);
    const [updateCycle, forceUpdate] = useForceUpdate();

    useEffect(() => {
        document.documentElement.setAttribute('data-color-theme', String(colorId));
        document.documentElement.setAttribute('data-theme', String(themeId === CommonTheme.System ? getCurrentTheme() : themeId));

        if (themeId === CommonTheme.System) {
            const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
            darkThemeMq.addEventListener('change', forceUpdate);
            return () => darkThemeMq.removeEventListener('change', forceUpdate);
        }
    }, [colorId, themeId, updateCycle, forceUpdate]);
}