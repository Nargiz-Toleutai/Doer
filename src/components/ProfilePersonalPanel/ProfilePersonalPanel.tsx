import block from 'bem-cn-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';

import './ProfilePersonalPanel.scss';
import {CommonColor} from '../../store/themeStore/types';
import {ColorfulWideButton} from '../ColorfulWideButton';
import {ProfilePersonalPageLeftImg} from '../Illustrations/ProfilePersonalPage/ProfilePersonalPageLeftImg';
import {ProfilePersonalPageRightImg} from '../Illustrations/ProfilePersonalPage/ProfilePersonalPageRightImg';
import {Input} from '../Input';
import {ProfilePhoto} from '../ProfilePhoto';


const b = block('profile-personal-panel');

export const ProfilePersonalPanel: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className={b()}>
            <ProfilePersonalPageLeftImg/>
            <ProfilePhoto colorId={CommonColor.Violet}/>
            <form className={b('form')}>
                <Input id='FirstName' title={t('First Name')} resetButton/>
                <Input id='FirstName' title={t('First Name')} resetButton/>
                <ColorfulWideButton title={t('Done')}/>
            </form>
            <ProfilePersonalPageRightImg/>
        </div>
    );
};

// <button type="submit" value="Done" className={b('done-button')}>{t('Done')}</button>