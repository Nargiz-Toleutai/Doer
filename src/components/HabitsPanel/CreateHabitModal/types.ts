import React from 'react';

export interface CreateHabitModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  selected?: boolean;
}

