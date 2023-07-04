import block from 'bem-cn-lite';
import React from 'react';




const b = block('plan-button');

export const TransparentWideButton: React.FC = ()  => {
    return (
        <button className={b()}>
    </button>
    )
}



/*
<div className={b('info')}>
            <div className={b('title')}>{title}</div>
            <div className={b('price')}>
                <h5>{days} {price}</h5><p>  /{duration}</p>
            </div>
        </div>
        <div className={b('active')}>Active until Oct 20</div>


           <div id={String(planId)} className={b('item')}>
            {title}
        </div>
        {price &&
            <div className={b('info')}>
                <div className={b('price')}>
                    <h5>{days} {price}</h5><p>  /{duration}</p>
                </div>
                <div className={b('active')}>Active until Oct 20</div>
            </div>
 */