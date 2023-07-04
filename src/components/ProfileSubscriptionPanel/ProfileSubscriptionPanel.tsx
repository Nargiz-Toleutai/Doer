import block from 'bem-cn-lite';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import './ProfileSubscriptionPanel.scss';
import {PlanType} from './store/types';
import {ProfileSubscriptionPageLeftImg} from '../Illustrations/ProfileSubscriptionPage/ProfileSubscriptionPageLeftImg';
import {
    ProfileSubscriptionPageRightImg
} from '../Illustrations/ProfileSubscriptionPage/ProfileSubscriptionPageRightImg';
import {SelectButton} from '../SelectButton';


const b = block('profile-subscription-panel');

export const ProfileSubscriptionPanel: React.FC = () => {
    const {t} = useTranslation();

    const planSections = useMemo(() => [
        {id: PlanType.Free, title: t('Free'), duration: t('days'), days: '7'},
        {id: PlanType.Month, title: t('Month'), duration: t('month'), price: t('$ 2.49')},
        {id: PlanType.SixMonths, title: t('6 months'), duration: t('month'), price: t('$ 1.99')},
        {id: PlanType.Year, title: t('Year'), duration: t('month'), price: t('$ 1.49')},
    ], [t]);

    return (
        <div className={b()}>
            <ProfileSubscriptionPageLeftImg/>
            <h4>Choose your Plan</h4>
            <form className={b('form')}>
                {planSections.map((plan) => (
                    <SelectButton
                        {...plan}
                        key={plan.id}
                        title={plan.title}
                        duration={plan.duration}
                        price={plan.price}
                        days={plan.days}
                        name={'plan'}
                        checked
                    />
                ))}
                <p>Plan automatically renews monthly until cancelled</p>
                <button className={b('restore-button')}>Restore purchase</button>
                <button
                    type="submit"
                    value="submit"
                    className={b('submit-button')}
                >{t('Start your 7-day free trial')}</button>
            </form>
            <ProfileSubscriptionPageRightImg/>
        </div>
    );
};