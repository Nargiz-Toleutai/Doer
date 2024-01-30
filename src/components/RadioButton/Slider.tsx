import React, { FC } from 'react';
import './Slider.scss';

interface Option {
  value: string;
  label: string;
}

interface SliderProps {
  options: Option[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: FC<SliderProps> = ({ options, selectedValue, onChange }) => {
  return (
    <div className="slider">
      {options.map((option) => (
        <div key={option.value} className="slider-option">
          <input
            type="radio"
            id={option.value}
            name="slider"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}

          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
      <div
        className="slider-indicator"
        style={{ transform: `translateX(${options.findIndex(o => o.value === selectedValue) * 100}%)` }}
      />
    </div>
  );
};
