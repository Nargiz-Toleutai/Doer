import block from 'bem-cn-lite';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import './ProfileBackUpPanel.scss';
import {BackUpType} from './store/types';
import {ProfileBackUpPageLeftImg} from '../Illustrations/ProfileBackUpPage/ProfileBackUpPageLeftImg';
import {
    ProfileBackUpPageRightImg
} from '../Illustrations/ProfileBackUpPage/ProfileBackUpPageRightImg';
import {PanelButton} from '../PanelButton';

const b = block('profile-back-up-panel');

export const ProfileBackUpPanel: React.FC = () => {
    const {t} = useTranslation();

    const panelButtonTypes = useMemo(() => [
        {
            id: BackUpType.Export,
            title: t('Export'),
            description: 'Back up your habits list and save it to your device or cloud.',
            icon: 'save'
        },
        {
            id: BackUpType.Scan,
            title: t('Scan'),
            description: 'Restore your backups. Your lists, statistics and timer settings will return to the app.',
            icon: 'scan'
        },
        {
            id: BackUpType.SheetExport,
            title: t('Sheet export'),
            description: 'Save the list of habits as a regular spreadsheet. You can print it out and hang it in plain sight.',
            icon: 'table'
        },
        {
            id: BackUpType.ResetData,
            title: t('Reset data'),
            description: 'Got rid of all the planned habits? Start with a clean slate by dropping all your habits.',
            icon: 'reset'
        },
    ], [t]);


    return (
        <div className={b()}>
            <ProfileBackUpPageLeftImg/>
            <form className={b('form')}>
                {panelButtonTypes.map((button) => (
                    button.id === BackUpType.SheetExport || button.id === BackUpType.Scan ?
                        (
                            <>
                                <PanelButton
                                    key={button.id}
                                    description={button.description}
                                    title={button.title}
                                    id={button.id}
                                    icon={button.icon}
                                />
                                <hr/>
                            </>
                        )
                        :
                        (
                            <PanelButton
                                key={button.id}
                                description={button.description}
                                title={button.title}
                                id={button.id}
                                icon={button.icon}
                            />
                        )
                ))}
            </form>
            <ProfileBackUpPageRightImg/>
        </div>
    );
};