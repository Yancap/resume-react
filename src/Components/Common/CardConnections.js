import React from 'react'

export const CardConnections = ({objects}) => {
  return (
    <div>
        {objects.map((obj, index) => (
            <div key={index} className={index == objects.length - 1 ? 'none': 'border-separator'}>
                <div>
                    {index}
                    {obj.icon}
                </div>
                <div>
                    <div>
                        <span>{obj.span}:</span>
                    </div>
                    <div>
                        <p>{obj.info}</p>
                    </div>
                </div>
            </div>
            )
        )}
    </div>
  )
}
