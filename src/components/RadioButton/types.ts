import React from 'react';

export interface RadioButtonProps {
  value: string;
  icon?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  disabled: boolean;
  defaultChecked?: boolean;
  title: string;
  checked: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
