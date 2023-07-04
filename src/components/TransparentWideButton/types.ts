import {HTMLAttributes} from 'react';

export interface PlanButtonProps<T> extends HTMLAttributes<HTMLElement> {
    title: string,
    duration: string,
    price?: string,
    days?: string,
    selected?: boolean,
    planId: T,
    id: string,
    handleChange: VoidFunction,
    checked: boolean,
}