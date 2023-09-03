import block from 'bem-cn-lite';
import React from 'react';

import './CircleAddButton.scss'
import { Icon } from '../Icon';

const b = block('circle-add-button');

export const CircleAddButton: React.FC = () => {
  return (
    <button type="submit" className={b()}><Icon name={'plus-circle'} size={24}/></button>
  )
}
