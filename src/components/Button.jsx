import React from 'react'

const Button = ({width, height, text, onClickHandler, bgColor}) => {
  return (
    <div 
            className={`$flex rounded-btn`}
            onClick={onClickHandler}
            style={{
                width: width || null,
                height: height || null,
                'background-color': bgColor || 'var(--color-primary)',
            }}
    >
        {text}
    </div>
  )
}

export default Button