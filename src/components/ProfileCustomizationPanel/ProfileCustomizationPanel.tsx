import block from 'bem-cn-lite';
import React, {useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {ColorButton} from './components/ColorButton/ColorButton';
import {ThemeButton} from './components/ThemeButton';
import {useAppDispatch, useAppSelector} from '../../store/mainStore/hooks/redux';
import {setColor, setTheme} from '../../store/themeStore';
import {CommonColor, CommonTheme} from '../../store/themeStore/types';
import {
    ProfileCustomizationPageLeftImg
} from '../Illustrations/ProfileCustomizationPage/ProfileCustomizationPageLeftImg';
import {
    ProfileCustomizationPageRightImg
} from '../Illustrations/ProfileCustomizationPage/ProfileCustomizationPageRightImg';
import './ProfileCustomizationPanel.scss';

const b = block('profile-customization-panel');

export const ProfileCustomizationPanel: React.FC = () => {
    const {t} = useTranslation();
    const {colorId: currentColorId, themeId: currentThemeId} = useAppSelector((state) => state.theme);

    const dispatch = useAppDispatch();

    const themeSections = useMemo(() => [
        {themeId: CommonTheme.Light, title: t('Light')},
        {themeId: CommonTheme.Dark, title: t('Dark')},
        {themeId: CommonTheme.System, title: t('System')},
    ], [t]);

    const colorSections = useMemo(() => [
        {id: CommonColor.Red, title: t('red')},
        {id: CommonColor.Yellow, title: t('yellow')},
        {id: CommonColor.Green, title: t('green')},
        {id: CommonColor.Blue, title: t('blue')},
        {id: CommonColor.Violet, title: t('violet')},
    ], [t]);

    const handleThemeChange = useCallback((themeId: CommonTheme) => {
        dispatch(setTheme(themeId))
    }, [dispatch])

    const handleColorChange = useCallback((colorId: CommonColor) => {
        dispatch(setColor(colorId))
    }, [dispatch])

    return (
        <div className={b()}>
            <ProfileCustomizationPageLeftImg/>
            <form className={b('form')}>
                <h4>{t('Choose your style')}</h4>
                <div className={b('theme-options')}>
                    {themeSections.map((theme) => (
                        <ThemeButton
                            name={'theme'}
                            {...theme}
                            colorId={currentColorId}
                            handleChange={() => handleThemeChange(theme.themeId)}
                            key={theme.themeId}
                            checked={currentThemeId === theme.themeId}
                        />
                    ))}
                </div>
                <div className={b('color-options')}>
                    {colorSections.map((color) => (
                        <ColorButton
                            checked={color.id === currentColorId}
                            {...color}
                            handleChange={() => handleColorChange(color.id)}
                            key={color.id}
                        />
                    ))}
                </div>
            </form>
            <ProfileCustomizationPageRightImg/>
        </div>
    );
};


