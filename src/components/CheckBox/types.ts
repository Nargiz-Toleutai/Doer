import React from 'react';

export interface CheckBoxProps {
    checked: boolean | undefined;
    onCheckedChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}