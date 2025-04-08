import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface ButtonProps {
  text: string
  color: string
}

function getGolor(color: string) {
  switch (color) {
    case 'blue':
      return '#6C63FF'
    case 'orange':
      return '#FF6363'
    default:
      return '#ffffff'
  }
}

export const ButtonBlock: React.FC<ButtonProps> = (props) => {
  const { text, color } = props
  return (
    <button
      className={classNames(styles.button, {
        [styles.blue as string]: color === 'blue',
        [styles.orange as string]: color === 'orange',
      })}
      style={{
        backgroundColor: getGolor(color),
      }}
    >
      {text}
    </button>
  )
}
