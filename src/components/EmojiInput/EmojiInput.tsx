import Picker from '@emoji-mart/react';
import block from 'bem-cn-lite';
import React, { useState } from 'react';

import {EmojiInputProps} from './types';
import './EmojiInput.scss';
import { ClickOutsideWrapper } from '../../utils/ClickOutsideWrapper';
import {Icon} from '../Icon';

const b = block('emoji-input');

export const EmojiInput: React.FC<EmojiInputProps> = ({labelInside, title, chevronDownButton}) => {
  const [emoji, setEmoji] = useState('');
  const [emojiName, setEmojiName] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (selectedEmoji: {native: string, name: string}) => {
    setEmoji(selectedEmoji.native);
    setEmojiName(selectedEmoji.name);
    setShowPicker(false);
  };

  const handleEmojiClick = () => {
    setShowPicker(!showPicker); // Переключаем видимость палитры при клике
  };

  const handleOutsideClick = () => {
    if (showPicker) {
      setShowPicker(false);
    }
  };




  return (
      <div className={b()}>
        <label className={b('label', {inside: labelInside})}>
          {title}
        </label>
        <div className={b('body')}>
          <div className={b('emoji')}>{emoji}</div>
          <div className={b('emoji-name')}>{emojiName}</div>
          {showPicker &&
            <ClickOutsideWrapper onOutsideClick={handleOutsideClick}>
              <Picker onEmojiSelect={handleEmojiSelect} />
            </ClickOutsideWrapper>
          }
        </div>
        {chevronDownButton && (
          <button className={b('button')} onClick={handleEmojiClick}>
            <Icon name="reset" size={24} className={b('arrow-button')} />
          </button>
        )}
      </div>
    );
};

/*

 */
