import React from 'react';

export interface PanelButtonProps {
    id: string | number,
    title: string,
    selected?: boolean,
    icon: string,
    name?: string,
    description?: string | number,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    removed?: boolean
}