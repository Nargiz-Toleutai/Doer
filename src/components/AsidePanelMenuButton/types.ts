import { HTMLAttributes } from 'react';

export interface MenuButtonProps<T> extends HTMLAttributes<HTMLElement>{
    menuId: T,
    title: string,
    selected?: boolean,
    showCounter?: boolean,
    icon?: string,
    name?: string;
}

