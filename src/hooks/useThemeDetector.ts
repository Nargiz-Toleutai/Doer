import {useEffect, useState} from 'react';

import {getCurrentTheme} from '../utils/systemTheme';

export const useThemeDetector = () => {
    const [theme, setTheme] = useState(getCurrentTheme());
    const mqListener = ((e: MediaQueryListEvent) => {
        setTheme(getCurrentTheme());
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        darkThemeMq.addEventListener('change', mqListener);
        return () => darkThemeMq.removeEventListener('change', mqListener);
    }, []);

    return theme;
}

