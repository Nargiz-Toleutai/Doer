import block from 'bem-cn-lite';
import React from 'react';

import './RadioButton.scss';

import { RadioButtonProps } from './types';
import { Icon } from '../Icon';

const b = block('radio-button');


export const RadioButton: React.FC<RadioButtonProps> = ({  title, icon, checked, onChange, value}) => {
  return (
    <label className={b()}>
      <input
        className={b('input')}
        type='radio'
        value={value}
        name={title}
        checked={checked}
        onChange={onChange}
      />
      <Icon size={24} name={icon}/>
      <span className={b('title')}>{title}</span>
    </label>
  );
};

/*
<div className="wrapper">
  <div className="section">
    <span className="section-title">
      Beading & Jewelry Making Supplies
    </span>
    <div className="radio-buttons">
      <input type="radio" id="first-1" className="first" name="section-1" value="0" checked>
        <label htmlFor="first-1">unsubscribe jdhsakhdak</label>
        <input type="radio" id="second-1" className="second" name="section-1" value="1">
          <label htmlFor="second-1">once a week</label>
          <input type="radio" id="third-1" className="third" name="section-1" value="2">
            <label htmlFor="third-1">subscribe all</label>
            <div className="slider"></div>
    </div>
  </div>
</div>
 */





/*
import block from 'bem-cn-lite';
import React from 'react';

import { RadioButtonOptionProps } from './types';
import { Icon } from '../Icon';

const b = block('radio-button');


export const RadioButton = React.forwardRef<HTMLLabelElement, RadioButtonOptionProps>(
  function RadioButtonOption(props, ref) {
    const {disabled = false, value, title, defaultChecked, checked, icon} = props;
    const [checkedState, setCheckedState] = React.useState(defaultChecked);

    const isChecked = checked ? checked : checkedState;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!checked) {
        setCheckedState(event.target.checked);
      }
    };


    return (
    <label className={b('option', {
      disabled,
      checked: isChecked,
    })}
           ref={ref}>
      <input
        className={b('input')}
        type='radio'
        value={value}
        name={title}
        checked={checked}
        onChange={handleChange}
      />
      <Icon size={24} name={icon}/>
      <span className={b('title')}>{title}</span>
    </label>
    );
  },
);

interface RadioButtonRef {
  setCurrent: (node: HTMLLabelElement | null) => void;
}

export const RadioButton = React.forwardRef<HTMLElement | RadioButtonRef, RadioButtonProps>(
  (props: RadioButtonProps, ref: ForwardedRef<HTMLElement | RadioButtonRef>) => {
    const internalRef = useRef<HTMLLabelElement | null>(null);

    useImperativeHandle(ref, () => ({
      setCurrent: (node: HTMLLabelElement | null) => {
        internalRef.current = node;
      }
    }));
    return (
      <label ref={internalRef} className={b('radio-button')}>
        <input
          className={b('input')}
          type='radio'
          value={props.value}
          name={props.title}
          checked={props.checked}
          onChange={props.onChange}
        />
        <Icon size={24} name={props.icon}/>
        <div className={b('title')}>{props.title}</div>
      </label>
    );
  }
);
RadioButton.displayName = 'RadioButton';

 */






























/*


 */