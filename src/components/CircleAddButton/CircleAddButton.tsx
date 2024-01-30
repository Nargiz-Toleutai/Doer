import block from 'bem-cn-lite';
import React from 'react';

import {CircleAddButtonProps } from './types';
import './CircleAddButton.scss'
import { Icon } from '../Icon';

const b = block('circle-add-button');

export const CircleAddButton: React.FC<CircleAddButtonProps> = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={b()}><Icon name={'plus-circle'} size={24}/></button>
  )
}
