import block from 'bem-cn-lite';
import React, { ChangeEvent } from 'react';

import { updateAvatar } from './store';
import {ProfilePhotoProps} from './types';
import { useAppDispatch, useAppSelector } from '../../store/mainStore/hooks/redux';
import './ProfilePhoto.scss';
import { Icon } from '../Icon';


const b = block('profile-photo');

export const ProfilePhoto: React.FC <ProfilePhotoProps> = ({ colorId }) => {
    const dispatch = useAppDispatch();
    const avatarUrl = useAppSelector((state) => state.avatar.avatarUrl);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();

        reader.onloadend = () => {

            dispatch(updateAvatar(reader.result as string));
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className={b()}>
            <img src={avatarUrl} alt="Profile" className={b('avatar')} />
            <div className={b('upload')}>
                <input type="file" onChange={handleImageUpload} style={{ opacity: 0, position: 'absolute', zIndex: 1 }} />
                <Icon name='camera' size={20} />
            </div>
        </div>
    );

}







