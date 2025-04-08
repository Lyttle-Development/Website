import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface ButtonProps {
  text: string
  color: string
  className?: string
}

export const ButtonBlock: React.FC<ButtonProps> = (props) => {
  const { text, color, className } = props
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.blue as string]: color === 'blue',
          [styles.orange as string]: color === 'orange',
        },
        className,
      )}
    >
      {text}
    </button>
  )
}
