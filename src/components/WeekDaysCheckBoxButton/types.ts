import React from 'react';

export interface WeekDaysCheckBoxButtonProps {
  checked: boolean | undefined;
  onCheckedChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string,
  id: string,
  name: string,
}