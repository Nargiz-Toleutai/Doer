import block from 'bem-cn-lite';
import React from 'react';

import {SelectButtonProps} from './types';
import './SelectButton.scss'

const b = block('select-button');

export const SelectButton: React.FC<SelectButtonProps> = ({
                                                              title,
                                                              name,
                                                              handleChange,
                                                              checked,
                                                              price,
                                                              duration,
                                                              days
                                                          }) => {
    const radioId = `price_plan_${price ?? 0}`;
    return (
        <div className={b()}>
            <label className={b('label')} htmlFor={radioId}>
                <div className={b('info')}>
                    <div className={b('title')}>{title}</div>
                    {price
                        ? <div className={b('price')}>
                            <h5>{days}{price}</h5><p>/{duration}</p>
                        </div>
                        : <div className={b('price')}>
                            <h5>{days}</h5><p>/{duration}</p>
                        </div>
                    }
                </div>
                {price && <div className={b('active')}>Active until Oct 20</div>}
            </label>
            <input
                id={radioId}
                className={b('input')}
                type='radio'
                onChange={handleChange}
                name={name}
                checked={checked}
            />
        </div>
    )
}