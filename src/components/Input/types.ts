import React, { SetStateAction } from 'react';

export interface InputProps {
    id: string;
    title?: string | null;
    resetButton?: boolean;
    labelInside?: boolean;
    // chevronDownButton?: boolean;
    // value?: string;
    // inputStyle?: React.CSSProperties;
    // onChange?: (event: SetStateAction<string>) => void;
}