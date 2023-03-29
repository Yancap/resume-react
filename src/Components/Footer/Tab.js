import React from 'react'

export const Tab = ({text, icon, target}) => {
  return (
    <div data-point={target}>
        
        <div>
            <img src={icon} alt="" srcset="" />
        </div>
        <div>
            <span>
                {text}
            </span>
        </div>
    </div>
  )
}
